import { IMessageBarProps, MessageBarType } from '@fluentui/react';
import * as React from 'react';

export interface MessageBarProps extends IMessageBarProps {
  type?:
    | MessageBarType.success
    | MessageBarType.blocked
    | MessageBarType.severeWarning
    | MessageBarType.error
    | MessageBarType.info
    | MessageBarType.warning;
  size?: 'default' | 'large';
  /** Antall sekunder som boksen skal være synlig */
  duration?: number;
  /** (resetDuration: () => void, setShowAlways: () => void) => JSXElement
   */
  onRenderAfterDuration?: (...args: any[]) => any;
  /** Callback for klikk på knappen */
  onClick?: (...args: any[]) => any;
  children?: React.ReactNode;
}

export interface MessageBarState extends React.HTMLAttributes<HTMLDivElement> {
  hideMessageBar: boolean;
  showMessage: boolean;
}
