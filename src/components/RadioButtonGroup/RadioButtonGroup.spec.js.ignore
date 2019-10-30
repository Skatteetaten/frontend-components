import React from 'react';
import { mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import RadioButtonGroup from './RadioButtonGroup';

const options = [
  {
    key: 'A',
    text: 'Valg A'
  },
  {
    key: 'B',
    text: 'Valg B'
  },
  {
    key: 'C',
    text: 'Valg C',
    disabled: true
  },
  {
    key: 'D',
    text: 'Valg D',
    disabled: true
  }
];

function oppsettFullDOM(props) {
  return mount(<RadioButtonGroup {...props} />);
}

describe('RadioButtonGroup komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <RadioButtonGroup
        required={true}
        label={'Velg en'}
        defaultSelectedKey={'B'}
        options={options}
      />
    );
  });

  it('rendrer RadioButtonGroup med riktig props', () => {
    const wrapper = oppsettFullDOM({
      required: true,
      id: 'radiobuttongroup-id',
      className: 'radiobuttongroup-class',
      label: 'Velg en',
      defaultSelectedKey: 'B',
      options: options
    });
    expect(
      wrapper
        .find('div')
        .first()
        .prop('id')
    ).toEqual('radiobuttongroup-id');
    expect(wrapper.prop('className')).toEqual('radiobuttongroup-class');
    expect(
      wrapper.find('StyledChoiceGroupBase').props().ariaLabelledBy
    ).toEqual('Velg en');
    expect(wrapper.find('StyledChoiceGroupBase').prop('required')).toEqual(
      true
    );
    expect(wrapper.exists('#ChoiceGroup3-B')).toEqual(true);
    expect(wrapper.find('input#ChoiceGroup3-B').prop('checked')).toEqual(true);
    expect(wrapper.find('input#ChoiceGroup3-B').prop('disabled')).toEqual(
      undefined
    );
    expect(wrapper.find('input#ChoiceGroup3-C').prop('checked')).toEqual(false);
    expect(wrapper.find('input#ChoiceGroup3-C').prop('disabled')).toEqual(true);
  });

  it('rendrer RadioButtonGroup med riktig antall valg og innhold', () => {
    const wrapper = oppsettFullDOM({
      required: true,
      id: 'radiobuttongroup-id',
      className: 'radiobuttongroup-class',
      label: 'Velg en',
      defaultSelectedKey: 'B',
      options: options
    });

    const radiobutton = wrapper.find('StyledChoiceGroupOptionBase');
    expect(radiobutton).toHaveLength(4);
    expect(
      radiobutton
        .at(2)
        .find('.ms-ChoiceFieldLabel')
        .html()
    ).toContain('Valg C');
  });
});
