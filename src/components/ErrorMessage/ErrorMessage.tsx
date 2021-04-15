import * as React from 'react';
import { getClassNames } from './ErrorMessage.classNames';
import classnames from 'classnames';

export interface ErrorMessageProps {
  /** Feilmelding */
  children: JSX.Element | string;
  showError?: boolean;
  /** Overstyring av stiler */
  className?: string;
}

/**
 * @visibleName ErrorMessage (Feilmelding)
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const errorClassNames = getClassNames();
  const { className } = props;
  const showError = props.showError !== undefined ? props.showError : true;
  if (!showError) {
    return null;
  }
  return (
    <span
      role="alert"
      aria-atomic="true"
      className={classnames(errorClassNames, className)}
    >
      {props.children}
    </span>
  );
};
