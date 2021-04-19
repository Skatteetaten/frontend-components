import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LinkGroup } from '../index';

function oppsettMount() {
  return mount(<LinkGroup links={[{ text: 'Dette er en link', path: '#' }]} />);
}

describe('Link komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettMount();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
