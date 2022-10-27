import { ICalloutProps } from '@fluentui/react';
import { ReactNode } from 'react';

export enum CalloutColor {
  HELP = 'ske-color-green-10',
  INFO = 'ske-color-brown-10',
  ERROR = 'ske-color-burgundy-10',
  WARNING = 'ske-color-brown-10',
  BASIC = 'ske-color-white-100',
}
export interface CalloutProps extends Omit<ICalloutProps, 'backgroundColor'> {
  /** Determine if the callout window will close automaticly when the area outside the window is clicked */
  autoDismiss?: boolean;
  /** There are four colors; lightGreen, beige, lightPink or white */
  color?: CalloutColor;
  /** Adds border around the callout box */
  border?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export interface CalloutState {
  isCalloutVisible: boolean;
  target: Element | undefined;
  widthBtnLabel: string;
}
