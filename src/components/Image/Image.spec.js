import React from 'react';
import { mount } from 'enzyme';
import Image from './Image';

function oppsettFullDOM(props) {
  return mount(<Image {...props} />);
}

it('renderer Image uten å kræsje ', () => {
  oppsettFullDOM();
});

it('renderer Image med riktige props ', () => {
  const wrapper = oppsettFullDOM({
    imageFit: 'center',
    coverStyle: 'landscape',
    alt: 'Bildetekst'
  });

  expect(wrapper.prop('imageFit')).toEqual('center');
  expect(wrapper.prop('coverStyle')).toEqual('landscape');
  expect(wrapper.find('img').prop('alt')).toEqual('Bildetekst');
});
