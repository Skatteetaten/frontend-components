import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getClassNames } from './AccordionMenu.classNames';

const AccordionMenu = ({ className, children }) => {
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

AccordionMenu.propTypes = {
  className: PropTypes.string
};

export default AccordionMenu;
