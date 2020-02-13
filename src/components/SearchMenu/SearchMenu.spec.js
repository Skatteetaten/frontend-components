import React from 'react';
import { matches } from './../utils/test-utils';
import SearchMenu from './SearchMenu';

describe('SearchMenu komponent', () => {
  it('matcher snapshot', () => {
    matches(<SearchMenu />);
  });
});
