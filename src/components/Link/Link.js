import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './Link.classNames';
import Step from '../StepList/Step';
import PropTypes from 'prop-types';

Step.propTypes = {
  /** Mulighet for å legge inn egen klasse for å overstyre stylingen */
  className: PropTypes.string,
  /** Ikon **/
  icon: PropTypes.string,
  /** Url **/
  path: PropTypes.string,
  /** Lenketekst **/
  text: PropTypes.string
};

const Link = props => {
  const [styles] = React.useState(getClassNames(props));
  return (
    <p className={classnames(styles.iconLink, props.className)}>
      <a href={props.path} className={classnames(styles.iconLinkA)}>
        {props.text}
      </a>
    </p>
  );
};

export default Link;
