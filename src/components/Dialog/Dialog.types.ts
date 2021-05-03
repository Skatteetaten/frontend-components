import { IDialogProps } from '@fluentui/react';

export interface DialogProps extends IDialogProps {
  /** Om dialog skal ha mer padding for et luftigere uttrykk */
  layoutStyle?: 'normal' | 'airy' | 'important';
  /** Om det er så mye innhold at det går over flere "sider" (fikser scroll inni dialog på ipad) */
  tabletContentOverflows?: boolean;
  isModeless?: boolean;
}
export type DialogState = {
  isCalloutVisible: boolean;
};
