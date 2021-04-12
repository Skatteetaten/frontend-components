import * as React from 'react';
import { getClassNames } from './ErrorMessage.classNames';
import classnames from 'classnames';

export interface ErrorMessageProps {
  /** Feilmelding */
  children: JSX.Element | string;
  showError?: boolean;
  /** @deprecated Do not use */
  ariaLabel?: string;
  /** Overstyring av stiler */
  className?: string;
}

/**
 * @visibleName ErrorMessage (Feilmelding)
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const errorClassNames = getClassNames();
  const { ariaLabel, className } = props;
  const showError = props.showError !== undefined ? props.showError : true;
  if (!showError) {
    return null;
  }
  return (
    <span
      role="alert"
      aria-atomic="true"
      aria-label={ariaLabel}
      className={classnames(errorClassNames, className)}
    >
      {props.children}
    </span>
  );
};
