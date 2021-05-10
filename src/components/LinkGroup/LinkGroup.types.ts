import * as React from 'react';

export interface Link extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  path: string;
  /** Som standard rendres lenkene Link. Dette gir mulighet for å overstyre implementasjonen. */
  renderContent?: (
    path: string,
    text: string,
    classNames: string,
    htmlAttributes
  ) => JSX.Element;
}

export interface LinkGroupProps {
  links?: Link[];
  className?: string;
}
