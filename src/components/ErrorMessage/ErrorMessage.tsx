import { css } from '@uifabric/utilities';
import * as React from 'react';
import { getClassNames } from './ErrorMessage.classNames';

interface ErrorMessageProps {
  /** Feilmelding */
  children: JSX.Element | string;
  showError?: boolean;
  /** aria-label */
  ariaLabel?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  const errorClassNames = getClassNames();
  const { ariaLabel = 'ErrorMessage' } = props;
  const showError = props.showError !== undefined ? props.showError : true;
  if (!showError) {
    return null;
  }
  return (
    <span role="alert" aria-label={ariaLabel} className={css(errorClassNames)}>
      {props.children}
    </span>
  );
};

export default ErrorMessage;
