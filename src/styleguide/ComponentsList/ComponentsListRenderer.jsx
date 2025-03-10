import React from 'react';
import { getTheme, FontSizes, FontWeights, Nav } from '@fluentui/react';
import { mergeStyleSets } from '@fluentui/merge-styles';
import find from 'lodash.find';
import { useNavigate, useLocation } from 'react-router-dom';

function createMenu(items, searchTerm, activeSlug) {
  return items.map(
    ({ name, slug, components = [], sections = [], props = [] }) => {
      const links = [
        ...createMenu(sections, null, null),
        ...createMenu(components, null, null),
      ];

      let isDeprecated = !!props?.tags?.deprecated;
      if (
        name === 'ModalContext' ||
        name === 'ModalProvider' ||
        name === 'DetailsList'
      ) {
        isDeprecated = true;
      }
      const containsActiveSlug = find(links, (l) => l.key === activeSlug);
      const collapseByDefault = searchTerm === '' && !containsActiveSlug;
      const mainLink = find(links, (l) => l.name === name);
      return {
        name: isDeprecated ? `${name} (deprecated)` : name,
        url: undefined,
        key: (mainLink && mainLink.key) || slug,
        links: links.filter((l) => l.name !== name),
        collapseByDefault,
        title: null,
        ariaCurrent: 'true',
      };
    }
  );
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

const getClassNames = () => {
  return mergeStyleSets({
    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    },
  });
};

export const ComponentsListRenderer = ({ items, searchTerm }) => {
  const styles = getClassNames();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeSlug = pathname.replace('/', '');
  const groups = createMenu(items, searchTerm, activeSlug);
  groups.forEach((group) => {
    if (group.name === 'Designe og utvikle') {
      group.links.sort((l1, l2) => l1.name.localeCompare(l2.name));
    }
  });
  if (groups.length === 0) return <div role="alert">Ingen treff på søk</div>;
  return (
    <>
      <div role="alert" className={styles.srOnly}>
        {searchTerm && `Antall treff ${groups.length}`}
      </div>
      <Nav
        styles={getStyles}
        onLinkClick={(e, link) => navigate(link.key)}
        groups={groups}
        selectedKey={activeSlug}
      />
    </>
  );
};
