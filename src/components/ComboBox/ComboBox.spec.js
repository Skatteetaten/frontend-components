import React from 'react';
import { matches } from './../utils/test-utils';
import { shallow, mount } from 'enzyme';
import ComboBox from './ComboBox';

function oppsettShallow(props) {
  return shallow(<ComboBox {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<ComboBox {...props} />);
}

describe('Combobox komponent', () => {
  it('matcher med snapshot', () => {
    matches(<ComboBox />);
  });

  it('rendrer Combobox med default props', () => {
    const wrapper = oppsettShallow();
    const combobox = wrapper.find('SkeCombobox');
    expect(combobox.prop('autoComplete')).toEqual('on');
    expect(combobox.prop('expandOnFocus')).toEqual(false);
    expect(combobox.prop('allowFreeform')).toEqual(false);
    expect(combobox.prop('label')).toEqual(undefined);
    expect(combobox.prop('disabled')).toEqual(false);
    expect(combobox.prop('shouldOpenOnFocus')).toEqual(true);
  });

  it('rendrer Cobobox med riktige props ', () => {
    const wrapper = oppsettShallow({
      id: 'Combobox-1',
      disabled: true
    });
    expect(wrapper.find('SkeCombobox').prop('disabled')).toEqual(true);
    expect(wrapper.first('div').prop('id')).toEqual('Combobox-1');
  });

  it('rendrer Cobobox label', () => {
    const wrapper = oppsettShallow({
      label: 'Nedtrekksliste'
    });
    const label = wrapper.find('StyledLabelBase');

    expect(label.html()).toContain('labelText');
    expect(label.html()).toContain('Nedtrekksliste');
  });

  it('rendrer Cobobox med hjelpetekst', () => {
    const wrapper = oppsettShallow({
      help: 'Hjelpetekst'
    });
    const helpIcon = wrapper.find('CustomizedIconButton');
    expect(helpIcon.prop('ariaLabel')).toEqual('Hjelp');
    expect(helpIcon.prop('title')).toEqual('HelpOutline');

    helpIcon.simulate('click');
    const callout = wrapper.find('Callout');
    expect(wrapper.exists('Callout')).toEqual(true);
    expect(callout.html()).toContain('Hjelpetekst');
    expect(callout.prop('color')).toEqual('lightGreen');
    expect(callout.prop('ariaLabel')).toEqual('Hjelpetekst');
  });

  it('rendrer Cobobox med hjelpetekst med markup', () => {
    const wrapper = oppsettShallow({
      help: <em>'Hjelpetekst'</em>
    });
    const helpIcon = wrapper.find('CustomizedIconButton');

    helpIcon.simulate('click');
    const callout = wrapper.find('Callout');
    expect(wrapper.exists('Callout')).toEqual(true);
    expect(callout.find('em').html()).toContain('Hjelpetekst');
  });

  it('rendrer nedtrekksliste når Cobobox klikkes ', () => {
    const wrapper = oppsettFullDOM({
      options: [{ key: 'A', text: 'alfa', value: 'Alfa' }]
    });

    const button = wrapper.find('CustomizedIconButton');
    button.simulate('click');
    expect(wrapper.exists('.ms-ComboBox-optionText')).toEqual(true);
  });

  it('rendrer feilmelding under Cobobox ', () => {
    const wrapper = oppsettShallow({
      errorMessage: 'Feilmelding'
    });

    expect(wrapper.html()).toContain('SkeComboBoxError');
    expect(wrapper.html()).toContain('Feilmelding');
  });
});
