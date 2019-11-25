import React from 'react';
import { mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import LabelWithCallout from './LabelWithCallout';

function oppsettFullDOM(props) {
  return mount(<LabelWithCallout {...props} />);
}

describe('LabelWithCallout komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <LabelWithCallout
        id={'LabelWithCallout_id'}
        calloutFloating={false}
        help={'Dette er en mock-hjepetekst'}
        label={'Mock Label'}
      />
    );
  });
  it('rendrer LabelWithCallout med riktig props for hjelpetekst', () => {
    const wrapper = oppsettFullDOM({
      id: 'LabelWithCallout_id',
      calloutFloating: false,
      help: 'Dette er en mock-hjepetekst',
      label: 'Mock Label'
    });
    expect(
      wrapper
        .find('div')
        .first()
        .prop('id')
    ).toEqual('LabelWithCallout_id');
    const helpIcon = wrapper.find('.ms-Button--icon');
    const icon = helpIcon.find('i');
    expect(icon.prop('data-icon-name')).toEqual('HelpOutline');
    expect(helpIcon.prop('title')).toEqual('Hjelp');
    helpIcon.simulate('click');
    const callout = wrapper.find('.ms-Callout');
    expect(wrapper.exists('Callout')).toEqual(true);
    expect(callout.html()).toContain('Dette er en mock-hjepetekst');
  });
  it('rendrer LabelWithCallout med riktig props for varselstekst', () => {
    const wrapper = oppsettFullDOM({
      id: 'LabelWithCallout_id',
      calloutFloating: false,
      warning: 'Dette er en mock-varselstekst',
      label: 'Mock Label'
    });
    expect(
      wrapper
        .find('div')
        .first()
        .prop('id')
    ).toEqual('LabelWithCallout_id');
    const warningIcon = wrapper.find('.ms-Button--icon');
    const icon = warningIcon.find('i');
    expect(icon.prop('data-icon-name')).toEqual('WarningOutline');
    expect(warningIcon.prop('title')).toEqual('Varsel');
    warningIcon.simulate('click');
    const callout = wrapper.find('.ms-Callout');
    expect(wrapper.exists('Callout')).toEqual(true);
    expect(callout.html()).toContain('Dette er en mock-varselstekst');
  });
  it('lukker callout på kryss ut', () => {
    const wrapper = oppsettFullDOM({
      id: 'LabelWithCallout_id',
      calloutFloating: false,
      help: 'Dette er en mock-hjepetekst',
      label: 'Mock Label'
    });
    const helpIcon = wrapper.find('.ms-Button--icon');
    helpIcon.simulate('click');
    expect(wrapper.exists('Callout')).toEqual(true);
    const closeBtn = wrapper.find('.ms-Button--icon').last();
    closeBtn.simulate('click');
    expect(wrapper.exists('Callout')).toEqual(false);
  });
  it('skal kjøre brukerspesifikk event på click', () => {
    const mockFunksjon = jest.fn();
    const wrapper = oppsettFullDOM({
      id: 'LabelWithCallout_id',
      calloutFloating: false,
      help: 'Dette er en mock-hjepetekst',
      label: 'Mock Label',
      userDefinedEvent: mockFunksjon()
    });
    const helpIcon = wrapper.find('.ms-Button--icon');
    helpIcon.simulate('click');
    expect(mockFunksjon).toHaveBeenCalled();
  });
});
