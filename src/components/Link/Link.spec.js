import React from 'react';
import Link from './Link';
import { matches } from '../utils/test-utils';

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
