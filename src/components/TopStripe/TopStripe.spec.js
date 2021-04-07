import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
import TopStripe from './TopStripe';

function oppsettFullDOM(props) {
  return mount(<TopStripe {...props} />);
}
describe('TopStripe komponent', () => {
  it('matcher snapshot ', () => {
    matches(<TopStripe />);
  });

  it('rendrer TopStripe med deafult props', () => {
    const wrapper = oppsettFullDOM();

    expect(wrapper.prop('className')).toEqual(undefined);
  });
});
