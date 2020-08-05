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
  let options;
  beforeEach(() => {
    options = [
      { key: 1, text: 'en tekst' },
      { key: 2, text: 'bil' },
      { key: 3, text: 'Hypofyseregulator' },
      { key: 4, text: 'katt' }
    ];
  });
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

  it('rendrer SearchField med dropdown dersom options eksisterer ', () => {
    const wrapper = oppsettFullDOM({
      ariaLabel: 'searchfield-label',
      placeholder: 'searchfield-placeholder',
      className: 'searchfield-classname',
      id: 'searchfield-id',
      searchFieldSize: 'standard',
      options
    });
    const searchField = wrapper.find('input.ms-SearchBox-field');
    searchField.simulate('change', { target: { name: 'change', value: 'e' } });
    expect(wrapper.find('input.ms-SearchBox-field').prop('value')).toEqual('e');
    expect(wrapper.find('ul').exists()).toEqual(true);
    expect(wrapper.find('li').length).toEqual(2);
    expect(
      wrapper
        .find('li')
        .last()
        .text()
    ).toEqual('Hypofyseregulator');
  });
  it('skal legge til valgt element i inputfelt, når det blir trykket på', () => {
    const wrapper = oppsettFullDOM({
      ariaLabel: 'searchfield-label',
      placeholder: 'searchfield-placeholder',
      className: 'searchfield-classname',
      id: 'searchfield-id',
      searchFieldSize: 'standard',
      options
    });
    const searchField = wrapper.find('input.ms-SearchBox-field');
    searchField.simulate('change', { target: { name: 'change', value: 'e' } });
    expect(wrapper.find('li').length).toEqual(2);
    wrapper
      .find('li')
      .first()
      .simulate('click');
    expect(wrapper.find('input.ms-SearchBox-field').prop('value')).toEqual(
      'en tekst'
    );
  });
  it('skal begrense antall viste søkeresultat til "limit"', () => {
    const wrapper = oppsettFullDOM({
      ariaLabel: 'searchfield-label',
      placeholder: 'searchfield-placeholder',
      className: 'searchfield-classname',
      id: 'searchfield-id',
      searchFieldSize: 'standard',
      limit: 1,
      options
    });
    const searchField = wrapper.find('input.ms-SearchBox-field');
    searchField.simulate('change', { target: { name: 'change', value: 'e' } });
    expect(wrapper.find('li').length).toEqual(1);
  });
});
