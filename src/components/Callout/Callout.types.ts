import { ICalloutProps } from '@fluentui/react';

export enum CalloutColor {
  HELP = 'green10',
  INFO = 'brown10',
  ERROR = 'burgundy10',
  WARNING = 'brown10',
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
}

export interface CalloutState {
  isCalloutVisible: boolean;
  target: Element | undefined;
  widthBtnLabel: string;
}
