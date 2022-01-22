import React from 'react';
import { mount, shallow } from 'enzyme';
import { matches } from '../../utils/test-utils';
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

function oppsettShallow(props) {
  return shallow(<LanguagePicker {...props} />);
}

describe('LanguagePicker komponent', () => {
  it('matcher snapshot ', () => {
    matches(<LanguagePicker />);
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
        setSelectedLanguage: jest.fn(),
      });
      const menuButton = wrapper.find('button');
      expect(menuButton.text().includes(selectedLanguageText)).toEqual(true);
    }
  );
});
