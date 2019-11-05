import React from 'react';
import { withRouter } from 'react-router';
import { Nav } from 'office-ui-fabric-react/lib-commonjs/Nav';
import { getTheme, FontSizes, FontWeights } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
import find from 'lodash.find';

function createMenu(items, searchTerm) {
  return items.map(({ name, slug, components = [], sections = [] }) => {
    const links = [
      ...createMenu(sections, null),
      ...createMenu(components, null)
    ];
    const collapseByDefault = searchTerm === '';
    const mainLink = find(links, l => l.name === name);
    return {
      name,
      url: undefined,
      key: (mainLink && mainLink.key) || slug,
      links: links.filter(l => l.name !== name),
      collapseByDefault
    };
  });
}

const getStyles = () => {
  const palette = getTheme().palette;
  return mergeStyleSets({
    root: {
      displayName: 'SkeNav'
    },
    group: {},
    groupContent: {
      marginBottom: 0
    },
    navItems: {},
    navItem: {},
    link: {},
    linkText: {
      fontWeight: FontWeights.regular,
      fontSize: FontSizes.medium
    },
    chevronButton: {},
    chevronIcon: {
      color: palette.skeColor.blue,
      fontSize: '20px',
      fontWeight: '700'
    },
    compositeLink: {}
  });
};

export class ComponentsListRenderer extends React.Component<> {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;

    this.state = {
      selectedKey: params.slug
    };
  }
  componentDidUpdate(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({
        selectedKey: nextProps.match.params.slug || null
      });
    }
  }

  render() {
    const { items, history, searchTerm } = this.props;
    const groups = createMenu(items, searchTerm);
    groups.forEach(group => {
      if (group.name === 'Designe og utvikle') {
        group.links.sort((l1, l2) => l1.name.localeCompare(l2.name));
      }
    });
    if (groups.length === 0) return <>Ingen treff på søk</>;
    return (
      <Nav
        styles={getStyles}
        onLinkClick={(e, link) => history.push(link.key)}
        groups={groups}
        selectedKey={this.state.selectedKey}
      />
    );
  }
}
export default withRouter(ComponentsListRenderer);
