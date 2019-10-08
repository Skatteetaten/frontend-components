import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './ArrowLinks.classNames';
import Step from '../StepList/Step';
import PropTypes from 'prop-types';

Step.propTypes = {
  /** Liste med linker **/
  links: PropTypes.arrayOf(PropTypes.object),
  /** Mulighet for å legge inn egen klasse for å overstyre stylingen */
  className: PropTypes.string
};

const ArrowLinks = props => {
  const [styles] = React.useState(getClassNames());
  return (
    <ul>
      {props.links.map((link, index) => (
        <li
          className={classnames(styles.arrowLink, props.className)}
          key={index}
        >
          <a href={link.path} className={classnames(styles.arrowLinkA)}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArrowLinks;
