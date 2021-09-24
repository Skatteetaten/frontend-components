import * as React from 'react';

export interface FooterContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** aria-label */
  ariaLabel?: string;
  brand?: 'SKE' | 'INK' | 'LSO';
}
