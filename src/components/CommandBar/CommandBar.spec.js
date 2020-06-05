import React from 'react';
import { shallow, mount } from 'enzyme';
import CommandBar from './CommandBar';

function oppsettFullDOM(props) {
  return mount(<CommandBar {...props} />);
}

it('rendrer CommandBar uten å kræsje', () => {
  shallow(<CommandBar />);
});

it('rendrer CommandBar med default props', () => {
  const wrapper = oppsettFullDOM();

  expect(wrapper.prop('items')).toEqual([]);
  expect(wrapper.prop('farItems')).toEqual([]);
  expect(wrapper.prop('ariaLabel')).toEqual(
    'Bruk høyre- og venstre-tastaturknapp for å navigere mellom kommandoene'
  );
});

it('setter CommandBar med riktige props', () => {
  const items = [
    {
      key: 'menuItem',
      name: 'Meny',
      iconProps: {
        iconName: 'Menu'
      },
      ariaLabel: 'Meny',
      subMenuProps: {
        items: [
          {
            key: 'home',
            name: 'Hjem',
            ariaLabel: 'Hjem',
            iconProps: {
              iconName: 'Home'
            }
          }
        ]
      }
    }
  ];
  const farItems = [
    {
      key: 'filtrer',
      name: 'Filter',
      ariaLabel: 'Filter',
      iconProps: {
        iconName: 'Filter'
      }
    },
    {
      key: 'info',
      name: 'Info',
      ariaLabel: 'Info',
      iconProps: {
        iconName: 'Info'
      },
      iconOnly: true
    }
  ];
  const wrapper = oppsettFullDOM({
    items: items,
    farItems: farItems
  });

  expect(wrapper.prop('items')).toEqual(items);
  expect(wrapper.prop('farItems')).toEqual(farItems);
});
