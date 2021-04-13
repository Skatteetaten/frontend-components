import React from 'react';
import { mount } from 'enzyme';
import { Icon } from '../index';

function oppsettFullDOM(props) {
  return mount(<Icon {...props} />);
}

it('renderer Grid uten å kræsje ', () => {
  oppsettFullDOM();
});

it('renderer Icon med riktig ikonnavn ', () => {
  const wrapper = oppsettFullDOM({
    iconName: 'AttachFile',
  });

  const icon = wrapper.find('IconBase');
  expect(icon.prop('iconName')).toEqual('AttachFile');
});
