import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../IconButton';
import Icon from '../../Icon';

import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';

export default class AccordionMenuItem extends React.PureComponent {
  static propTypes = {
    /** Ikon som benyttes for et menypunkt   */
    icon: PropTypes.string,
    /** ariaLabel for ikonet i et menypunkt  */
    iconLabel: PropTypes.string,
    /** Om et menypunkt skal være default åpen */
    isOpen: PropTypes.bool,
    /** Tittel på menypunkt */
    title: PropTypes.object.isRequired,
    /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
    onClick: PropTypes.func,
    /** Klasse som kan benyttes til overstyre stiler */

    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isContentOpen: props.isOpen
    };
  }

  static defaultProps = {
    title: null
  };

  render() {
    const styles = getClassNames();
    const { isContentOpen } = this.state;
    const {
      title,
      iconLabel,
      icon,
      onClick,
      itemKey,
      className,
      children
    } = this.props;

    const clickHandler = () => {
      if (onClick && !isContentOpen) {
        onClick();
      }
      this._toggleVisibility();
    };

    return (
      <li className={className} key={itemKey}>
        <header
          onClick={clickHandler}
          className={
            isContentOpen
              ? classnames(styles.menuItem, styles.menuItemIsOpen)
              : styles.menuItem
          }
        >
          <div className={styles.menuItemTitle}>
            <div className={styles.iconWrapper}>
              <div>
                <Icon
                  iconName={icon}
                  style={{ fontSize: '28px' }}
                  ariaLabel={iconLabel}
                />
              </div>
            </div>
            <div className={styles.title}>{title}</div>
          </div>
          <div
            className={
              isContentOpen
                ? classnames(styles.toggleButton, styles.toggleButtonOpen)
                : styles.toggleButton
            }
          >
            <IconButton
              alt={'Åpne og lukke knapp'}
              title="Skriv ut"
              buttonType="large"
              icon="ChevronDown"
            />
          </div>
        </header>
        {isContentOpen && (
          <section className={styles.content}>{children}</section>
        )}
      </li>
    );
  }

  _toggleVisibility = () => {
    this.setState({
      isContentOpen: !this.state.isContentOpen
    });
  };
}
