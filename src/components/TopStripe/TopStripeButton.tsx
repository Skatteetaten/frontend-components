import * as React from 'react';
export interface TopStripeButtonProps {
  /** @ignore Får ekstra stil fra toppstripe */
  topStripeStyle?: string;
  ariaLabel?: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = props => {
  const { topStripeStyle, ariaLabel, ...rest } = props;
  return (
    <button
      aria-label={ariaLabel}
      className={topStripeStyle}
      style={{ cursor: 'pointer' }}
      {...rest}
    >
      {props.children}
    </button>
  );
};
