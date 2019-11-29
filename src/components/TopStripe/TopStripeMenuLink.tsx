import React from 'react';
import Link, { LinkProps } from '../Link';
export interface TopStripeMenuLinkProps extends LinkProps {}

export const TopStripeMenuLink: React.FC<TopStripeMenuLinkProps> = props => {
  return (
    <li>
      <Link {...props} />
    </li>
  );
};
