import React from 'react';
import ComponentsListRenderer from '../ComponentsList/ComponentsListRenderer';
import SearchField from '../../components/SearchField';
import getFilterRegExp from 'react-styleguidist/lib/client/utils/getFilterRegExp';
import { UseScreen } from '../../components/utils/ScreenPlugin';

function SokeBoks({ searchTerm, setSearchTerm, children }) {
  const size = UseScreen();
  return (
    <>
      {size.gt.lg && (
        <SearchField
          placeholder={'Vis meg...'}
          ariaLabel="Søkefelt"
          value={searchTerm}
          className="searchField"
          onChange={(e, value) => setSearchTerm(value || '')}
        />
      )}
      {children}
    </>
  );
}

function filterComponentsByName(components, query) {
  let regExp = getFilterRegExp(query);
  return components.filter(function(_ref) {
    let name = _ref.name;
    let visibleName = _ref.visibleName;
    return regExp.test(name) || regExp.test(visibleName);
  });
}

function filterSectionsByName(sections, query) {
  const regExp = getFilterRegExp(query);
  return sections
    .map(section => ({
      ...section,
      sections: section.sections
        ? filterSectionsByName(section.sections, query)
        : [],
      components: section.components
        ? filterComponentsByName(section.components, query)
        : []
    }))
    .filter(
      section =>
        section.components.length > 0 ||
        section.sections.length > 0 ||
        regExp.test(section.name) ||
        regExp.test(section.visibleName)
    );
}

export class TableOfContent extends React.Component<> {
  state = {
    searchTerm: ''
  };
  renderLevel(sections) {
    const _this2 = this;
    const items = sections.map(function(section) {
      const children = [].concat(
        section.sections || [],
        section.components || []
      );
      return Object.assign({}, section, {
        heading: !!section.name && children.length > 0,
        content: children.length > 0 && _this2.renderLevel(children)
      });
    });
    return (
      <ComponentsListRenderer
        items={items}
        searchTerm={this.state.searchTerm}
      />
    );
  }

  renderSections() {
    const { searchTerm } = this.state;
    const { sections } = this.props;
    // If there is only one section, we treat it as a root section
    // In this case the name of the section won't be rendered and it won't get left padding
    const firstLevel =
      sections.length === 1 ? sections[0].components : sections;
    const filtered = filterSectionsByName(firstLevel, searchTerm);
    return this.renderLevel(filtered);
  }

  render() {
    const { searchTerm } = this.state;
    const setSearchTerm = searchTerm => this.setState({ searchTerm });
    return (
      <SokeBoks searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
        {this.renderSections()}
      </SokeBoks>
    );
  }
}

export default TableOfContent;
