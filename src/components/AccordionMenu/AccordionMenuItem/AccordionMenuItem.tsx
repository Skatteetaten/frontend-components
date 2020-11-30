import * as React from 'react';
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

/**
 * @visibleName AccordionMenuItem (Element i trekkspillmeny)
 */
const AccordionMenuItem = (props: AccordionMenuItemProps) => {
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

  const styleTitle = styles.title;

  return (
    <li className={className} aria-label={ariaLabel}>
      <button
        className={
          isContentOpen
            ? classnames(styles.menuItem, styles.menuItemIsOpen)
            : styles.menuItem
        }
        aria-expanded={isContentOpen}
        onClick={clickHandler}
      >
        <div className={styles.menuItemTitle}>
          <Icon iconName={icon} className={styles.iconWrapper} />
          <div className={styleTitle}>{heading}</div>
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

export default AccordionMenuItem;
