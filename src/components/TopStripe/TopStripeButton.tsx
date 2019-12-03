import React from 'react';
export interface TopStripeButtonProps {
  style: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = props => {
  return <button className={props.style}>{props.children}</button>;
};
