import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
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
        .find(RadioButtonGroup)
        .first()
        .prop('id')
    ).toEqual('radiobuttongroup-id');
    expect(wrapper.prop('className')).toEqual('radiobuttongroup-class');
    expect(
      wrapper.find('StyledChoiceGroupBase').props().ariaLabelledBy
    ).toEqual('radiobuttongroup-id-label');
    expect(wrapper.find('StyledChoiceGroupBase').prop('required')).toEqual(
      true
    );
    expect(wrapper.exists('#ChoiceGroup2-B')).toEqual(true);
    expect(wrapper.find('input#ChoiceGroup2-B').prop('checked')).toEqual(true);
    expect(wrapper.find('input#ChoiceGroup2-B').prop('disabled')).toEqual(
      undefined
    );
    expect(wrapper.find('input#ChoiceGroup2-C').prop('checked')).toEqual(false);
    expect(wrapper.find('input#ChoiceGroup2-C').prop('disabled')).toEqual(true);
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
  it('rendrer RadioButtonGroup med beskrivelse', () => {
    const wrapper = oppsettFullDOM({
      required: true,
      id: 'radiobuttongroup-id',
      className: 'radiobuttongroup-class',
      label: 'Velg en',
      defaultSelectedKey: 'B',
      options: [
        {
          key: 'A',
          text: 'Valg A',
          description: 'Beskrivelse til A'
        },
        {
          key: 'B',
          text: 'Valg B',
          description: 'Beskrivelse til B'
        }
      ]
    });
    const radiobutton = wrapper.find('StyledChoiceGroupOptionBase');
    expect(
      radiobutton
        .at(1)
        .find('.ms-ChoiceFieldLabel')
        .first()
        .html()
    ).toContain('Valg B');
    expect(
      radiobutton
        .at(1)
        .find('.ms-ChoiceFieldLabel')
        .last()
        .html()
    ).toContain('Beskrivelse til B');
  });
});
