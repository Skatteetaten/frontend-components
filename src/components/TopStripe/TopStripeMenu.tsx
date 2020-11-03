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
  showOnMobile?: boolean;
  onRender?: any;
  title: string;
  className?: string;
  index?: number;
  /** Name of icon to display */
  icon?: string;
  /** Ability to show/hide chevron icon */
  showChevron?: boolean;
  /**  Aria-label for close button in sub menu */
  closeMenuAriaLabel?: string;
  /** Spesify if content is menu or not (changes wai-aria behaviour)  */
  contentIsMenu?: boolean;
}
/**
 * @visibleName TopStripeMenu (Toppstripe-meny)
 */
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
    closeMenuAriaLabel = 'Lukk',
    closeOnClick = true,
    showChevron = true,
    contentIsMenu = true
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
        aria-haspopup={contentIsMenu}
        aria-expanded={open === index}
        className={classnames(styles.plainButton, className)}
        onClick={() => setOpen(index)}
        showOnMobile={showOnMobile}
      >
        {title}
        {showChevron ? (
          <Icon
            className={styles.chevronIcon}
            aria-hidden
            iconName={'MenuDown'}
          />
        ) : (
          ''
        )}
      </TopStripeButton>
      {open === index && (
        <ul
          className={styles.dropdownContainer}
          role={contentIsMenu ? 'menu' : undefined}
        >
          {onRender
            ? onRender
            : React.Children.map(children, child => {
                if (React.isValidElement<LinkProps>(child)) {
                  return (
                    <li
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
                        aria-hidden
                        className={styles.icon}
                      />
                      {React.cloneElement(child, {
                        role: 'menuitem',
                        'aria-current': child.props.icon ? 'true' : undefined,
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
