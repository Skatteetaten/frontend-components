import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import { Card, CardColor } from '.';

function oppsettShallow(props) {
  return shallow(<Card {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<Card {...props} />);
}

describe('Card komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettFullDOM();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer Card med default props', () => {
    const wrapper = oppsettFullDOM();

    expect(wrapper.prop('titlesize')).toEqual('x-large');
    expect(wrapper.prop('color')).toEqual('brown10');
    expect(wrapper.prop('marginbottom')).toEqual('2px');
    expect(wrapper.prop('expand')).toEqual(false);
    expect(wrapper.prop('isExpanded')).toEqual(true);
    expect(wrapper.prop('title')).toEqual(undefined);
  });

  it('setter Card med riktige props', () => {
    const wrapper = oppsettFullDOM({
      color: CardColor.BEIGE,
      title: 'Ikke fullført arbeidsoppgave',
      titlesize: 'large',
      marginbottom: '10px',
      expand: true,
      isExpanded: false,
      id: 'card-id',
      className: 'card-classname',
    });

    expect(wrapper.prop('titlesize')).toEqual('large');
    expect(wrapper.prop('color')).toEqual('brown10');
    expect(wrapper.prop('marginbottom')).toEqual('10px');
    expect(wrapper.prop('title')).toEqual('Ikke fullført arbeidsoppgave');
    expect(wrapper.prop('isExpanded')).toEqual(false);
    expect(wrapper.prop('expand')).toEqual(true);
    expect(wrapper.prop('id')).toEqual('card-id');
    expect(wrapper.prop('className')).toEqual('card-classname');
  });

  it('endrer state når utvid knapp klikkes', () => {
    const wrapper = oppsettShallow({
      expand: true,
      isExpanded: true,
    });
    const expandBtn = wrapper.find('button');

    expect(wrapper.html()).toContain('titleExpand');
    expect(wrapper.html()).toContain('expandIcon');
    expect(wrapper.state('isExpandedState')).toEqual(true);
    expandBtn.simulate('click');
    expect(wrapper.state('isExpandedState')).toEqual(false);
  });

  it('kan definere tagName på title', () => {
    const wrapper = oppsettFullDOM({
      title: 'tittel',
      titleTagName: 'h2',
    });

    expect(wrapper.html()).toContain('tittel</h2>');
  });

  it('rendrer ikke attributter definert i CardProps', () => {
    const wrapper = oppsettFullDOM({
      color: Card.Color.BEIGE,
    });

    const findColor = wrapper.find('div[color="' + Card.Color.BEIGE + '"]');
    expect(findColor.exists()).toBeFalsy();
  });

  it('rendrer attributtet data-testid', () => {
    const wrapper = oppsettFullDOM({
      color: Card.Color.BEIGE,
      title: 'Ikke fullført arbeidsoppgave',
      titlesize: 'large',
      marginbottom: '10px',
      expand: true,
      isExpanded: false,
      id: 'card-id',
      className: 'card-classname',
      'data-testid': 'Card-Component',
    });

    const findTestid = wrapper.find('div[data-testid="Card-Component"]');
    expect(findTestid.exists()).toBeTruthy();
  });
});
