import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './ErrorMessage';
import { matches } from '../utils/test-utils';

function oppsettShallow(props) {
  return shallow(<ErrorMessage {...props} />);
}

describe('ErrorMessage komponent', () => {
  it('matcher snapshot', () => {
    matches(<ErrorMessage> FeilMelding </ErrorMessage>);
  });

  it('Rendrer uten feil', () => {
    const wrapper = oppsettShallow({});
    expect(wrapper.exists()).toEqual(true);
  });

  it('Skjuler komponent hvis showError er false', () => {
    const wrapper = oppsettShallow({ showError: false });
    matches(wrapper);
    expect(wrapper.exists()).toEqual(true);
  });
});
