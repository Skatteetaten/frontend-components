import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
import { TopStripeUser } from '.';

function oppsettFullDOM(props) {
  return mount(<TopStripeUser {...props} />);
}
describe('TopStripeUser komponent', () => {
  it('matcher snapshot ', () => {
    matches(<TopStripeUser name={'Ola Nordmann'} />);
  });

  it('rendrer med forventede elementer', () => {
    const wrapper = oppsettFullDOM({
      name: 'Ola Nordmann',
    });
    const name = wrapper.find('[data-testid="topstripe-user"]');
    expect(name.text().includes('Ola Nordmann')).toEqual(true);
    expect(wrapper.find('i').exists()).toEqual(true);
  });
});
