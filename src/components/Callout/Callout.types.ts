import { ICalloutProps } from '@fluentui/react';

export enum CalloutColor {
  HELP = 'lightGreen',
  INFO = 'beige',
  ERROR = 'lightPink',
  WARNING = 'beige',
  BASIC = 'white',
}
export interface CalloutProps extends Omit<ICalloutProps, 'backgroundColor'> {
  /** Determine if the callout window will close automaticly when the area outside the window is clicked */
  autoDismiss?: boolean;
  /** There are four colors; lightGreen, beige, lightPink or white */
  color?: CalloutColor;
  /** Adds border around the callout box */
  border?: boolean;
  onClose?: () => void;
  /** dir */
}

export interface CalloutState {
  isCalloutVisible: boolean;
}
