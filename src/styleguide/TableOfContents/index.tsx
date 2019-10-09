import React from 'react';
import ComponentsList from '../ComponentsList';
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
        onChange={(e, value) => setSearchTerm(value)}
      />
      {children}
    </>
  );
}
interface TableOfContentsProps {
  sections: [];
}
export class TableOfContents extends React.Component<TableOfContentsProps, {}> {
  state = {
    searchTerm: ''
  };

  renderLevel(
    sections,
    useRouterLinks = false,
    hashPath = [],
    useHashId = false
  ) {
    const items = sections.map(section => {
      const children = [
        ...(section.sections || []),
        ...(section.components || [])
      ];
      const sectionDepth = section.sectionDepth || 0;
      const childHashPath =
        sectionDepth === 0 && useHashId
          ? hashPath
          : [...hashPath, section.name];
      return Object.assign({}, section, {
        heading: !!section.name && children.length > 0,
        content:
          children.length > 0 &&
          this.renderLevel(
            children,
            useRouterLinks,
            childHashPath,
            sectionDepth === 0
          )
      });
    });
    return <ComponentsList items={items} searchTerm={this.state.searchTerm} />;
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

export default TableOfContents;
