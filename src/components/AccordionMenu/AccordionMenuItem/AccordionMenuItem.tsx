import * as React from 'react';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';

interface AccordionMenuItemProps {
  /** Ikon som benyttes for et menypunkt   */
  icon?: string;
  /** ariaLabel for ikonet i et menypunkt  */
  iconLabel?: string;
  /** Om et menypunkt skal være default åpen */
  isOpen?: boolean;
  /** Tittel på menypunkt */
  title: object;
  /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
  onClick?: (...args: any[]) => any;
  /** Klasse som kan benyttes til overstyre stiler */
  className?: string;
}

type AccordionMenuItemState = {
  isContentOpen: boolean;
};

export default class AccordionMenuItem extends React.PureComponent<
  AccordionMenuItemProps,
  AccordionMenuItemState
> {
  static defaultProps = {
    title: null
  };
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    this.state = {
      isContentOpen: props.isOpen
    };
  }

  render() {
    const styles = getClassNames();
    const { isContentOpen } = this.state;
    const { title, iconLabel, icon, onClick, className, children } = this.props;

    const clickHandler = () => {
      if (onClick && !isContentOpen) {
        onClick();
      }
      this._toggleVisibility();
    };
    // @ts-ignore TODO
    const {
      // @ts-ignore TODO
      menuItem,
      // @ts-ignore TODO
      menuItemIsOpen,
      // @ts-ignore TODO
      menuItemTitle,
      // @ts-ignore TODO
      iconWrapper,
      // @ts-ignore TODO
      toggleButton,
      // @ts-ignore TODO
      toggleButtonOpen,
      // @ts-ignore TODO
      content
    } = styles;
    // @ts-ignore TODO
    const styleTitle = styles.title;
    return (
      <li className={className}>
        <header
          onClick={clickHandler}
          className={
            isContentOpen ? classnames(menuItem, menuItemIsOpen) : menuItem
          }
        >
          <div className={menuItemTitle}>
            <div className={iconWrapper}>
              <div>
                <Icon
                  iconName={icon}
                  style={{ fontSize: '28px' }}
                  ariaLabel={iconLabel}
                />
              </div>
            </div>
            <div className={styleTitle}>{title}</div>
          </div>
          <div
            className={
              isContentOpen
                ? classnames(toggleButton, toggleButtonOpen)
                : toggleButton
            }
          >
            <IconButton
              alt={'Åpne og lukke knapp'}
              icon="ChevronDown"
              title="Skriv ut"
            />
          </div>
        </header>
        {isContentOpen && <section className={content}>{children}</section>}
      </li>
    );
  }

  _toggleVisibility = () => {
    this.setState({
      isContentOpen: !this.state.isContentOpen
    });
  };
}
