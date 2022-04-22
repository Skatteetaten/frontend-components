import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
/**
 * hashType is no longer supported in react-router v6, and default slash is the only supported behavior.
 * To still be able to use noslash as hashType, we need to use the package "use-hash-history".
 * For more information see: https://github.com/remix-run/react-router/issues/7703
 */
import { useHashHistory } from 'use-hash-history';
import PropTypes from 'prop-types';
import Error from 'react-styleguidist/lib/client/rsg-components/Error';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';

import { SkeBasis } from '../../components/SkeBasis';
import TableOfContent from '../TableOfContents/TableOfContent';
import Sections from '../Sections/Sections';
import StyleGuideRenderer from './StyleGuideRenderer';

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
      history,
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
          <HistoryRouter history={history} basename="/">
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
          </HistoryRouter>
        </SkeBasis>
      </Context.Provider>
    );
  }
}

const StyleGuideWrapped = (props, { hashRoot = '' }) => {
  const history = useHashHistory({
    hashRoot,
    defaultPath: { pathname: process.env.PUBLIC_URL ?? '' },
  });

  return <StyleGuide history={history} {...props} />;
};

export default StyleGuideWrapped;
