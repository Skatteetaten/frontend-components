import classnames from 'classnames';
import * as React from 'react';

import { getClassNames } from './AccordionMenu.classNames';
import { AccordionItemProps } from '../Accordion/AccordionItem/AccordionItem.types';
import { AccordionMenuProps } from './AccordionMenu.types';

/**
 * @deprecated AccordionMenu er erstattet av Accordion fra "@skatteetaten/ds-collections"
 * visibleName AccordionMenu (Trekkspillmeny)
 */
export const AccordionMenu: React.FC<AccordionMenuProps> = ({
  className,
  children,
  ariaLabel,
  flex,
}) => {
  const styles = getClassNames({ flex });
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
