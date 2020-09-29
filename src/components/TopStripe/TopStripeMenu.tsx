import * as React from 'react';
import ActionButton from '../ActionButton';
import { getClassNames } from './TopStripe.classNames';
import classnames from 'classnames';
import { LinkProps } from '../Link';
import { TopStripeContext } from './TopStripe';
import { TopStripeButton } from './TopStripeButton';
import { UseScreen } from '../utils/ScreenPlugin';
import Icon from '../Icon/Icon';

export interface TopStripeMenuProps extends LinkProps {
  /**
   * Close menu on item click
   * @default true
   */
  closeOnClick?: boolean;
  defaultSelected?: number;
  showOnMobile: boolean;
  onRender?: any;
  title: string;
  className?: string;
  index?: number;
  icon?: string;
  showChevron?: boolean;
  closeMenuAriaLabel?: string;
}

export const TopStripeMenu: React.FC<TopStripeMenuProps> = props => {
  const styles = getClassNames();
  const {
    children,
    className,
    onRender,
    icon,
    title,
    index,
    showOnMobile = false,
    closeMenuAriaLabel = '',
    closeOnClick = true
  } = props;
  const { open, setOpen, closeMenu } = React.useContext(TopStripeContext);

  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <>
      {props.icon ? <Icon className={styles.menuIcon} iconName={icon} /> : ''}

      <TopStripeButton
        aria-haspopup={true}
        role="menu"
        aria-expanded={open === index}
        className={classnames(styles.plainButton, className)}
        onClick={() => setOpen(index)}
        showOnMobile={showOnMobile}
      >
        {title}
        {props.showChevron ? (
          <Icon
            className={styles.chevronIcon}
            aria-hidden
            iconName={'ChevronDown'}
          />
        ) : (
          ''
        )}
      </TopStripeButton>
      {open === index && (
        <ul className={styles.dropdownContainer}>
          {onRender
            ? onRender
            : React.Children.map(children, child => {
                if (React.isValidElement<LinkProps>(child)) {
                  return (
                    <li
                      role="menuitem"
                      onClick={(e: any) => {
                        child.props &&
                          child.props.onClick &&
                          child.props.onClick(e);
                        closeOnClick && closeMenu && closeMenu();
                      }}
                      className={styles.dropDownLink}
                    >
                      <Icon
                        iconName={child.props.icon || undefined}
                        ariaLabel="Valgt"
                        className={styles.icon}
                      />
                      {React.cloneElement(child, {
                        icon: undefined,
                        onClick: undefined
                      })}
                    </li>
                  );
                } else {
                  return <li className={styles.dropDownLink}>{children}</li>;
                }
              })}
          <li>
            <ActionButton
              className={styles.menuCloseButton}
              icon={'ChevronUp'}
              onClick={() => setOpen(index)}
              ariaLabel={closeMenuAriaLabel}
            />
          </li>
        </ul>
      )}
    </>
  );
};