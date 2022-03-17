import React from 'react';
import { getTheme, FontSizes, FontWeights, Nav } from '@fluentui/react';
import { mergeStyleSets } from '@fluentui/merge-styles';
import find from 'lodash.find';
import { useNavigate } from 'react-router';

function createMenu(items, searchTerm) {
  return items.map(({ name, slug, components = [], sections = [] }) => {
    const links = [
      ...createMenu(sections, null),
      ...createMenu(components, null),
    ];
    const collapseByDefault = searchTerm === '';
    const mainLink = find(links, (l) => l.name === name);
    return {
      name,
      url: undefined,
      key: (mainLink && mainLink.key) || slug,
      links: links.filter((l) => l.name !== name),
      collapseByDefault,
    };
  });
}

const getStyles = () => {
  const palette = getTheme().palette;
  return mergeStyleSets({
    root: {
      displayName: 'SkeNav',
    },
    group: {},
    groupContent: {
      marginBottom: 0,
    },
    navItems: {},
    navItem: {},
    link: {},
    linkText: {
      fontWeight: FontWeights.regular,
      fontSize: FontSizes.medium,
    },
    chevronButton: {},
    chevronIcon: {
      color: palette.skeColor.blue,
      fontSize: '20px',
      fontWeight: '700',
    },
    compositeLink: {},
  });
};

export class ComponentsListRenderer extends React.Component<> {
  render() {
    const { items, navigate, searchTerm } = this.props;
    const groups = createMenu(items, searchTerm);
    groups.forEach((group) => {
      if (group.name === 'Designe og utvikle') {
        group.links.sort((l1, l2) => l1.name.localeCompare(l2.name));
      }
    });
    if (groups.length === 0) return <>Ingen treff på søk</>;
    return (
      <Nav
        styles={getStyles}
        onLinkClick={(e, link) => navigate(link.key)}
        groups={groups}
      />
    );
  }
}

const ComponentsListRendererWrapped = (props) => {
  const navigate = useNavigate();
  return <ComponentsListRenderer navigate={navigate} {...props} />;
};

export default ComponentsListRendererWrapped;
