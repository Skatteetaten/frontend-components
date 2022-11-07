import { mount } from 'enzyme';
import { TopStripeMenuItems } from './TopStripeMenuItems';
import { TopStripeButton } from '../TopStripeButton';

describe('TopStripeMenu komponent', () => {
  it('skal vise menu som liste dersom elementene er TopStripeButton', () => {
    const wrapper = mount(
      <TopStripeMenuItems showOnMobile icon={'Person'} title={'Oda Olsen'}>
        <TopStripeButton>987654321 Eplepress AS</TopStripeButton>
        <TopStripeButton>987654322 Pærepress AS</TopStripeButton>
        <TopStripeButton>987654323 Druepress AS</TopStripeButton>
      </TopStripeMenuItems>
    );
    expect(wrapper.find('ul').exists()).toEqual(true);
  });
  it('skal vise menu som liste uten semantikk og korrekte role-attributter dersom contentIsMenu = true', () => {
    const wrapper = mount(
      <TopStripeMenuItems showOnMobile title={'Se liste'}>
        <div>Listepunkt 1</div>
        <div>Listepunkt 2</div>
        <div>Listepunkt 3</div>
      </TopStripeMenuItems>
    );

    const expectedElements = 3;
    expect(wrapper.find('ul[role="menu"]').exists()).toEqual(true);
    expect(wrapper.find('li[role="presentation"]').length).toBe(
      expectedElements
    );
    expect(wrapper.find('[role="menuitem"]').length).toBe(expectedElements);
  });
  it('skal ikke vise menu som liste og ingen role-attributter dersom contentIsMenu = false', () => {
    const wrapper = mount(
      <TopStripeMenuItems showOnMobile title={'Se liste'} contentIsMenu={false}>
        <div>Listepunkt 1</div>
        <div>Listepunkt 2</div>
        <div>Listepunkt 3</div>
      </TopStripeMenuItems>
    );
    expect(wrapper.find('ul').exists()).toEqual(false);
    expect(wrapper.find('[role="menu"]').exists()).toEqual(false);
    expect(wrapper.find('[role="presentation"]').exists()).toEqual(false);
    expect(wrapper.find('[role="menuitem"]').exists()).toEqual(false);
  });
});
