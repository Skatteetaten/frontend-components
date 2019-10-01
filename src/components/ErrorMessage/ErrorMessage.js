import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@uifabric/utilities';
import { getClassNames } from './ErrorMessage.classNames';

const ErrorMessage = props => {
  const errorClassNames = getClassNames(props);
  const showError = props.showError !== undefined ? props.showError : true;
  if (!showError) return null;
  return (
    <span role="alert" className={css(errorClassNames)}>
      {props.children}
    </span>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.any,
  showError: PropTypes.bool
};
