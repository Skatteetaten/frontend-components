import React from 'react';
import PropTypes from 'prop-types';
import TableOfContents from '../TableOfContents';
// @ts-ignore todo
import Error from 'react-styleguidist/lib/client/rsg-components/Error';
import StyleGuideRenderer from './StyleGuideRenderer';
import SkeBasis from '../../components/SkeBasis/SkeBasis';
import { createHashHistory } from 'history';
import { Router } from 'react-router';
import Spinner from '../../components/Spinner';
const Sections = React.lazy(() => import('../Sections/Sections'));

const history = createHashHistory({
  basename: '',
  hashType: 'noslash',
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

interface StyleGuideProps {
  codeRevision: number;
  config: object;
  slots: object;
  sections: any[];
  patterns?: any[];
  displayMode?: string;
}
interface StyleGuideState {
  info: any;
  error: boolean;
}
export class StyleGuide extends React.Component<
  StyleGuideProps,
  StyleGuideState
> {
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
  // @ts-ignore todo
  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    });
  }

  render() {
    // @ts-ignore todo
    const { config, allSections, sections } = this.props;
    if (this.state.error) {
      return <Error error={this.state.error} info={this.state.info} />;
    }
    return (
      <SkeBasis>
        <Router history={history}>
          <StyleGuideRenderer
            // @ts-ignore todo
            title={config.title}
            homepageUrl={''}
            toc={<TableOfContents sections={allSections} />}
          >
            <React.Suspense
              fallback={
                <Spinner size={Spinner.Size.large} spinnerColor="black" />
              }
            >
              {sections.length ? (
                <Sections sections={sections} />
              ) : (
                <>Not found </>
              )}
            </React.Suspense>
          </StyleGuideRenderer>
        </Router>
      </SkeBasis>
    );
  }
}
export default StyleGuide;
