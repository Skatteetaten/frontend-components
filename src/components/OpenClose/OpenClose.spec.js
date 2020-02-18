import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import OpenClose from './OpenClose';

describe('openClose komponent', () => {

  const tekstIEkspanderbartFelt = "Jeg har ett barn.";

  it('matcher snapshot', () => {
    const wrapper = mount(
      <OpenClose isOpen={true} title="Tittel" >
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('viser innhold når ekspanderbart felt klikkes', () => {
    const wrapper = mount(
      <OpenClose title="Tittel" >
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );

    const button = wrapper.find('button');
    expect(button.text()).toContain('Tittel');

    expect(wrapper.text()).not.toContain(tekstIEkspanderbartFelt);
    button.simulate('click');
    expect(wrapper.text()).toContain(tekstIEkspanderbartFelt);
  });

  it('kan være åpen fra start', () => {
    const wrapper = mount(
      <OpenClose isOpen={true} title="Tittel" >
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    expect(wrapper.text()).toContain(tekstIEkspanderbartFelt);
  });

  it('Man kan overstyre h-tag for title', () => {
    const wrapper = mount(
      <OpenClose title="Tittel" headingLevel={3} >
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    const tittel = wrapper.find('button').find('h3');
    expect(tittel.text()).toContain("Tittel");
  });
});
