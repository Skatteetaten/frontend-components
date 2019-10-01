import React from 'react';
import { mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import ActionButton from './ActionButton';

function oppsettMount(props) {
  return mount(<ActionButton {...props} />);
}

describe('ActionButton komponent', () => {
  it('matcher snapshot', () => {
    matches(<ActionButton ariaLabel="Button label" />);
  });

  it('rendrer actionbutton med standard props', () => {
    const wrapper = oppsettMount({
      ariaLabel: 'Button label'
    });

    expect(wrapper.prop('iconSize')).toEqual('icon');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('disabled')).toEqual(false);
  });

  it('oppdaterer actionbutton med riktig props', () => {
    const wrapper = oppsettMount({
      iconSize: ActionButton.LARGE,
      color: 'green',
      icon: 'AddOutline',
      disabled: true,
      ariaLabel: 'Button label'
    });

    expect(wrapper.prop('iconSize')).toEqual('xxLarge');
    expect(wrapper.prop('color')).toEqual('green');
    expect(wrapper.prop('icon')).toEqual('AddOutline');
    expect(wrapper.prop('disabled')).toEqual(true);
  });
});
