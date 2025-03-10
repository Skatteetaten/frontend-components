import React from 'react';
import { mount } from 'enzyme';
import { matches } from '../utils/test-utils';
import { TopBanner } from '.';

function oppsettFullDOM(props) {
  return mount(<TopBanner {...props} />);
}
describe('TopBanner komponent', () => {
  it('matcher snapshot ', () => {
    matches(<TopBanner />);
  });

  it('rendrer TopBanner med deafult props', () => {
    const wrapper = oppsettFullDOM();

    expect(wrapper.prop('title')).toEqual(undefined);
    expect(wrapper.prop('homeUrl')).toEqual(undefined);
    expect(wrapper.prop('homeText')).toEqual(undefined);
    expect(wrapper.prop('external')).toEqual(false);
    expect(wrapper.prop('compact')).toEqual(false);
  });

  it('rendrer TopBanner med riktige props', () => {
    const wrapper = oppsettFullDOM({
      className: 'topbanner-classname',
      id: 'toppbanner-id',
    });

    expect(wrapper.prop('className')).toEqual('topbanner-classname');
    expect(wrapper.prop('id')).toEqual('toppbanner-id');
  });

  it('rendrer TopBanner med visning for eksterne arbeidsflater ', () => {
    const wrapper = oppsettFullDOM({
      external: true,
      homeText: 'Til skatteetaten.no',
      title: 'Ekstern publikumsløsning',
    });

    expect(wrapper.find('h1').html()).toContain('Ekstern publikumsløsning');
    expect(wrapper.html()).toContain('contentWrapper');
    expect(wrapper.html()).toContain('headerMain');
    expect(wrapper.find('.ms-Icon').prop('data-icon-name')).toEqual(
      'ArrowBack'
    );
    expect(wrapper.find('ImageBase').prop('height')).toEqual(68);
  });

  it('rendrer TopBanner med engelsk logo og link ', () => {
    const wrapper = oppsettFullDOM({
      external: true,
      homeText: 'Til skatteetaten.no',
      title: 'Ekstern publikumsløsning',
      logoLink: true,
      language: 'en',
    });

    expect(wrapper.find('h1').html()).toContain('Ekstern publikumsløsning');
    expect(wrapper.html()).toContain('contentWrapper');
    expect(wrapper.html()).toContain('headerMain');
    expect(wrapper.find('.ms-Icon').prop('data-icon-name')).toEqual(
      'ArrowBack'
    );
    expect(wrapper.find('ImageBase').prop('height')).toEqual(68);
    expect(wrapper.find('a').prop('href')).toEqual(
      'https://www.skatteetaten.no'
    );
    expect(wrapper.find('img').prop('alt')).toEqual(
      'Front page The Norwegian Tax Administration'
    );
  });

  it('rendrer TopBanner med samisk alt-tekst i logo ', () => {
    const wrapper = oppsettFullDOM({
      external: true,
      homeText: 'Til skatteetaten.no',
      title: 'Ekstern publikumsløsning',
      logoLink: false,
      language: 'se',
    });

    expect(wrapper.find('h1').html()).toContain('Ekstern publikumsløsning');
    expect(wrapper.html()).toContain('contentWrapper');
    expect(wrapper.html()).toContain('headerMain');
    expect(wrapper.find('.ms-Icon').prop('data-icon-name')).toEqual(
      'ArrowBack'
    );
    expect(wrapper.find('ImageBase').prop('height')).toEqual(68);
    expect(wrapper.find('img').prop('alt')).toEqual('Vearroetáhta dovdomearka');
  });

  it('rendrer TopBanner med kompakt visning for eksterne arbeidsflater ', () => {
    const wrapper = oppsettFullDOM({
      external: true,
      compact: true,
    });

    expect(wrapper.find('ImageBase').prop('height')).toEqual(55);
    expect(wrapper.find('StyledIconBase')).toHaveLength(0);
  });

  it('rendrer TopBanner med kompakt visning for interne arbeidsflater ', () => {
    const wrapper = oppsettFullDOM({
      external: false,
      compact: true,
      title: 'Intern løsning',
      language: 'nb',
    });

    expect(wrapper.find('header'));
    expect(wrapper.find('h1').html()).toContain('Intern løsning');
    expect(wrapper.find('i').prop('data-icon-name')).toEqual('Home');
    expect(wrapper.html()).toContain('headerDiagonal');
    expect(wrapper.html()).toContain('headerRightContainer');
    expect(wrapper.find('img').prop('alt')).toEqual('Skatteetaten logo');
  });

  it('rendrer intern TopBanner med annet ikon', () => {
    const wrapper = oppsettFullDOM({
      external: false,
      icon: 'ArrowBack',
      title: 'Intern løsning',
      language: 'nb',
    });

    expect(wrapper.find('header'));
    expect(wrapper.find('h1').html()).toContain('Intern løsning');
    expect(wrapper.find('i').prop('data-icon-name')).toEqual('ArrowBack');
    expect(wrapper.html()).toContain('headerDiagonal');
    expect(wrapper.html()).toContain('headerRightContainer');
    expect(wrapper.find('img').prop('alt')).toEqual('Skatteetaten logo');
  });

  it('rendrer intern TopBanner uten tittel', () => {
    const wrapper = oppsettFullDOM({
      external: false,
      title: 'Intern løsning',
      language: 'nb',
    });

    expect(wrapper.find('header'));
    expect(wrapper.contains('h1')).toBe(false);
    expect(wrapper.find('i').prop('data-icon-name')).toEqual('Home');
    expect(wrapper.html()).toContain('headerDiagonal');
    expect(wrapper.html()).toContain('headerRightContainer');
    expect(wrapper.find('img').prop('alt')).toEqual('Skatteetaten logo');
  });
});
