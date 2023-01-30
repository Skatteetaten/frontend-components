import React from 'react';
import { useLocation } from 'react-router-dom';

import { ActionButton } from '../../components/ActionButton';
import { FooterContent } from '../../components/FooterContent';
import { Grid } from '../../components/Grid';
import { Link } from '../../components/Link';
import { TopBanner } from '../../components/TopBanner';
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';

import { getClassNames } from './classNames';
import './style.css';

const ScrollToTopWrapped = (props) => {
  const location = useLocation();
  return <ScrollToTop location={location} {...props} />;
};

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

export class StyleGuideRenderer extends React.Component {
  static displayName = 'StyleGuideRenderer';

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      showNavigation: false,
      version: '',
    };
    this.mainContentRef = React.createRef();
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
      <ScrollToTopWrapped>
        <div id="main">
          <Link
            className={'skipToMainLink'}
            path={'#main-content-id'}
            text={'Hopp til hovedinnhold'}
            skipLink
            onClick={(e) => {
              e.preventDefault();
              this.mainContentRef && this.mainContentRef.current.focus();
            }}
          />
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
                <div className={styles.navSmallScreenButton}>
                  <ActionButton
                    onClick={() => this._toggleMainNavigation()}
                    iconSize={ActionButton.LARGE}
                    color="black"
                    icon={'Menu'}
                    aria-haspopup="true"
                    aria-expanded={
                      this.state.showNavigation === true ? 'true' : 'false'
                    }
                  >
                    Meny
                  </ActionButton>
                </div>
                <div className={styles.navSmallScreen}>
                  <ul role="menu" className="navigation">
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="https://www.skatteetaten.no/stilogtone/skrive/"
                      >
                        Skrive
                      </a>
                    </li>
                    <li role="presentation" className="underline">
                      <a role="menuitem" href="/" aria-current={true}>
                        Designe og utvikle
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="https://www.skatteetaten.no/stilogtone/universell-utforming/"
                      >
                        Universell utforming
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="https://www.skatteetaten.no/stilogtone/visuell-identitet/"
                      >
                        Visuell identitet
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.navDesktop}>
                  <ul className="navigation">
                    <li>
                      <a href="https://www.skatteetaten.no/stilogtone/skrive/">
                        Skrive
                      </a>
                    </li>
                    <li className="underline">
                      <a href="/" aria-current={true}>
                        Designe og utvikle
                      </a>
                    </li>
                    <li role="presentation">
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
            <main className="mainContent">
              <a id="main-content-id" tabIndex="-1" ref={this.mainContentRef} />
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
            </main>
          </div>
          <div className="footer">
            <FooterContent>
              <Grid>
                <Grid.Row>
                  <Grid.Col lg={1} xl={1} />
                  <Grid.Col md={3} lg={2} xl={1}>
                    <FooterContent.Logo />
                  </Grid.Col>
                  <Grid.Col md={9} lg={8} xl={3} className="footer-linkgroup">
                    <LinkGroup
                      links={[
                        {
                          text: 'Tilgjengelighetserklæring',
                          path:
                            'https://uustatus.no/nb/erklaringer/publisert/90be03a3-13e4-4979-8c88-f38727fb77e0',
                        },
                      ]}
                    />
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col lg={8} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col lg={8}>
                    <p>Versjon {version}</p>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </FooterContent>
          </div>
        </div>
      </ScrollToTopWrapped>
    );
  }
}

export default StyleGuideRenderer;
