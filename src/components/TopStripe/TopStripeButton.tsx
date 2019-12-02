import React from 'react';
import Icon from '../Icon';

export interface TopStripeButtonProps {}

export const TopStripeButton: React.FC<TopStripeButtonProps> = props => {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
};
