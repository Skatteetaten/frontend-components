import React from 'react';
import ActionButton from 'components/ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
import { LinkProps } from '../Link';
import { TopStripeConsumer } from './TopStripe';
import classnames from 'classnames';
export interface TopStripeMenuProps extends LinkProps {
  defaultSelected?: number;
  onRender?: any;
  title: string;
  index?: number;
}

export const TopStripeMenu: React.FC<TopStripeMenuProps> = props => {
  const [selected, setSelected] = React.useState(props.defaultSelected);
  const styles = getClassNames();
  const { children, onRender, title, index, ...rest } = props;
  return (
    <TopStripeConsumer>
      {({ open, setOpen }) => (
        <div className={styles.menu} {...rest}>
          <ActionButton
            className={styles.menuButton}
            onClick={() => setOpen(index)}
          >
            {title}
          </ActionButton>
          {open === index && (
            <ul className={styles.dropdownContainer}>
              {onRender
                ? onRender
                : React.Children.map(children, (child, index) => {
                    const isSelected = selected === index;
                    if (React.isValidElement<LinkProps>(child)) {
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
                  className={classnames(
                    styles.menuButton,
                    styles.menuButtonButtom
                  )}
                  icon={'ChevronUp'}
                  onClick={() => setOpen(index)}
                />
              </li>
            </ul>
          )}
        </div>
      )}
    </TopStripeConsumer>
  );
};
