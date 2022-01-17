import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Dropdown } from '.';
import { KeytipData } from '@fluentui/react';

function oppsettShallow(props) {
  return shallow(<Dropdown {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<Dropdown {...props} />);
}

const options = [
  { key: null, text: '' },
  { key: 'Header', text: 'Actions', itemType: Dropdown.ItemType.Header },
  { key: 'A', text: 'Option a' },
  { key: 'B', text: 'Option b' },
  { key: 'C', text: 'Option c' },
  { key: 'D', text: 'Option d' },
  { key: 'E', text: 'Option e' },
  { key: 'divider_2', text: '-', itemType: Dropdown.ItemType.Divider },
  { key: 'Header2', text: 'People', itemType: Dropdown.ItemType.Header },
  { key: 'F', text: 'Option f' },
  { key: 'G', text: 'Option g' },
  { key: 'H', text: 'Option h' },
  { key: 'I', text: 'Option i' },
  { key: 'J', text: 'Option j' },
];

describe('Dropdown komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettShallow({
      placeholder: 'Select an option',
      options: options,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer feilmelding under Dropdown ', () => {
    const wrapper = oppsettShallow({
      errorMessage: 'Feilmelding',
    });

    expect(wrapper.html()).toContain('Feilmelding');
  });

  it('rendrer nedtrekksliste når Dropdown klikkes ', () => {
    const wrapper = oppsettFullDOM({
      options: options,
    });

    const input = wrapper.find('.ms-Dropdown');
    input.simulate('click');
    expect(wrapper.exists('.ms-Dropdown-optionText')).toEqual(true);
    expect(wrapper.exists('.ms-Dropdown-header')).toEqual(true);
    expect(wrapper.exists('.ms-Dropdown-divider')).toEqual(true);
  });
  it('rendrer input med readonly når komponenten har props readOnly ', () => {
    const wrapper = oppsettFullDOM({
      readOnly: true,
      options: options,
      defaultSelectedKey: 'J',
    });
    expect(wrapper.find('input').props().readOnly).toEqual(true);
  });
});
