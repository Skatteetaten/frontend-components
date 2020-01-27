import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';

export interface TopStripeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** @ignore Får ekstra stil fra toppstripe */
  topStripeStyle?: string;
  ariaLabel?: string;
  text?: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = props => {
  const { topStripeStyle, ariaLabel, text, ...rest } = props;
  const styles = getClassNames();

  return (
    <button
      aria-label={ariaLabel}
      className={styles.topStripeButton}
      style={{ cursor: 'pointer' }}
      {...rest}
    >
      {text || props.children}
    </button>
  );
};
