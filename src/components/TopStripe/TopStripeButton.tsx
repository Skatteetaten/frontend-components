import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './TopStripe.classNames';

export interface TopStripeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** @ignore Får ekstra stil fra toppstripe */
  topStripeStyle?: string;
  className?: string;
  ariaLabel?: string;
  text?: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = (props) => {
  const { topStripeStyle, className, ariaLabel, text, ...rest } = props;

  const styles = getClassNames();

  return (
    <button
      aria-label={ariaLabel}
      className={classnames(styles.topStripeButton, className)}
      style={{ cursor: 'pointer' }}
      {...rest}
    >
      {text || props.children}
    </button>
  );
};
