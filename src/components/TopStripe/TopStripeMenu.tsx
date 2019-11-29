import React from 'react';
import ActionButton from 'components/ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
import { LinkProps } from '../Link';

export interface TopStripeMenuProps extends LinkProps {
  defaultSelected?: number;
}
export const TopStripeMenu: React.FC<TopStripeMenuProps> = props => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(props.defaultSelected);
  const styles = getClassNames();
  const { children, ...rest } = props;
  return (
    <div className={styles.menu} {...rest}>
      <ActionButton
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
      >
        Meny
      </ActionButton>
      {open && (
        <ul className={styles.dropdownContainer}>
          {React.Children.map(children, (child, index) => {
            const isSelected = selected === index;
            if (React.isValidElement<TopStripeMenuProps>(child)) {
              return (
                <li onClick={() => setSelected(index)}>
                  {React.cloneElement(child, {
                    icon: isSelected ? 'Check' : undefined
                  })}
                </li>
              );
            }
          })}
          <li>
            <ActionButton
              className={styles.menuButton}
              icon={'ChevronUp'}
              onClick={() => setOpen(!open)}
            />
          </li>
        </ul>
      )}
    </div>
  );
};
