import React from 'react';
import { getIconNameForTheadCell, getAriaLabelForTheadCell } from './utils';

const columns = [
  {
    fieldName: 'month',
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
    sortable: true,
  },
  {
    name: 'Dekningsgrad',
    fieldName: 'coverage',
    alignment: 'right',
  },
  {
    name: 'Avkastning',
    fieldName: 'revenue',
    alignment: 'right',
  },
];

describe('TableHeader utils', () => {
  describe('getIconNameForTheadCell', () => {
    it('Når den kalles med isSorted false returneres det alltid ArrowUpDown uavhengig av isSortedAscending', () => {
      const a = getIconNameForTheadCell(false, false);
      expect(a).toEqual('ArrowUpDown');
      const b = getIconNameForTheadCell(false, true);
      expect(b).toEqual('ArrowUpDown');
    });

    it('Når den kalles med isSorted true og isSortedAscending false, returneres det ArrowUp ', () => {
      const a = getIconNameForTheadCell(true, false);
      expect(a).toEqual('ArrowUp');
    });

    it('Når den kalles med isSorted true og isSortedAscending true, returneres det ArrowDown ', () => {
      const a = getIconNameForTheadCell(true, true);
      expect(a).toEqual('ArrowDown');
    });
  });

  describe('getAriaLabelForTheadCell', () => {
    it('Når name er en JSX.Element, returneres det fieldName ', () => {
      const a = getAriaLabelForTheadCell(
        <p>{'test'}</p>,
        'name-of-my-field',
        false,
        false,
        jest.fn()
      );
      expect(a).toEqual('name-of-my-field');
    });

    it('Når name er en string og at isSorted er false, returneres det navnet konkatenert med riktig streng ', () => {
      const t = jest.fn().mockImplementation((s) => s);
      const a = getAriaLabelForTheadCell(
        'my-name',
        'name-of-my-field',
        false,
        false,
        t
      );
      expect(a).toEqual('my-name table.sortable');
    });

    it('Når name er en string og at isSorted er true og isSortedAscending false, returneres det navnet konkatenert med riktig streng ', () => {
      const t = jest.fn().mockImplementation((s) => s);
      const a = getAriaLabelForTheadCell(
        'my-name',
        'name-of-my-field',
        true,
        false,
        t
      );
      expect(a).toEqual('my-name table.sorted_descending');
    });

    it('Når name er en string og at isSorted er true og isSortedAscending true, returneres det navnet konkatenert med riktig streng ', () => {
      const t = jest.fn().mockImplementation((s) => s);
      const a = getAriaLabelForTheadCell(
        'my-name',
        'name-of-my-field',
        true,
        true,
        t
      );
      expect(a).toEqual('my-name table.sorted_ascending');
    });
  });
});
