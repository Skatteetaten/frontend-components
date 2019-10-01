import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ActionButton from '../ActionButton/ActionButton';
import Icon from '../Icon/Icon';

import { getClassNames } from './ScrollToTopButton.classNames';

export class ScrollToTopButton extends React.PureComponent {
  static propTypes = {
    /** Tekst som vises sammen med icon som kan trykkes på for å scrolle til toppen */
    label: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
  };

  static defaultProps = {
    label: 'Til toppen'
  };

  state = {
    skjult: true
  };

  sjekkSkjulKnapp = () => {
    const { skjult } = this.state;

    window.scrollY === 0
      ? !skjult && this.setState({ skjult: true })
      : skjult && this.setState({ skjult: false });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.sjekkSkjulKnapp);
    this.sjekkSkjulKnapp();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.sjekkSkjulKnapp);
  }

  render() {
    const { id, label } = this.props;

    const styles = getClassNames(this.props);

    const visKlasse = this.state.skjult ? '' : styles.vis;

    return (
      <div id={id} className={styles.topcontainer}>
        <div className={classnames(styles.container, visKlasse)}>
          <div className={styles.box}>
            <ActionButton
              className={styles.actionButton}
              ariaLabel={label}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className={styles.iconFixateContainer}>
                <div className={styles.iconFixate}>
                  <Icon className={styles.icon} iconName={'MoveUp'} />
                </div>
              </div>
              <div className={styles.label}>{label}</div>
            </ActionButton>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollToTopButton;
