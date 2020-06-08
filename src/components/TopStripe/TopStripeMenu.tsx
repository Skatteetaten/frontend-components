import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';
import classnames from 'classnames';
import {
  Icon,
  LinkProps,
  ActionButton,
  TopStripeButton,
  TopStripeContext,
} from '../index';

export interface TopStripeMenuProps extends LinkProps {
  /**
   * Close menu on item click
   * @default true
   */
  closeOnClick?: boolean;
  defaultSelected?: number;
  onRender?: any;
  title: string;
  className?: string;
  index?: number;
  icon?: string;
  showChevron?: boolean;
}

export const TopStripeMenu: React.FC<TopStripeMenuProps> = (props) => {
  const styles = getClassNames();
  const {
    children,
    className,
    onRender,
    icon,
    title,
    index,
    closeOnClick = true,
  } = props;
  const { open, setOpen, closeMenu } = React.useContext(TopStripeContext);

  return (
    <>
      {props.icon ? <Icon className={styles.menuIcon} iconName={icon} /> : ''}

      <TopStripeButton
        aria-haspopup
        className={classnames(styles.plainButton, className)}
        onClick={() => setOpen(index)}
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
                      className={styles.dropDownLink}
                    >
                      <Icon
                        iconName={child.props.icon || undefined}
                        className={styles.icon}
                      />
                      {React.cloneElement(child, {
                        icon: undefined,
                        onClick: undefined,
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
            />
          </li>
        </ul>
      )}
    </>
  );
};
