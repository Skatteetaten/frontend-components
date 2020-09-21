import classnames from 'classnames';
import * as React from 'react';

import { getClassNames } from './AccordionMenu.classNames';
import { AccordionItemProps } from '../index';

export interface AccordionMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  /** aria-label */
  ariaLabel?: string;
}

export const AccordionMenu: React.FC<AccordionMenuProps> = ({
  className,
  children,
  ariaLabel,
}) => {
  const styles = getClassNames();
  const totalSteps = React.Children.count(children);
  return (
    <ul
      className={classnames(styles.accordionMenu, className)}
      aria-label={ariaLabel}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            totalSteps,
          });
        }
      })}
    </ul>
  );
};
