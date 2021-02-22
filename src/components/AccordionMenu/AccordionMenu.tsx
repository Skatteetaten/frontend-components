import classnames from 'classnames';
import * as React from 'react';

import { getClassNames } from './AccordionMenu.classNames';
import { AccordionItemProps } from '../Accordion/AccordionItem/AccordionItem';

interface AccordionMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  /** aria-label */
  ariaLabel?: string;
}

/**
 * @visibleName AccordionMenu (Trekkspillmeny)
 */
const AccordionMenu: React.FC<AccordionMenuProps> = props => {
  const { className, children, ariaLabel } = props;

  const styles = getClassNames(props);
  const totalSteps = React.Children.count(children);
  return (
    <ul
      className={classnames(styles.accordionMenu, className)}
      aria-label={ariaLabel}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            totalSteps
          });
        }
      })}
    </ul>
  );
};

export default AccordionMenu;
