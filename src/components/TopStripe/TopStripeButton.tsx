import React from 'react';
export interface TopStripeButtonProps {
  style: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = props => {
  return (
    <button className={props.style} style={{ cursor: 'pointer' }}>
      {props.children}
    </button>
  );
};
