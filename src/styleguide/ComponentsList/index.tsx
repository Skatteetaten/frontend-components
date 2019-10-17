import React from 'react';
import { match, withRouter } from 'react-router';
import { Nav } from 'office-ui-fabric-react/lib-commonjs/Nav';
import { getTheme, FontSizes, FontWeights } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
// @ts-ignore TODO
import find from 'lodash.find';
import { PaletteProps } from '../../components';
// @ts-ignore TODO
function createMenu(items, searchTerm) {
  // @ts-ignore TODO
  return items.map(({ name, slug, components = [], sections = [] }) => {
    const links = [
      ...createMenu(sections, null),
      ...createMenu(components, null)
    ];
    const collapseByDefault = searchTerm
      ? find(items, (e: { key: any }) => e.key === searchTerm)
      : true;
    // @ts-ignore TODO
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
  const palette = getTheme().palette as PaletteProps;
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

interface ComponentsListRendererProps {
  items: object[];
  history: object;
  searchTerm: string;
  match: match;
}

interface ComponentsListRendererState {
  selectedKey: any;
}
export class ComponentsListRenderer extends React.Component<
  ComponentsListRendererProps,
  ComponentsListRendererState
> {
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;

    this.state = {
      // @ts-ignore TODO
      selectedKey: params.slug
    };
  }
  // @ts-ignore TODO
  componentDidUpdate(nextProps) {
    // @ts-ignore TODO
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({
        selectedKey: nextProps.match.params.slug || null
      });
    }
  }

  render() {
    const { items, history, searchTerm } = this.props;
    const groups = createMenu(items, searchTerm);
    // @ts-ignore TODO
    groups.forEach(group => {
      if (group.name === 'Designe og utvikle') {
        // @ts-ignore TODO
        group.links.sort((l1, l2) => l1.name.localeCompare(l2.name));
      }
    });
    if (groups.length === 0) return <>Ingen treff på søk</>;
    return (
      <Nav
        styles={getStyles}
        // @ts-ignore TODO
        onLinkClick={(e, link) => history.push(link.key)}
        groups={groups}
        selectedKey={this.state.selectedKey}
      />
    );
  }
}
// @ts-ignore TODO
export default withRouter(ComponentsListRenderer);
