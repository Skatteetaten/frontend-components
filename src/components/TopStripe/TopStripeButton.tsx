import * as React from 'react';
export interface TopStripeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** @ignore Får ekstra stil fra toppstripe */
  topStripeStyle?: string;
  ariaLabel?: string;
  text?: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = props => {
  const { topStripeStyle, ariaLabel, text, ...rest } = props;
  return (
    <button
      aria-label={ariaLabel}
      className={topStripeStyle}
      style={{ cursor: 'pointer' }}
      {...rest}
    >
      {text || props.children}
    </button>
  );
};
