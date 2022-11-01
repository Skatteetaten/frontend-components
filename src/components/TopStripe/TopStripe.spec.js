import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
import { TopStripe, TopStripeUser, LanguagePicker, TopStripeMenu } from '.';

describe('TopStripe komponent', () => {
  it('matcher snapshot ', () => {
    matches(<TopStripe />);
  });

  it('rendrer med children og forventede classnames', () => {
    const wrapper = mount(
      <TopStripe>
        <LanguagePicker />
        <TopStripeUser />
      </TopStripe>
    );

    const languagePicker = wrapper.find('[data-testid="language-picker"]');
    expect(languagePicker.exists()).toEqual(true);
    const languagePickerLiElement = languagePicker.closest('li');
    expect(languagePickerLiElement.hasClass(/hideOnMobile/)).toEqual(true);

    const topStripeUser = wrapper.find('[data-testid="topstripe-user"]');
    expect(topStripeUser.exists()).toEqual(true);
    const topStripeUserLiElement = topStripeUser.closest('li');
    expect(topStripeUserLiElement.hasClass(/loggedInUser/)).toEqual(true);
    expect(topStripeUserLiElement.hasClass(/hideOnMobile/)).toEqual(true);
  });

  it.each([
    [true, 'vises'],
    [false, 'vises ikke'],
  ])(
    'hvis children har showOnMobile=(%p), (%p) elementet også på mobil',
    (showOnMobile) => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 200,
      });

      const wrapper = mount(
        <TopStripe>
          <TopStripeUser showOnMobile={showOnMobile} />
        </TopStripe>
      );

      const topStripeUser = wrapper.find('[data-testid="topstripe-user"]');
      expect(topStripeUser.exists()).toEqual(showOnMobile);
    }
  );

  it('har kun ett åpent meny-element om gangen', () => {
    const menu1Content = 'menu 1 content';
    const menu2Content = 'menu 2 content';
    const wrapper = mount(
      <TopStripe>
        <TopStripeMenu
          showOnMobile={true}
          contentIsMenu={false}
          title={'menu 1'}
        >
          <div>{menu1Content}</div>
        </TopStripeMenu>
        <TopStripeMenu
          showOnMobile={true}
          contentIsMenu={false}
          title={'menu 2'}
        >
          <div>{menu2Content}</div>
        </TopStripeMenu>
      </TopStripe>
    );

    expect(wrapper.contains('button'));
    const menu1 = wrapper.find('button').first();
    const menu2 = wrapper.find('button').last();

    menu1.simulate('click');
    expect(wrapper.find({ children: menu1Content }).exists()).toBeTruthy();
    expect(wrapper.find({ children: menu2Content }).exists()).toBeFalsy();
    menu2.simulate('click');
    expect(wrapper.find({ children: menu1Content }).exists()).toBeFalsy();
    expect(wrapper.find({ children: menu2Content }).exists()).toBeTruthy();
  });

  describe('LanguagePicker', () => {
    it('Hvis ikke showSami sendes med, vises forventede valg i menyen by default', () => {
      const wrapper = mount(
        <TopStripe>
          <LanguagePicker />
        </TopStripe>
      );
      const button = wrapper.find('button');
      button.simulate('click');
      expect(wrapper.text().includes('Bokmål')).toEqual(true);
      expect(wrapper.text().includes('Nynorsk')).toEqual(true);
      expect(wrapper.text().includes('English')).toEqual(true);
      expect(wrapper.text().includes('Sami')).toEqual(false);
    });

    it('Hvis showSami settes til true, vises forventede fire valg i menyen', () => {
      const wrapper = mount(
        <TopStripe>
          <LanguagePicker showSami />
        </TopStripe>
      );
      const button = wrapper.find('button');
      button.simulate('click');
      expect(wrapper.text().includes('Bokmål')).toEqual(true);
      expect(wrapper.text().includes('Nynorsk')).toEqual(true);
      expect(wrapper.text().includes('English')).toEqual(true);
      expect(wrapper.text().includes('Sámegiella')).toEqual(true);
    });
  });
});
