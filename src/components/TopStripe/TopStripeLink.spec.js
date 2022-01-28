import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
import { TopStripeLink } from '.';

function oppsettFullDOM(props) {
  return mount(<TopStripeLink {...props} />);
}
describe('TopStripeLink komponent', () => {
  it('matcher snapshot ', () => {
    matches(<TopStripeLink path={'/test'} text={'Testlink'} />);
  });

  it('rendrer med forventede elementer', () => {
    const wrapper = oppsettFullDOM({
      path: '/test',
      text: 'Testlink',
    });
    const link = wrapper.find('a');
    expect(link.exists()).toEqual(true);
    expect(link.text().includes('Testlink')).toEqual(true);
  });
});
