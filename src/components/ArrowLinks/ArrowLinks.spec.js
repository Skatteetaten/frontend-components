import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ArrowLinks from './ArrowLinks';

function oppsettMount() {
  return mount(
    <ArrowLinks links={[{ text: 'Dette er en link', path: '#' }]} />
  );
}

describe('Link komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettMount();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
