import React from 'react';
import toJson from 'enzyme-to-json';
import DetailsList from './DetailsList';
import { mount, shallow } from 'enzyme';

/**
 * skipViewportMeasures={true} must be set for DetailsList to render properly
 * during testing.
 */

const sortStringItems = ({ isDescending, fieldName, items }) => {
  if (isDescending) {
    return items.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
  } else {
    return items.sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
  }
};

const columns = [
  {
    key: 'column1',
    name: 'Name',
    fieldName: 'name',
    isSorted: true,
    isSortedDescending: false,
    sortItems: sortStringItems
  },
  {
    key: 'column2',
    name: 'Age',
    fieldName: 'age',
    isSorted: false,
    isSortedDescending: false,
    sortItems: sortStringItems
  }
];

describe('DetailsList komponent', () => {
  it('matcher snapshot', () => {
    const items = [{ name: 'Foo', age: 21 }];
    const wrapper = shallow(<DetailsList items={items} columns={columns} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render new items when props.items changes', () => {
    const items = [{ name: 'Foo', age: 21 }];
    const wrapper = mount(
      <DetailsList
        id="test"
        items={items}
        columns={columns}
        skipViewportMeasures={true}
      />
    );
    expect(wrapper.html()).toContain('Foo');
    expect(wrapper.html()).not.toContain('Bar');

    wrapper.setProps({ items: [...items, { name: 'Bar', age: 22 }] });

    expect(wrapper.html()).toContain('Foo');
    expect(wrapper.html()).toContain('Bar');
  });

  it('should sort items when clicked on column', () => {
    const items = [{ name: 'Foo', age: 21 }, { name: 'Bar', age: 22 }];

    const wrapper = mount(
      <DetailsList
        id="test"
        items={items}
        columns={columns}
        skipViewportMeasures={true}
      />
    );

    const onSortUpdateMock = jest.fn(({ items, columns }) => {
      wrapper.setProps({ items, columns });
    });

    wrapper.setProps({
      onSortUpdate: onSortUpdateMock
    });

    const columnHeader = wrapper.find(`[data-item-key="${columns[0].key}"]`);
    const columnButton = columnHeader.find(`span[role="button"]`);

    expect(columnHeader.length).toBe(1);
    expect(columnButton.length).toBe(1);

    columnButton.simulate('click');
    expect(wrapper.prop('items')[0].name).toBe('Foo');
    expect(columnHeader.html()).toContain('aria-sort="descending"');

    columnButton.simulate('click');
    expect(wrapper.prop('items')[0].name).toBe('Bar');
    expect(columnHeader.html()).toContain('aria-sort="ascending"');

    expect(onSortUpdateMock.mock.calls.length).toBe(2);
  });
});
