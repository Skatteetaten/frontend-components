import React from 'react';
import { matches } from '../utils/test-utils';
import { shallow, mount } from 'enzyme';
import { ComboBox } from '../index';

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
    const wrapper = oppsettFullDOM();
    const combobox = wrapper.find(ComboBox);
    expect(combobox.prop('autoComplete')).toEqual('on');
    expect(combobox.prop('allowFreeform')).toEqual(false);
    expect(combobox.prop('label')).toEqual(undefined);
    expect(combobox.prop('disabled')).toEqual(false);
  });

  it('rendrer Cobobox med riktige props ', () => {
    const wrapper = oppsettFullDOM({
      id: 'Combobox-1',
      disabled: true,
    });
    expect(wrapper.find(ComboBox).prop('disabled')).toEqual(true);
    expect(wrapper.first('div').prop('id')).toEqual('Combobox-1');
  });

  it('rendrer nedtrekksliste når Cobobox klikkes ', () => {
    const wrapper = oppsettFullDOM({
      options: [{ key: 'A', text: 'alfa', value: 'Alfa' }],
    });

    const button = wrapper.find('CustomizedIconButton');
    button.simulate('click');
    expect(wrapper.exists('.ms-ComboBox-optionText')).toEqual(true);
  });

  it('rendrer feilmelding under Cobobox ', () => {
    const wrapper = oppsettFullDOM({
      errorMessage: 'Feilmelding',
    });

    expect(wrapper.html()).toContain('Feilmelding');
  });
});
