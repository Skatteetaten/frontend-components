import * as React from 'react';
import { Icon } from '../../Icon';
import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';
import { AccordionMenuItemProps } from './AccordionMenuItem.types';

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
