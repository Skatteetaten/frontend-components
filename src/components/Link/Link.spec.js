import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from './Link';

function oppsettMount() {
  return mount(
    <Link path={'#'} text={'Last ned dokumentene'} icon={'Download'} />
  );
}

describe('Link komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettMount();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
