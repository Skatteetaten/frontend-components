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
});
