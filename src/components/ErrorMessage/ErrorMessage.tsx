import * as React from 'react';
import { getClassNames } from './ErrorMessage.classNames';
import classnames from 'classnames';

interface ErrorMessageProps {
  /** Feilmelding */
  children: JSX.Element | string;
  showError?: boolean;
  /** aria-label */
  ariaLabel?: string;
  /** Overstyring av stiler */
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  const errorClassNames = getClassNames();
  const { ariaLabel = 'ErrorMessage', className } = props;
  const showError = props.showError !== undefined ? props.showError : true;
  if (!showError) {
    return null;
  }
  return (
    <span
      role="alert"
      aria-label={ariaLabel}
      className={classnames(errorClassNames, className)}
    >
      {props.children}
    </span>
  );
};

export default ErrorMessage;
