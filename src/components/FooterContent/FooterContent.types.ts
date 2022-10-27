import * as React from 'react';

export interface FooterContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  /** aria-label */
  ariaLabel?: string;
  brand?: 'SKE' | 'INK' | 'LSO';
  children: React.ReactNode;
}
