import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TableHeader } from '.';

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

describe('TableHeader komponent', () => {
  describe('Når columns består av en kolonne uten "name", en kolonne "sortable" og vanlig kolonner', () => {
    const setSortMock = jest.fn();
    const wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableHeader
              columns={columns}
              sort={{ ascending: true, columnFieldName: 'month' }}
              setSort={setSortMock}
            />
          </tr>
        </tbody>
      </table>
    );

    it('Så ser markupen riktig ut', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      // Det skal bare vises 3 th i og med at column uten 'name' vises ikke
      expect(wrapper.find('th').length).toEqual(3);
      // Det skal bare vises ett icon i og med at bare én column er sorterbar
      expect(wrapper.find('Icon').length).toEqual(1);
    });
    it('Så kalles setSort function riktig ved klikke på en sortable kolonne-header ', () => {
      wrapper.find('th').at(0).simulate('click');
      expect(setSortMock).toHaveBeenCalled();
    });
  });
});
