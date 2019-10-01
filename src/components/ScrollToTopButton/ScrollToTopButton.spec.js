import React from 'react';
import { mount } from 'enzyme';
import ScrollToTopButton from './ScrollToTopButton';
import { matches } from '../utils/test-utils';

function oppsettFullDOM(props) {
  return mount(<ScrollToTopButton {...props} />);
}

describe('ScrollToTopButton komponent', () => {
  it('matcher snapshot', () => {
    matches(<ScrollToTopButton />);
  });

  it('skal vise icon', () => {
    const wrapper = oppsettFullDOM();

    const icon = wrapper.find('i');

    expect(icon.prop('data-icon-name')).toEqual('MoveUp');
  });

  it('kan sette label', () => {
    const wrapper = oppsettFullDOM({
      label: 'Tulletittel'
    });

    const label = wrapper.find('button > span');

    expect(label.html()).toContain('>Tulletittel</div>');
  });
});
