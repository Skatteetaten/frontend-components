import React from 'react';
import { matches } from '../utils/test-utils';
import { ButtonLink } from '../index';

describe('ButtonLink-komponent', () => {
  it('matcher snapshot', () => {
    matches(<ButtonLink path="#" text="Knappetekst" />);
  });
});
