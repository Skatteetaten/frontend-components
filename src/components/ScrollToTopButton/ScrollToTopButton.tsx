import classnames from 'classnames';
import * as React from 'react';
import { Icon } from '../Icon';
import { ActionButton } from '../ActionButton';
import { getClassNames } from './ScrollToTopButton.classNames';
import {
  ScrollToTopButtonProps,
  ScrollToTopButtonState,
} from './ScrollToTopButton.types';

/**
 * @deprecated Komponenten er erstattet av ScrollToTopButton fra "@skatteetaten/ds-buttons"
 *
 * visibleName ScrollToTopButton (Gå til toppen)
 */
export class ScrollToTopButton extends React.PureComponent<
  ScrollToTopButtonProps,
  ScrollToTopButtonState
> {
  static defaultProps = {
    label: 'Til toppen',
    containerMaxWidth: undefined,
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
    const { id, customClassNames, label } = this.props;
    // @ts-ignore TODO
    const styles = getClassNames(this.props);

    const visKlasse = this.state.skjult ? '' : styles.vis;

    return (
      <div
        id={id}
        className={classnames(
          styles.topcontainer,
          customClassNames?.topContainer
        )}
        aria-hidden="true"
      >
        <div
          className={classnames(
            styles.container,
            visKlasse,
            customClassNames?.container
          )}
        >
          <div className={classnames(styles.box, customClassNames?.box)}>
            <ActionButton
              className={classnames(
                styles.actionButton,
                customClassNames?.button
              )}
              ariaLabel={label}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div
                className={classnames(
                  styles.iconFixateContainer,
                  customClassNames?.iconContainer
                )}
              >
                <div className={styles.iconFixate}>
                  <Icon
                    className={classnames(styles.icon, customClassNames?.icon)}
                    iconName={'MoveUp'}
                  />
                </div>
              </div>
              <div
                className={classnames(styles.label, customClassNames?.label)}
              >
                {label}
              </div>
            </ActionButton>
          </div>
        </div>
      </div>
    );
  }
}
