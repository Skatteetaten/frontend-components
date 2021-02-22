import * as React from 'react';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';

interface AccordionMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icons that is used for menu item    */
  icon?: string;
  /** If a menu item should be open by default */
  isOpen?: boolean;
  /** The title of the menu item */
  heading: string | JSX.Element | undefined;
  /** Callback when used opens the menu item. Is called only when opened, not when closing.  */
  onClick?: (...args: any[]) => any;
  /** Additional class names for overriding styling */
  className?: string;
  children?: JSX.Element;
  /** aria-label for the menu item */
  ariaLabel?: string;
  /** Flex the title section */
  flex?: boolean;
}
/**
 * @visibleName AccordionMenuItem (Element i trekkspillmeny)
 */
const AccordionMenuItem = (props: AccordionMenuItemProps) => {
  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const { heading, icon, onClick, className, children, ariaLabel } = props;
  const styles = getClassNames(props);

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
          <div className={styleTitle}>{heading}</div>
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
            aria-expanded={isContentOpen}
          />
        </div>
      </header>
      {isContentOpen && <section className={content}>{children}</section>}
    </li>
  );
};

export default AccordionMenuItem;
