import * as React from 'react';

export enum ChipType {
  WARNING = 'lightPink',
  OK = 'lightGreen',
  NEUTRAL = 'beige',
}

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bruksområde som avgir hvilken farge chip-en får */
  type?: ChipType;
  /** Størrelse på Chip */
  size?: 'standard' | 'large';
  /** aria-label */
  ariaLabel?: string;
  /** Overstyring av stiler */
  className?: string;
}
