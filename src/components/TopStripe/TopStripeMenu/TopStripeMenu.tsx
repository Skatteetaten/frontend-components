import * as React from 'react';
import { getClassNames } from './TopStripeMenu.classNames';
import classnames from 'classnames';
import { UseScreen } from '../../utils';
import { Icon } from '../../Icon';
import { LinkProps } from '../../Link/Link.types';
import { ActionButton } from '../../ActionButton';
import { TopStripeButton } from '../TopStripeButton';
import { TopStripeContext } from '../TopStripe';

export interface TopStripeMenuProps extends Omit<LinkProps, 'title'> {
  children?: React.ReactNode;
  /**
   * Close menu on item click
   * @default true
   */
  closeOnClick?: boolean;
  defaultSelected?: number;
  showOnMobile: boolean;
  onRender?: any;
  title: string | JSX.Element;
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

/*
 * visibleName TopStripeMenu (ToppstripeMeny)
 */
export const TopStripeMenu: React.FC<TopStripeMenuProps> = (props) => {
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
    contentIsMenu = true,
  } = props;
  const { open, setOpen, closeMenu } = React.useContext(TopStripeContext);
  const isMenuOpen = open === index;

  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <>
      <TopStripeButton
        aria-haspopup={contentIsMenu}
        aria-expanded={isMenuOpen}
        className={classnames(className, {
          [styles.topStripeMenuShowChevron]: showChevron,
          [styles.topStripeMenuHasIcon]: icon,
        })}
        onClick={() => setOpen(index)}
        showOnMobile={showOnMobile}
      >
        {icon ? (
          <Icon className={styles.topStripeMenuIcon} iconName={icon} />
        ) : (
          ''
        )}
        <span className={styles.topStripeMenuTitle}>{title}</span>
        {showChevron ? (
          <Icon
            className={styles.topStripeMenuChevronIcon}
            aria-hidden
            iconName={isMenuOpen ? 'MenuUp' : 'MenuDown'}
          />
        ) : (
          ''
        )}
      </TopStripeButton>
      {isMenuOpen && (
        <ul
          className={styles.topStripeMenuDropdownContainer}
          role={contentIsMenu ? 'menu' : undefined}
        >
          {onRender
            ? onRender
            : React.Children.map(children, (child) => {
                if (React.isValidElement<LinkProps>(child)) {
                  return (
                    <li
                      onClick={(e: any) => {
                        child.props &&
                          child.props.onClick &&
                          child.props.onClick(e);
                        closeOnClick && closeMenu && closeMenu();
                      }}
                      className={styles.topStripeMenuDropdownElementContainer}
                    >
                      {child.props.icon ? (
                        <Icon
                          iconName={child.props.icon || undefined}
                          aria-hidden
                          className={styles.topStripeMenuDropdownElementIcon}
                        />
                      ) : (
                        ''
                      )}
                      {React.cloneElement(child, {
                        role: 'menuitem',
                        'aria-current': child.props.icon ? 'true' : undefined,
                        icon: undefined,
                        onClick: undefined,
                        className: classnames(
                          child.props.className,
                          styles.topStripeMenuDropdownElement
                        ),
                      })}
                    </li>
                  );
                } else {
                  return (
                    <li className={styles.topStripeMenuDropdownElement}>
                      {children}
                    </li>
                  );
                }
              })}
          <li>
            <ActionButton
              className={styles.topStripeMenuDropdownCloseButton}
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
