import 'isomorphic-fetch';
import { withRouter } from 'react-router';
import TopBanner from '../../components/TopBanner';
import FooterContent from '../../components/FooterContent';
import Grid from '../../components/Grid';
import Link from '../../components/Link';
import ActionButton from '../../components/ActionButton';
import { getClassNames } from './classNames';
import React from 'react';
import Typography from '../../components/Typography';
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

export class StyleGuideRenderer extends React.Component<> {
  static displayName = 'StyleGuideRenderer';

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      version: ''
    };
  }

  _toggleMenuVisibility() {
    this.setState({
      isHidden: !this.state.isHidden
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
            </TopBanner>
            <div className="mainContent">
              <Grid className={styles.main}>
                <Grid.Row>
                  <Grid.Col md={12} xl={3}>
                    <nav className={styles.nav}>
                      <div className={styles.navMobile}>
                        <ActionButton
                          onClick={() => this._toggleMenuVisibility()}
                          iconSize={ActionButton.LARGE}
                          color="black"
                          icon={
                            this.state.isHidden === true ? 'Menu' : 'Cancel'
                          }
                        >
                          {this.state.isHidden === true ? 'Meny' : 'Lukk'}
                        </ActionButton>
                      </div>
                      {toc}
                    </nav>
                  </Grid.Col>
                  <Grid.Col xl={9}>
                    <article className={styles.article}>
                      <Typography
                        noBorder={['a']}
                        noSize={['h1', 'h2']}
                        noMargin={['h1', 'h2', 'p']}
                        noColor={['p', 'h2', 'a']}
                      >
                        {children}
                      </Typography>
                    </article>
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
