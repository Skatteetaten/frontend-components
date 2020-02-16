import React from 'react';
import { matches } from './../utils/test-utils';
import SearchMenu from './SearchMenu';

describe('SearchMenu komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <SearchMenu>
        <ul>
          <li>skatt</li>
          <li>annen ting</li>
          <li>listeelement</li>
          <li>noe helt annet</li>
        </ul>
      </SearchMenu>
    );
  });
});
