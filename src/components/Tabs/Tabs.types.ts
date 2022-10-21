import { IPivotProps } from '@fluentui/react';
import { ReactNode } from 'react';

export interface TabProps extends IPivotProps {
  children?: ReactNode;
  /** Border rundt tabs */
  border?: boolean;
  /** Underline for å fremheve tabs */
  underline?: boolean;
}
