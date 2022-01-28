import Link from '../Link';
import * as React from 'react';
import { TopStripeLinkProps } from './TopStripe.types';
import { UseScreen } from '../utils';

export const TopStripeLink: React.FC<TopStripeLinkProps> = (props) => {
  const { showOnMobile = false, ...rest } = props;
  const screenSize = UseScreen();

  if (screenSize.sm && !showOnMobile) {
    return null;
  }
  return <Link {...rest} />;
};
