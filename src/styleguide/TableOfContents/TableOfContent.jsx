import React from 'react';
import ComponentsListRenderer from '../ComponentsList/ComponentsListRenderer';
import filterSectionsByName from 'react-styleguidist/lib/client/utils/filterSectionsByName';
import SearchField from '../../components/SearchField';

function SokeBoks({ searchTerm, setSearchTerm, children }) {
  return (
    <>
      <SearchField
        placeholder={'Vis meg...'}
        ariaLabel="Søkefelt"
        value={searchTerm}
        className="searchField"
        onChange={(e, value) => setSearchTerm(value || '')}
      />
      {children}
    </>
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
