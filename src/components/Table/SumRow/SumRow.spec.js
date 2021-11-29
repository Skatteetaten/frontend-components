import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SumRow } from '.';

describe('SumRow komponent', () => {
  describe('Når SumRow består av 0 kolonner', () => {
    const wrapper = mount(
      <SumRow
        numberOfColumns={0}
        sum={{ text: 'sumtext', colspan: 2, total: 153 }}
      />
    );

    it('Så ser markupen riktig ut', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 1 for sumteksten og 1 td for selve summen
      expect(wrapper.find('th').length).toEqual(1);
      expect(wrapper.find('td').length).toEqual(1);
    });
  });

  describe('Når SumRow består av f.eks 5 kolonner', () => {
    const wrapper = mount(
      <SumRow
        numberOfColumns={5}
        sum={{ text: 'sumtext', colspan: 2, total: 153 }}
      />
    );

    it('Så ser markupen riktig ut', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 1 for sumteksten og 3 td for å fylle ut bredden
      expect(wrapper.find('th').length).toEqual(1);
      expect(wrapper.find('td').length).toEqual(3);
    });
  });

  describe('Når SumRow har en editableRows i tillegg', () => {
    const wrapper = mount(
      <SumRow
        numberOfColumns={0}
        editableRows
        sum={{ text: 'sumtext', colspan: 2, total: 153 }}
      />
    );
    it('Så ser markupen riktig ut', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 1 for sumteksten og 2 td: én for selve summen og én for editableRows
      expect(wrapper.find('th').length).toEqual(1);
      expect(wrapper.find('td').length).toEqual(2);
    });
  });

  describe('Når SumRow har en expandableRows i tillegg', () => {
    it('Så ser markupen riktig ut uten expandableRows', () => {
      const wrapper = mount(
        <SumRow
          numberOfColumns={0}
          expandableRows
          sum={{ text: 'sumtext', colspan: 2, total: 153 }}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 1 for sumteksten og 1 td for summen
      expect(wrapper.find('th').length).toEqual(1);
      expect(wrapper.find('td').length).toEqual(1);
    });

    it('Så ser markupen riktig ut med expandIconPlacement === before', () => {
      const wrapper = mount(
        <SumRow
          numberOfColumns={0}
          expandableRows
          expandIconPlacement={'before'}
          sum={{ text: 'sumtext', colspan: 2, total: 153 }}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 1 for sumteksten og 1 td for summen
      expect(wrapper.find('th').length).toEqual(1);
      expect(wrapper.find('td').length).toEqual(1);
    });

    it('Så ser markupen riktig ut med expandIconPlacement === after', () => {
      const wrapper = mount(
        <SumRow
          numberOfColumns={0}
          expandableRows
          expandIconPlacement={'after'}
          sum={{ text: 'sumtext', colspan: 2, total: 153 }}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 1 for sumteksten og 2 td: én for summen og én for expandableRows
      expect(wrapper.find('th').length).toEqual(1);
      expect(wrapper.find('td').length).toEqual(2);
    });
  });
});
