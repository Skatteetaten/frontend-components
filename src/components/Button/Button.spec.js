import React from 'react';
import { matches } from './../utils/test-utils';
import { mount } from 'enzyme';
import Button from './Button';

function oppsettFullDOM(props) {
  return mount(<Button {...props}>Knappetekst</Button>);
}

describe('Button komponent ', () => {
  it('matcher snapshot', () => {
    matches(<Button>Knapptekst</Button>);
  });

  it('renders Button med riktig DOM', () => {
    const wrapper = oppsettFullDOM();
    const label = wrapper.find('.ms-Button-label');

    expect(wrapper.prop('type')).toEqual('primaryRounded');
    expect(wrapper.prop('disabled')).toEqual(false);
    expect(wrapper.prop('primary')).toEqual(false);
    expect(wrapper.prop('icon')).toEqual(undefined);
    expect(label.html('icon')).toContain('Knappetekst');
  });

  it('setter Button med riktige props', () => {
    const wrapper = oppsettFullDOM({
      type: 'secondary',
      icon: 'Add',
      disabled: true
    });

    expect(wrapper.prop('type')).toEqual('secondary');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('primary')).toEqual(false);
    expect(wrapper.prop('icon')).toEqual('Add');
  });
});
