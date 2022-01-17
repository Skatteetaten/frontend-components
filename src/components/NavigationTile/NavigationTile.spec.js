import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { NavigationTile } from '.';

const contents = [
  {
    id: 'my-id-1',
    to: '#',
    title: 'Skatt',
    description:
      'Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag som hjelper deg til få riktig skatt. ',
    icon: 'person',
  },
];

function oppsettShallow(props) {
  return shallow(<NavigationTile {...props} contents={contents} />);
}

function oppsettFullDOM(props) {
  return mount(<NavigationTile {...props} />);
}
describe('NavigationTile komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettShallow({
      contents: contents,
      renderContent: (to, content) => <a href={'something/' + to}>{content}</a>,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('rendrer NavigationTile med default props ', () => {
  //   const wrapper = oppsettShallow({});
  //   const instance = wrapper.instance();
  //
  //
  //   expect(instance.props.alignTitle).toEqual('center');
  //   expect(instance.props.alignDescription).toEqual('center');
  // });

  it('rendrer NavigationTile med riktig antall og innhold ', () => {
    const contents = [
      {
        to: '#',
        heading: 'Navigationtile tittel 1',
        icon: 'ArrowForward',
        description: 'Navigationtile beskrivelse 1',
      },
      {
        to: '#',
        heading: 'Navigationtile tittel 2',
        icon: 'person',
        description: 'Navigationtile beskrivelse 2',
      },
      {
        to: '#',
        heading: 'Navigationtile tittel 3',
        icon: 'ArrowForward',
        description: 'Navigationtile beskrivelse 3',
      },
    ];

    const wrapper = oppsettFullDOM({
      type: 'left',
      alignIcon: 'right',
      alignTitle: 'left',
      contents: contents,
    });

    const tile = wrapper.find('nav');
    const firstTile = tile.find('li').at(0);
    const secondTile = tile.find('li').at(1);

    expect(tile.find('li')).toHaveLength(3);
    expect(tile.find('ul')).toHaveLength(1);
    expect(firstTile.find('Icon').prop('iconName')).toEqual('ArrowForward');
    expect(secondTile.find('Icon').prop('iconName')).toEqual('person');
    expect(firstTile.find('h2').html()).toContain('Navigationtile tittel 1');
    expect(secondTile.find('h2').html()).toContain('Navigationtile tittel 2');
    expect(firstTile.find('p').html()).toContain(
      'Navigationtile beskrivelse 1'
    );
    expect(secondTile.find('p').html()).toContain(
      'Navigationtile beskrivelse 2'
    );
  });
});
