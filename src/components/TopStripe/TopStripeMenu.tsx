import * as React from 'react';
import ActionButton from 'components/ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
import { LinkProps } from '../Link';
import { TopStripeContext } from './TopStripe';
import Icon from '../Icon';

export interface TopStripeMenuProps extends LinkProps {
  /** @param {defaultSelected=true} Close menu when clicking item  */
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
      <ActionButton
        className={open === index ? styles.menuButtonActive : styles.menuButton}
        onClick={() => setOpen(index)}
      >
        {title}
      </ActionButton>
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
