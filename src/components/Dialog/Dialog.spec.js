import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Dialog } from '.';

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

  it('rendrer Dialog med riktige props', () => {
    const wrapper = oppsettFullDOM({
      layoutStyle: 'important',
      type: Dialog.Type.largeHeader,
      title: 'Tekst tittel',
      subText: 'Denne teksten vil vises i dialogen under tittelen',
      minWidth: '400px',
      maxWidth: '600px',
      hidden: false,
    });

    const htmlElm = wrapper.find('Dialog').first();
    expect(wrapper.prop('layoutStyle')).toEqual('important');
    expect(wrapper.prop('type')).toEqual(1);
    expect(wrapper.find('.ms-Dialog-title').html()).toContain('Tekst tittel');
    expect(wrapper.find('.ms-Dialog-subText').html()).toContain(
      'Denne teksten vil vises i dialogen under tittelen'
    );

    expect(htmlElm.prop('minWidth')).toEqual('400px');
    expect(htmlElm.prop('maxWidth')).toEqual('600px');
  });
  it('rendrer ventevarsel', () => {
    const wrapper = oppsettFullDOM({
      hidden: false,
      waitAlert: true,
      waitAlertBtnText: 'Ja',
      children: <p>Er du fortsatt aktiv?</p>,
    });
    expect(wrapper.find('p').text()).toEqual('Er du fortsatt aktiv?');
    expect(wrapper.find('button').text()).toEqual('Ja');
    expect(wrapper.find('img').prop('alt')).toEqual(
      'Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.'
    );
  });
});
