import { LinkProps } from '../Link/Link.types';
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
  /**
   * Brukes for å justere maksbredden til elementene i toppstripen for skjermstørrelser fra 1024px og oppover.
   * @default '100%''
   */
  contentWidth?: string;
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

export interface TopStripeLinkProps extends LinkProps {
  showOnMobile?: boolean;
}
