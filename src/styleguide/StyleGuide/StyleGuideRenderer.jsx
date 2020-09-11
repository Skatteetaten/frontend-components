import { withRouter } from 'react-router';
import {
  ActionButton,
  Link,
  Grid,
  FooterContent,
  TopBanner,
} from '../../components/index';
import { getClassNames } from './classNames';
import React from 'react';
import './style.css';

const ScrollToTop = withRouter(
  class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return this.props.children;
    }
  }
);

export class StyleGuideRenderer extends React.Component {
  static displayName = 'StyleGuideRenderer';

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      showNavigation: false,
      version: '',
    };
  }

  _toggleMainNavigation() {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }

  _toggleComponentVisibility() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  componentDidMount() {
    this.setState({ version: process.env.REACT_APP_BUILD_VERSION });
  }

  render() {
    const { title, children, toc } = this.props;
    const { version } = this.state;
    const styles = getClassNames(this.props, this.state);
    return (
      <ScrollToTop>
        <div id="main">
          <div className="mainLayout">
            <TopBanner
              homeUrl="/"
              homeText="Hjem"
              external
              title={title}
              className="banner"
            >
              <div className="slogan">
                <Link
                  path={'https://www.skatteetaten.no/stilogtone/'}
                  text={'Språk, design og utvikling i Skatteetaten'}
                  icon={'ArrowBack'}
                  placement="before"
                />
              </div>
              <nav>
                <div
                  aria-expanded={
                    this.state.showNavigation === true ? 'true' : 'false'
                  }
                  className={styles.navMobileButton}
                >
                  <ActionButton
                    onClick={() => this._toggleMainNavigation()}
                    iconSize={ActionButton.LARGE}
                    color="black"
                    icon={'Menu'}
                  >
                    Meny
                  </ActionButton>
                </div>
                <div className={styles.mainNav}>
                  <ul className="navigation">
                    <li>
                      <a href="https://www.skatteetaten.no/stilogtone/skrive/">
                        Skrive
                      </a>
                    </li>
                    <li className="underline">
                      <a href="/">Designe og utvikle</a>
                    </li>
                    <li>
                      <a href="https://www.skatteetaten.no/stilogtone/universell-utforming/">
                        Universell utforming
                      </a>
                    </li>
                    <li>
                      <a href="https://www.skatteetaten.no/stilogtone/visuell-identitet/">
                        Visuell identitet
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </TopBanner>
            <div className="mainContent">
              <Grid className={styles.main}>
                <Grid.Row>
                  <Grid.Col md={12} xl={3}>
                    <nav className={styles.navComponents}>
                      <div className={styles.navMobile}>
                        <ActionButton
                          onClick={() => this._toggleComponentVisibility()}
                          iconSize={ActionButton.LARGE}
                          color="black"
                          icon={
                            this.state.isHidden === true
                              ? 'ChevronDown'
                              : 'ChevronUp'
                          }
                        >
                          {this.state.isHidden === true
                            ? 'Vis komponenter'
                            : 'Skjul komponenter'}
                        </ActionButton>
                      </div>
                      {toc}
                    </nav>
                  </Grid.Col>
                  <Grid.Col xl={9}>
                    <article className={styles.article}>{children}</article>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="footer">
            <FooterContent>
              <p>Versjon {version}</p>
            </FooterContent>
          </div>
        </div>
      </ScrollToTop>
    );
  }
}

export default StyleGuideRenderer;
