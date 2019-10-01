import React from 'react';
import { matches } from './../utils/test-utils';
import { shallow } from 'enzyme';
import Callout from './Callout';

function oppsettShallow(props) {
  return shallow(<Callout {...props} />);
}

describe('Callout komponent', () => {
  it('matcher snapshot', () => {
    matches(<Callout />);
  });

  it('rendrer Callout med default props', () => {
    const wrapper = oppsettShallow();
    const Callout = wrapper.find('Callout');
    const closeBtn = wrapper.find('IconButton');

    expect(Callout.prop('color')).toEqual('lightGreen');
    expect(Callout.prop('role')).toEqual('dialog');
    expect(Callout.prop('doNotLayer')).toEqual(true);
    expect(Callout.prop('directionalHint')).toEqual(1);
    expect(closeBtn.prop('aria-label')).toEqual('Lukk');
    expect(Callout.html()).toContain('closeButton');
  });

  it('setter Callout med riktige props', () => {
    const wrapper = oppsettShallow({
      gapSpace: 5,
      directionalHint: Callout.POS_BOTTOM_LEFT,
      color: Callout.INFO
    });
    const CalloutElm = wrapper.find('Callout');

    expect(CalloutElm.prop('color')).toEqual('beige');
    expect(CalloutElm.prop('gapSpace')).toEqual(5);
    expect(CalloutElm.prop('directionalHint')).toEqual(4);
  });

  it('skal lukke Callout når lukke knapp klikkes', () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(<Callout onClose={() => onCloseMock()} />);
    const closeBtn = wrapper.find('IconButton');

    expect(onCloseMock.mock.calls.length).toBe(0);
    closeBtn.simulate('click');
    expect(onCloseMock.mock.calls.length).toBe(1);
  });
});
