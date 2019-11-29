import React from 'react';
export interface TopStripeMenuItemProps {}

export const TopStripeMenuItem: React.FC<TopStripeMenuItemProps> = props => {
  const { children } = props;
  return <li>{children}</li>;
};
