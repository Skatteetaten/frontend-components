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
    onRender,
    index,
    closeMenuAriaLabel = 'Lukk',
    closeOnClick = true,
    contentIsMenu = true,
  } = props;
  const styles = getClassNames();
  const { setOpen, closeMenu } = React.useContext(TopStripeContext);

  const onChildClick = (
    child: React.ReactElement,
    e: React.MouseEvent<any, MouseEvent>
  ) => {
    child.props && child.props.onClick && child.props.onClick(e);
    closeOnClick && closeMenu && closeMenu();
  };

  return (
    <div className={styles.topStripeMenuDropdownContainer}>
      {contentIsMenu ? (
        <ul role={'menu'}>
          {onRender
            ? onRender
            : React.Children.map(children, (child) => {
                if (React.isValidElement<LinkProps>(child)) {
                  return (
                    <li
                      onClick={(e) => {
                        onChildClick(child, e);
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

      <span>
        <ActionButton
          className={styles.topStripeMenuDropdownCloseButton}
          icon={'ChevronUp'}
          onClick={() => setOpen(index)}
          ariaLabel={closeMenuAriaLabel}
        />
      </span>
    </div>
  );
};
