import * as React from 'react';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';

interface AccordionMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ikon som benyttes for et menypunkt   */
  icon?: string;
  /** Om et menypunkt skal være default åpen */
  isOpen?: boolean;
  /** Tittel på menypunkt */
  heading: string | JSX.Element | undefined;
  /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
  onClick?: (...args: any[]) => any;
  /** Klasse som kan benyttes til overstyre stiler */
  className?: string;
  children?: JSX.Element;
  /** aria-label */
  ariaLabel?: string;
}

type AccordionMenuItemState = {
  isContentOpen: boolean;
};

const AccordionMenuItem = (props: AccordionMenuItemProps) => {
  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const styles = getClassNames();
  const { heading, icon, onClick, className, children, ariaLabel } = props;

  const toggleVisibility = () => {
    setContentOpen(!isContentOpen);
  };

  const clickHandler = () => {
    if (onClick && !isContentOpen) {
      onClick();
    }
    toggleVisibility();
  };

  const {
    menuItem,
    menuItemIsOpen,
    menuItemTitle,
    iconWrapper,
    toggleButton,
    toggleButtonOpen,
    content
  } = styles;

  const styleTitle = styles.title;

  return (
    <li className={className} aria-label={ariaLabel}>
      <header
        onClick={clickHandler}
        className={
          isContentOpen ? classnames(menuItem, menuItemIsOpen) : menuItem
        }
      >
        <div className={menuItemTitle}>
          <div className={iconWrapper}>
            <div>
              <Icon iconName={icon} style={{ fontSize: '28px' }} />
            </div>
          </div>
          <div className={styleTitle} tabIndex={0}>
            {heading}
          </div>
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
            aria-expanded={isContentOpen ? true : false}
          />
        </div>
      </header>
      {isContentOpen && (
        <section className={content} tabIndex={0}>
          {children}
        </section>
      )}
    </li>
  );
};

export default AccordionMenuItem;
