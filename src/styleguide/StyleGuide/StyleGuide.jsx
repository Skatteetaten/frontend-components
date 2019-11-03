import React from 'react';
import PropTypes from 'prop-types';
import TableOfContent from '../TableOfContents';
import Error from 'react-styleguidist/lib/client/rsg-components/Error';
import Sections from '../Sections';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import StyleGuideRenderer from './StyleGuideRenderer';
import SkeBasis from '../../components/SkeBasis/SkeBasis';
import { createHashHistory } from 'history';
import { Router } from 'react-router';

const history = createHashHistory({
  basename: '',
  hashType: 'noslash',
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

export class StyleGuide extends React.Component<> {
  static childContextTypes = {
    codeRevision: PropTypes.number.isRequired,
    config: PropTypes.object.isRequired,
    slots: PropTypes.object.isRequired,
    displayMode: PropTypes.string
  };

  state = {
    error: false,
    info: null
  };

  getChildContext() {
    return {
      codeRevision: this.props.codeRevision,
      config: this.props.config,
      slots: this.props.slots,
      displayMode: this.props.displayMode
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      error,
      info
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
      slots
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
          displayMode
        }}
      >
        <SkeBasis>
          <Router history={history}>
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
          </Router>
        </SkeBasis>
      </Context.Provider>
    );
  }
}
export default StyleGuide;
