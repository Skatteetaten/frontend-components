import React from 'react';
import { mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import TopStripe from './TopStripe';

const meny = [
  {
    key: 'kontakt',
    label: 'Kontakt oss',
    href: 'https://skatteetaten.no/kontakt/',
    notSmallDevice: true
  },
  {
    key: 'spraak',
    label: 'Language / Språk',
    items: [
      {
        key: 'no',
        label: 'Bokmål',
        onClick: () => {
          jest.fn('Bokmål');
        },
        selected: true
      },
      {
        key: 'en',
        label: 'English',
        onClick: () => {
          jest.fn('English');
        }
      },
      {
        key: 'nn',
        label: 'Nynorsk',
        onClick: () => {
          jest.fn('Nynorsk');
        },
        selected: false
      }
    ]
  },
  {
    key: 'skrift',
    label: 'Endre skriftstørrelse',
    info:
      'Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre eller - for å forminske.',
    notSmallDevice: true
  },
  {
    key: 'bruker',
    label: 'Bruker',
    noLabelText: true,
    icon: 'Person',
    items: [
      {
        key: 'profil',
        label: 'Min profil',
        href: 'https://skatteetaten.no/'
      },
      {
        key: 'favoritter',
        label: 'Favoritter',
        icon: 'Favorite',
        onClick: () => {
          jest.fn('Favoritter');
        }
      }
    ]
  }
];

function oppsettFullDOM(props) {
  return mount(<TopStripe {...props} />);
}

describe('TopStripe komponent', () => {
  it('matcher snapshot', () => {
    matches(<TopStripe items={meny} />);
  });

  it('rendrer TopStripe med riktig props', () => {
    const wrapper = oppsettFullDOM({ items: meny });

    const overlayDiv = wrapper.find('div > div').first();
    const navDiv = wrapper
      .find('div > div')
      .at(1)
      .childAt(0);

    expect(overlayDiv.prop('id')).toEqual('topStripeOverlay');
    expect(overlayDiv.prop('className')).toContain('overlay');

    expect(navDiv.prop('id')).toEqual('topStripeNav');
    expect(navDiv.prop('className')).toContain('nav');

    const navUl = navDiv.childAt(0);

    expect(navUl.prop('className')).toContain('navMenu');
  });

  it('rendrer TopStripe med riktig antall menyvalg', () => {
    const wrapper = oppsettFullDOM({ items: meny });

    const navUl = wrapper
      .find('div > div')
      .at(1)
      .childAt(0)
      .childAt(0);

    expect(navUl.children().length).toEqual(4);
  });
});
