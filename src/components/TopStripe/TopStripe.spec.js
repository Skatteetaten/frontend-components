import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
import { TopStripe, TopStripeUser, LanguagePicker } from '.';

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
