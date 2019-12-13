import * as React from 'react';
import ActionButton from '../ActionButton';
import { getClassNames } from './TopStripe.classNames';
import { LinkProps } from '../Link';
import { TopStripeContext } from './TopStripe';
import Icon from '../Icon';
import { TopStripeButton } from './TopStripeButton';

export interface TopStripeMenuProps extends LinkProps {
  /**
   * Close menu on item click
   * @default true
   */
  closeOnClick?: boolean;
  defaultSelected?: number;
  onRender?: any;
  title: string;
  index?: number;
}

export const TopStripeMenu: React.FC<TopStripeMenuProps> = props => {
  const styles = getClassNames();
  const { children, onRender, title, index, closeOnClick = true } = props;
  const { open, setOpen, closeMenu } = React.useContext(TopStripeContext);

  return (
    <>
      <TopStripeButton
        className={styles.plainButton}
        onClick={() => setOpen(index)}
      >
        {title}
      </TopStripeButton>
      {open === index && (
        <ul className={styles.dropdownContainer}>
          {onRender
            ? onRender
            : React.Children.map(children, (child, index) => {
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
            />
          </li>
        </ul>
      )}
    </>
  );
};
