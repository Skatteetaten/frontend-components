import classnames from 'classnames';
import * as React from 'react';
import { Icon } from '../Icon';
import { ActionButton } from '../ActionButton';
import { getClassNames } from './ScrollToTopButton.classNames';
import {
  ScrollToTopButtonProps,
  ScrollToTopButtonState,
} from './ScrollToTopButton.types';

/*
 * visibleName ScrollToTopButton (Gå til toppen)
 */
export class ScrollToTopButton extends React.PureComponent<
  ScrollToTopButtonProps,
  ScrollToTopButtonState
> {
  static defaultProps = {
    label: 'Til toppen',
  };

  state = {
    skjult: true,
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
    const { id, className, label } = this.props;
    // @ts-ignore TODO
    const styles = getClassNames(this.props);

    const visKlasse = this.state.skjult ? '' : styles.vis;

    return (
      <div id={id} className={styles.topcontainer} aria-hidden="true">
        <div className={classnames(styles.container, visKlasse, className)}>
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
