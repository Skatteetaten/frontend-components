import React from 'react';
import { mount } from 'enzyme';
import { OpenClose } from '.';

describe('openClose komponent', () => {
  const tekstIEkspanderbartFelt = 'Jeg har ett barn.';

  it('viser innhold når ekspanderbart felt klikkes', () => {
    const wrapper = mount(
      <OpenClose title="Tittel">{tekstIEkspanderbartFelt}</OpenClose>
    );

    const button = wrapper.find('button');
    expect(button.text()).toContain('Tittel');

    expect(wrapper.text()).not.toContain(tekstIEkspanderbartFelt);
    button.simulate('click');
    expect(wrapper.text()).toContain(tekstIEkspanderbartFelt);
  });

  it('kan være åpen fra start', () => {
    const wrapper = mount(
      <OpenClose isOpen={true} title="Tittel">
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    expect(wrapper.text()).toContain(tekstIEkspanderbartFelt);
  });

  it('Man kan overstyre h-tag for title', () => {
    const wrapper = mount(
      <OpenClose title="Tittel" headingLevel={3}>
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    const tittel = wrapper.find('button').find('h3');
    expect(tittel.text()).toContain('Tittel');
  });

  it('Kaller onClick når onClick sendes inn som prop og ekspander-knappen trykkes og open er undefined og isOnClickOnlyFiredOnOpen er undefined', () => {
    const onClickCallback = jest.fn();
    const wrapper = mount(
      <OpenClose title="Tittel" onClick={onClickCallback}>
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClickCallback).toHaveBeenCalledTimes(1);
  });

  it.each([
    [undefined, undefined],
    [undefined, false],
    [undefined, true],
    [false, undefined],
    [false, false],
    [false, true],
  ])(
    'Kaller onClick når onClick sendes inn som prop og ekspander-knappen trykkes og open er (%p) og isOnClickOnlyFiredOnOpen er (%p)',
    (openProp, isOnClickOnlyFiredOnOpenProp) => {
      const onClickCallback = jest.fn();
      const wrapper = mount(
        <OpenClose
          title="Tittel"
          onClick={onClickCallback}
          open={openProp}
          isOnClickOnlyFiredOnOpen={isOnClickOnlyFiredOnOpenProp}
        >
          {tekstIEkspanderbartFelt}
        </OpenClose>
      );
      const button = wrapper.find('button');
      button.simulate('click');
      expect(onClickCallback).toHaveBeenCalledTimes(1);
    }
  );

  it('Kaller by default ikke onClick når knappen trykkes når open er true', () => {
    const onClickCallback = jest.fn();
    const wrapper = mount(
      <OpenClose title="Tittel" onClick={onClickCallback} isOpen>
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClickCallback).not.toHaveBeenCalled();
  });

  it('Kaller ikke onClick når knappen trykkes når open er true og isOnClickOnlyFiredOnOpen er true', () => {
    const onClickCallback = jest.fn();
    const wrapper = mount(
      <OpenClose
        title="Tittel"
        onClick={onClickCallback}
        isOpen
        isOnClickOnlyFiredOnOpen={true}
      >
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClickCallback).not.toHaveBeenCalled();
  });

  it('Kaller onClick når knappen trykkes når open er true og isOnClickOnlyFiredOnOpen er false', () => {
    const onClickCallback = jest.fn();
    const wrapper = mount(
      <OpenClose
        title="Tittel"
        onClick={onClickCallback}
        isOpen
        isOnClickOnlyFiredOnOpen={false}
      >
        {tekstIEkspanderbartFelt}
      </OpenClose>
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClickCallback).toHaveBeenCalledTimes(1);
  });
});
