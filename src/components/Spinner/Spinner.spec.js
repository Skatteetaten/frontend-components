import React from 'react';
import { shallow } from 'enzyme';
import { matches } from './../utils/test-utils';
import Spinner from './Spinner';

function oppsettShallow(props) {
  return shallow(<Spinner {...props} />);
}

describe('Spinner komponent', () => {
  it('matcher snapshot', () => {
    matches(<Spinner />);
  });

  it('rendrer Spinner med default props ', () => {
    const wrapper = oppsettShallow({});

    expect(wrapper.find('StyledSpinnerBase').prop('size')).toEqual(2);
    expect(wrapper.find('StyledSpinnerBase').prop('spinnerColor')).toEqual(
      'black'
    );
  });

  it('rendrer Spinner med riktige props ', () => {
    const wrapper = oppsettShallow({
      className: 'spinner-classname',
      id: 'spinner-id',
      spinnerColor: 'white',
      size: Spinner.Size.large
    });

    const StyledSpinnerBase = wrapper.find('StyledSpinnerBase');
    expect(wrapper.prop('id')).toEqual('spinner-id');
    expect(StyledSpinnerBase.prop('size')).toEqual(3);
    expect(StyledSpinnerBase.prop('className')).toContain('spinner-classname');
    expect(StyledSpinnerBase.prop('spinnerColor')).toContain('white');
  });
});
