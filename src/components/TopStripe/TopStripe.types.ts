import * as React from 'react';

export interface TopStripeProps {
  children?: JSX.Element | Array<JSX.Element | null | false>;
  className?: string;
  /** @ignore */
  open?: number;
  /** @ignore */
  setOpen?: any;
  /** @ignore */
  closeMenu?: () => void;
}

export interface TopStripeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** @ignore Får ekstra stil fra toppstripe */
  topStripeStyle?: string;
  showOnMobile?: boolean;
  className?: string;
  ariaLabel?: string;
  text?: string;
}
