import classnames from 'classnames';
import * as React from 'react';

import { getClassNames } from './AccordionMenu.classNames';

interface AccordionMenuProps {
  className?: string;
}
const AccordionMenu: React.SFC<AccordionMenuProps> = ({
  className,
  children
}) => {
  const styles = getClassNames();
  return (
    <ul className={classnames(styles.accordionMenu, className)}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          itemKey: index + 1,
          totalSteps: children.length
        })
      )}
    </ul>
  );
};

export default AccordionMenu;
