import * as React from 'react';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  /** Links are normally rendered as a-tags. This makes is possible to use a different markup. */
  renderContent?: (classNames: string) => JSX.Element;
  icon?: string;
  /** If the link should open in an new window (target=blank) */
  openInNew?: boolean;
  /** If the link is an invisible "skip to main content" link */
  skipLink?: boolean;
  path?: string;
  placement?: 'after' | 'before';
  text?: string;
  /** @ignore */
  linkGroup?: boolean;
}
