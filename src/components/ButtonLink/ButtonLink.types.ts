import * as React from 'react';

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** href-lenken */
  path: string;
  /** Tekst på knappen */
  text: string;
  /** Om lenken skal åpnes i nytt vindu (target=blank) */
  openInNew?: boolean;
}
