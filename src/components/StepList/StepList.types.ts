import React from 'react';

export interface StepListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Klassenavn som kan benyttes for å overstyre css */
  className?: string;
  /** Label som kan settes for hele steplisten */
  ariaLabel?: string;
  children?: React.ReactNode;
}
