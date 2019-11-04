import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dialog from './Dialog';

function oppsettShallow(props) {
  return shallow(<Dialog {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<Dialog {...props} />);
}

describe('Dialog komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = shallow(<Dialog />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer Dialog med hjelpetekst', () => {
    const wrapper = oppsettShallow({
      helpText: 'Hjelpetekst'
    });

    const button = wrapper.find('IconButton');
    expect(button.prop('icon')).toEqual('HelpOutline');
    expect(button.prop('title')).toEqual('Hjelp');

    button.simulate('click');
    const callout = wrapper.find('Callout');
    expect(wrapper.exists('Callout')).toEqual(true);
    expect(callout.html()).toContain('Hjelpetekst');
    expect(callout.prop('color')).toEqual('lightGreen');
    expect(callout.prop('ariaLabel')).toEqual('Hjelpetekst');
    callout.simulate('close');
    expect(wrapper.exists('Callout')).toEqual(false);
  });

  it('rendrer Dialog med riktige props', () => {
    const wrapper = oppsettFullDOM({
      layoutStyle: 'important',
      type: Dialog.Type.largeHeader,
      title: 'Tekst tittel',
      subText: 'Denne teksten vil vises i dialogen under tittelen',
      minWidth: '400px',
      maxWidth: '600px',
      hidden: false
    });

    const htmlElm = wrapper.find('StyledWithResponsiveMode').first();
    expect(wrapper.prop('layoutStyle')).toEqual('important');
    expect(wrapper.prop('type')).toEqual(1);
    expect(wrapper.find('.ms-Dialog-title').html()).toContain('Tekst tittel');
    expect(wrapper.find('.ms-Dialog-subText').html()).toContain(
      'Denne teksten vil vises i dialogen under tittelen'
    );

    expect(htmlElm.prop('minWidth')).toEqual('400px');
    expect(htmlElm.prop('maxWidth')).toEqual('600px');
  });
});
