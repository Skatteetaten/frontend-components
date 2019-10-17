import React from 'react';
import ComponentsList from '../ComponentsList';
// @ts-ignore
import filterSectionsByName from 'react-styleguidist/lib/client/utils/filterSectionsByName';
import SearchField from '../../components/SearchField';

interface SokeBoksProps {
  searchTerm: string;
  setSearchTerm: (arg0: string) => void;
  children: JSX.Element;
}

function SokeBoks({ searchTerm, setSearchTerm, children }: SokeBoksProps) {
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
interface TableOfContentsProps {
  sections: [];
}
export class TableOfContents extends React.Component<TableOfContentsProps, {}> {
  state = {
    searchTerm: ''
  };
  renderLevel(sections: any) {
    const _this2 = this;
    const items = sections.map(function(section: object) {
      const children = [].concat(
        // @ts-ignore TODO
        section.sections || [],
        // @ts-ignore TODO
        section.components || []
      );
      return Object.assign({}, section, {
        // @ts-ignore TODO
        heading: !!section.name && children.length > 0,
        content: children.length > 0 && _this2.renderLevel(children)
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
      // @ts-ignore TODO
      sections.length === 1 ? sections[0].components : sections;
    const filtered = filterSectionsByName(firstLevel, searchTerm);
    return this.renderLevel(filtered);
  }

  render() {
    const { searchTerm } = this.state;
    // @ts-ignore TODO
    const setSearchTerm = searchTerm => this.setState({ searchTerm });
    return (
      <SokeBoks searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
        {this.renderSections()}
      </SokeBoks>
    );
  }
}

export default TableOfContents;
