import { IDialogProps } from '@fluentui/react';
import { Language } from '../utils/Language';
import { ReactNode } from 'react';

export interface DialogProps extends IDialogProps {
  /** doNotLayer prop for den help-Callout */
  doNotLayer?: boolean;
  isModeless?: boolean;
  /** Language selection for what the screen reader reads out. Default is Norwegian Bokmål */
  language?: Language;
  /** Om dialog skal ha mer padding for et luftigere uttrykk */
  layoutStyle?: 'normal' | 'airy' | 'important';
  /** Om det er så mye innhold at det går over flere "sider" (fikser scroll inni dialog på ipad) */
  tabletContentOverflows?: boolean;
  /** Ventevarsel */
  waitAlert?: boolean;
  /** Ventevarsel knapp tekst */
  waitAlertBtnText?: string;
  children?: ReactNode;
}
export type DialogState = {
  isCalloutVisible: boolean;
};
