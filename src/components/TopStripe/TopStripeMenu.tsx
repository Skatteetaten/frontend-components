import React from 'react';
import ActionButton from 'components/ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
import { LinkProps } from '../Link';
import { TopStripeContext } from './TopStripe';
import Icon from '../Icon';

export interface TopStripeMenuProps extends LinkProps {
  defaultSelected?: number;
  onRender?: any;
  title: string;
  index?: number;
}

export const TopStripeMenu: React.FC<TopStripeMenuProps> = props => {
  const styles = getClassNames();
  const { children, onRender, title, index } = props;
  const { open, setOpen } = React.useContext(TopStripeContext);
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
                    <li className={styles.dropDownLink}>
                      <Icon
                        iconName={child.props.icon || undefined}
                        className={styles.icon}
                      />
                      {React.cloneElement(child, {
                        icon: undefined
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
