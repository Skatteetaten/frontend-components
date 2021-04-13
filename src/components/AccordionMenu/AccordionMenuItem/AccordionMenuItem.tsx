import * as React from 'react';
import { Icon } from '../../index';
import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';

export interface AccordionMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Ikon som benyttes for et menypunkt   */
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
export const AccordionMenuItem = (props: AccordionMenuItemProps) => {
  const styles = getClassNames(props);
  const { heading, icon, onClick, className, children, ariaLabel } = props;
  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const toggleVisibility = () => {
    setContentOpen(!isContentOpen);
  };

  const clickHandler = () => {
    if (onClick && !isContentOpen) {
      onClick();
    }
    toggleVisibility();
  };

  return (
    <li className={className} aria-label={ariaLabel}>
      <button
        onClick={clickHandler}
        className={
          isContentOpen
            ? classnames(styles.menuItem, styles.menuItemIsOpen)
            : styles.menuItem
        }
        aria-expanded={isContentOpen}
      >
        <div className={styles.menuItemTitle}>
          <Icon iconName={icon} className={styles.iconWrapper} />
          <div className={styles.title}>{heading}</div>
        </div>
        <div
          className={
            isContentOpen
              ? classnames(styles.toggleButton, styles.toggleButtonOpen)
              : styles.toggleButton
          }
        >
          <Icon iconName="ChevronDown" />
        </div>
      </button>
      {isContentOpen && (
        <section className={styles.content}>{children}</section>
      )}
    </li>
  );
};
