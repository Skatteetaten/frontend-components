import React from 'react';
import { matches } from './../utils/test-utils';
import FileUploader from './FileUploader';

describe('FileUploader komponent', () => {
  it('matcher snapshot', () => {
    matches(<FileUploader />);
  });
});
