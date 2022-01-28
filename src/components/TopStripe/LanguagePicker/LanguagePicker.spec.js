import React from 'react';
import { mount } from 'enzyme';
import { LanguagePicker } from '.';
import { TopStripeContext } from '../TopStripe';

function oppsettFullDOM(props) {
  return mount(
    <TopStripeContext.Provider
      value={{
        open: 0,
        setOpen: jest.fn(),
      }}
    >
      <LanguagePicker {...props} />
    </TopStripeContext.Provider>
  );
}

describe('LanguagePicker komponent', () => {
  const setOpenMock = jest.fn();

  it('matcher snapshot', () => {
    const wrapper = oppsettFullDOM({
      selectedLanguage: 'nb',
      setLanguage: jest.fn(),
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Når knappen trykkes på, kalles setOpen', () => {
    const wrapper = mount(
      <TopStripeContext.Provider
        value={{
          open: 0,
          setOpen: setOpenMock,
        }}
      >
        <LanguagePicker />
      </TopStripeContext.Provider>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    wrapper.update();
    expect(setOpenMock).toHaveBeenCalled();
  });

  it.each([
    ['Bokmål', 'nb'],
    ['Nynorsk', 'nn'],
    ['English', 'en'],
    ['Sámegiella', 'se'],
  ])(
    'rendrer med tekst (%p) dersom selectedLanguage er satt til (%p)',
    (selectedLanguageText, selectedLanguage) => {
      const wrapper = oppsettFullDOM({
        selectedLanguage: selectedLanguage,
        setLanguage: jest.fn(),
      });
      const menuButton = wrapper.find('button');
      expect(menuButton.text().includes(selectedLanguageText)).toEqual(true);
    }
  );
});
