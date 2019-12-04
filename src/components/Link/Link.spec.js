import React from 'react';
import { mount } from 'enzyme';
import Link from './Link';
import { matches } from './../utils/test-utils';

function oppsettMount(props) {
  return mount(<Link {...props} />);
}

describe('Link komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <Link
        path={'#'}
        text={'Last ned dokumentene'}
        icon={'Download'}
        placement={'after'}
      />
    );
  });
});
