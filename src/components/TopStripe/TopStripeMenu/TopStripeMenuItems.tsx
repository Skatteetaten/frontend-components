import * as React from 'react';
import { LinkProps } from '../../Link/Link.types';
import { Icon } from '../../Icon';
import classnames from 'classnames';
import { ActionButton } from '../../ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
import { TopStripeMenuProps } from './TopStripeMenu';
import { TopStripeContext } from '../TopStripe';

export const TopStripeMenuItems: React.FC<TopStripeMenuProps> = (props) => {
  const {
    children,
    index,
    closeMenuAriaLabel = 'Lukk',
    closeOnClick = true,
    contentIsMenu = true,
  } = props;
  const styles = getClassNames();
  const { setOpen, closeMenu } = React.useContext(TopStripeContext);

  const onChildClick = (
    child: React.ReactElement,
    e: React.MouseEvent<HTMLElement>
  ) => {
    child.props && child.props.onClick && child.props.onClick(e);
    closeOnClick && closeMenu && closeMenu();
  };

  return (
    <div className={styles.topStripeMenuDropdownContainer}>
      {contentIsMenu ? (
        <ul role={'menu'}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement<LinkProps>(child)) {
              const { className, icon } = child.props;
              return (
                <li
                  role={'presentation'}
                  onClick={(e) => {
                    onChildClick(child, e);
                  }}
                  className={styles.topStripeMenuDropdownElementContainer}
                >
                  {icon && (
                    <Icon
                      iconName={icon || undefined}
                      aria-hidden
                      className={styles.topStripeMenuDropdownElementIcon}
                    />
                  )}
                  {React.cloneElement(child, {
                    role: 'menuitem',
                    'aria-current': icon ? 'true' : undefined,
                    icon: undefined,
                    onClick: undefined,
                    className: classnames(
                      className,
                      styles.topStripeMenuDropdownElement
                    ),
                  })}
                </li>
              );
            } else {
              return (
                <li
                  role={'presentation'}
                  className={styles.topStripeMenuDropdownElement}
                >
                  {children}
                </li>
              );
            }
          })}
        </ul>
      ) : (
        <>
          {React.Children.map(children, (child) => {
            if (React.isValidElement<LinkProps>(child)) {
              return (
                <div
                  onClick={(e: any) => {
                    onChildClick(child, e);
                  }}
                >
                  {React.cloneElement(child)}
                </div>
              );
            }
            return <>{children}</>;
          })}
        </>
      )}
      <ActionButton
        className={styles.topStripeMenuDropdownCloseButton}
        icon={'ChevronUp'}
        onClick={() => setOpen(index)}
        onKeyDown={(e: any) => {
          e.stopPropagation();
          if (!e.shiftKey && e.key === 'Tab') {
            setOpen(index);
          }
        }}
        ariaLabel={closeMenuAriaLabel}
      />
    </div>
  );
};
