import React from 'react';
import { matches } from './../utils/test-utils';
import FileUploader, { FileFormatTypes } from './FileUploader';
import { mount, shallow } from 'enzyme';

function oppsettShallow(props) {
  return shallow(<FileUploader {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<FileUploader {...props} />);
}

describe('FileUploader komponent', () => {
  it('matcher snapshot', () => {
    matches(<FileUploader />);
  });
  it('skal rendre med riktig props', () => {
    const wrapper = oppsettShallow({
      acceptedFileFormats: [FileFormatTypes.jpg, FileFormatTypes.png],
      ariaLabel: 'Filopplaster',
      uploadFile: jest.fn()
    });
    expect(wrapper.find('label').props()['aria-label']).toEqual('Filopplaster');
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toEqual('Aksepterte filformater: .jpg, .png');
  });
  it('skal kjøre uploadFile-funksjon når bruker laster opp fil', () => {
    const mockFunc = jest.fn();
    const wrapper = oppsettFullDOM({
      acceptedFileFormats: [FileFormatTypes.doc, FileFormatTypes.docx],
      ariaLabel: 'Filopplaster',
      uploadFile: () => mockFunc()
    });
    wrapper.find('input').simulate('change', {
      target: {
        files: [{ name: 'tekst.doc' }]
      }
    });
    expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
  });
  it('skal gi feilmelding dersom bruker laster opp feil filtype', () => {
    const mockFunc = jest.fn();
    const wrapper = oppsettFullDOM({
      acceptedFileFormats: [FileFormatTypes.doc, FileFormatTypes.docx],
      ariaLabel: 'Filopplaster',
      uploadFile: () => mockFunc()
    });
    expect(wrapper.exists('ErrorMessage')).toEqual(false);
    wrapper.find('input').simulate('change', {
      target: {
        files: [{ name: 'tekst.jpeg' }]
      }
    });
    expect(wrapper.exists('ErrorMessage')).toEqual(true);
    expect(wrapper.find('ErrorMessage').text()).toEqual(
      'Dette filformatet er ikke godkjent'
    );
  });
});
