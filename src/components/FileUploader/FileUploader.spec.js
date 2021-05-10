import React from 'react';
import { matches } from './../utils/test-utils';
import { FileUploader } from './FileUploader';
import { FileFormatTypes, Language } from './FileUploader.types';
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
      uploadFile: jest.fn(),
    });
    expect(wrapper.find('span').first().text()).toEqual(
      'Aksepterte filformater: .jpg, .png'
    );
  });
  it('skal rendre med info', () => {
    const wrapper = oppsettShallow({
      info:
        'Husk å sjekke for sensitive personopplysninger, og evt fjerne disse før du laster opp vedleggene.',
      ariaLabel: 'Filopplaster',
      uploadFile: jest.fn(),
    });
    expect(wrapper.find('div').last().text()).toEqual(
      'Husk å sjekke for sensitive personopplysninger, og evt fjerne disse før du laster opp vedleggene.'
    );
  });
  it('skal vise engelske tekster dersom engelsk språk er valgt', () => {
    const wrapper = oppsettShallow({
      acceptedFileFormats: [FileFormatTypes.jpg, FileFormatTypes.png],
      language: Language.en,
      uploadFile: jest.fn(),
    });
    expect(wrapper.find('u').first().text()).toEqual('Add file(s)');
    expect(wrapper.find('span').first().text()).toEqual(
      'Accepted file formats: .jpg, .png'
    );
  });
  it('skal kjøre uploadFile-funksjon når bruker laster opp fil', () => {
    const mockFunc = jest.fn();
    const wrapper = oppsettFullDOM({
      acceptedFileFormats: [FileFormatTypes.doc, FileFormatTypes.docx],
      ariaLabel: 'Filopplaster',
      axiosPath: 'http://localhost',
      language: Language.nb,
      uploadFile: () => mockFunc(),
    });
    wrapper.find('input').simulate('change', {
      target: {
        files: [{ name: 'tekst.doc' }],
      },
    });
    expect(mockFunc.mock.calls.length).toBe(1);
  });
  it('skal gi feilmelding dersom bruker laster opp feil filtype', () => {
    const mockFunc = jest.fn();
    const wrapper = oppsettFullDOM({
      acceptedFileFormats: [FileFormatTypes.doc, FileFormatTypes.docx],
      ariaLabel: 'Filopplaster',
      axiosPath: 'http://localhost',
      uploadFile: () => mockFunc(),
    });
    expect(wrapper.exists('ErrorMessage')).toEqual(false);
    wrapper.find('input').simulate('change', {
      target: {
        files: [{ name: 'tekst.jpeg' }],
      },
    });
    expect(wrapper.exists('ErrorMessage')).toEqual(true);
    expect(wrapper.find('ErrorMessage').text()).toEqual(
      'Dette filformatet er ikke godkjent'
    );
  });
  it('skal kjøre deleteFile dersom bruker trykker kryss i liste', () => {
    const mockFunc = jest.fn();
    const mockFuncDelete = jest.fn((file) => file);
    const wrapper = oppsettFullDOM({
      ariaLabel: 'Filopplaster',
      uploadFile: () => mockFunc(),
      files: [{ name: 'FilNavn.png', id: '123456789' }],
      deleteFile: (file, err) => mockFuncDelete(file),
    });
    expect(wrapper.find('li').length).toEqual(1);
    expect(wrapper.find('li').first().text()).toEqual('FilNavn.png');
    wrapper.find('li').first().find('button').simulate('click');
    expect(mockFuncDelete).toHaveBeenCalled();
    expect(mockFuncDelete).toHaveBeenCalledWith({
      id: '123456789',
      name: 'FilNavn.png',
    });
  });
  it('støtter csv format', () => {
    const mockFunc = jest.fn();
    const wrapper = oppsettFullDOM({
      acceptedFileFormats: [FileFormatTypes.csv],
      ariaLabel: 'Filopplaster',
      axiosPath: 'http://localhost',
      uploadFile: () => mockFunc(),
    });
    expect(wrapper.find('span').first().text()).toEqual(
      'Aksepterte filformater: .csv'
    );
    wrapper.find('input').simulate('change', {
      target: {
        files: [{ name: 'fil.csv' }],
      },
    });
    expect(wrapper.exists('ErrorMessage')).toEqual(false);
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
