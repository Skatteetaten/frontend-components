import React from 'react';
import PropTypes from 'prop-types';
import TableOfContent from '../TableOfContents/TableOfContent';
import Error from 'react-styleguidist/lib/client/rsg-components/Error';
import Sections from '../Sections/Sections';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import StyleGuideRenderer from './StyleGuideRenderer';
import { SkeBasis } from '../../components/SkeBasis';
import { HashRouter } from 'react-router-dom';

export class StyleGuide extends React.Component {
  static childContextTypes = {
    codeRevision: PropTypes.number.isRequired,
    config: PropTypes.object.isRequired,
    slots: PropTypes.object.isRequired,
    displayMode: PropTypes.string,
  };

  state = {
    error: false,
    info: null,
  };

  getChildContext() {
    return {
      codeRevision: this.props.codeRevision,
      config: this.props.config,
      slots: this.props.slots,
      displayMode: this.props.displayMode,
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }

  render() {
    const {
      config,
      sections,
      displayMode,
      allSections,
      pagePerSection,
      codeRevision,
      slots,
    } = this.props;
    if (this.state.error) {
      return <Error error={this.state.error} info={this.state.info} />;
    }
    return (
      <Context.Provider
        value={{
          codeRevision,
          config,
          slots,
          displayMode,
        }}
      >
        <SkeBasis>
          <HashRouter>
            <StyleGuideRenderer
              title={config.title}
              homepageUrl={''}
              toc={
                <TableOfContent
                  sections={allSections}
                  useRouterLinks={pagePerSection}
                />
              }
            >
              {sections.length ? (
                <Sections sections={sections} depth={1} />
              ) : (
                <div>Not Found </div>
              )}
            </StyleGuideRenderer>
          </HashRouter>
        </SkeBasis>
      </Context.Provider>
    );
  }
}
export default StyleGuide;
