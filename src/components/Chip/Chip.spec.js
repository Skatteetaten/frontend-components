import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Chip from './Chip';

function oppsettShallow(props) {
  return shallow(<Chip {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<Chip {...props} />);
}

describe('Chip komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettFullDOM();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer Chip med default props', () => {
    const wrapper = oppsettShallow();

    expect(wrapper.prop('type')).toEqual('beige');
    expect(wrapper.prop('aria-label')).toEqual(undefined);
    expect(wrapper.prop('size')).toEqual('standard');
  });

  it('setter CheckBox med riktige props', () => {
    const wrapper = oppsettShallow({
      size: 'large',
      type: Chip.OK
    });

    expect(wrapper.prop('type')).toEqual('lightGreen');
    expect(wrapper.prop('size')).toEqual('large');
  });
});
