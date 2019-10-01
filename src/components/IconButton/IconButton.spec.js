import React from 'react';
import { shallow, mount } from 'enzyme';
import IconButton from './IconButton';
import { matches } from './../utils/test-utils';

function oppsettShallow(props) {
  return shallow(<IconButton {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<IconButton {...props} />);
}

describe('IconButton komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <IconButton title="Lagre" circle={true} type="default" icon="Save" />
    );
  });

  it('rendrer IconButton med default props', () => {
    const wrapper = oppsettShallow({});

    expect(wrapper.prop('circle')).toEqual(false);
    expect(wrapper.prop('buttonType')).toEqual('default');
    expect(wrapper.prop('icon')).toEqual(undefined);
    expect(wrapper.prop('title')).toEqual(undefined);
    expect(wrapper.prop('disabled')).toEqual(undefined);
    expect(wrapper.prop('onClick')).toEqual(undefined);
  });

  it('rendrer IconButton med riktige props', () => {
    const wrapper = oppsettFullDOM({
      title: 'Lagre',
      circle: true,
      buttonType: 'large',
      icon: 'Save'
    });

    expect(wrapper.prop('title')).toEqual('Lagre');
    expect(wrapper.prop('circle')).toEqual(true);
    expect(wrapper.prop('buttonType')).toEqual('large');
    const icon = wrapper.find('.ms-Icon');
    expect(icon.prop('data-icon-name')).toEqual('Save');
  });
});
