import React from 'react';
import { shallow, mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import SearchField from './SearchField';

function oppsettShallow(props) {
  return shallow(<SearchField {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<SearchField {...props} />);
}

describe('SearchField komponent', () => {
  it('matcher snapshot', () => {
    matches(<SearchField />);
  });

  it('rendrer SearchField med default props ', () => {
    const wrapper = oppsettShallow({});
    expect(wrapper.find('StyledSearchBoxBase').prop('searchFieldSize')).toEqual(
      'standard'
    );
  });

  it('rendrer SearchField med riktige props ', () => {
    const wrapper = oppsettFullDOM({
      value: 'searchfield-value',
      ariaLabel: 'searchfield-label',
      placeholder: 'searchfield-placeholder',
      className: 'searchfield-classname',
      id: 'searchfield-id',
      searchFieldSize: 'large'
    });

    const searchField = wrapper.find('input.ms-SearchBox-field');
    const StyledSearchBoxBase = wrapper.find('StyledSearchBoxBase');
    expect(wrapper.first().prop('id')).toEqual('searchfield-id');
    expect(StyledSearchBoxBase.prop('className')).toContain(
      'searchfield-classname'
    );
    expect(StyledSearchBoxBase.prop('ariaLabel')).toEqual('searchfield-label');
    expect(StyledSearchBoxBase.prop('searchFieldSize')).toEqual('large');
    expect(searchField.prop('placeholder')).toEqual('searchfield-placeholder');
    expect(searchField.prop('value')).toEqual('searchfield-value');
  });
});
