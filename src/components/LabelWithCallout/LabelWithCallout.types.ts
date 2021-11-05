import * as React from 'react';

import { CalloutProps } from '../Callout/Callout.types';

export enum calloutState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export interface LabelWithCalloutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Id til legend/label */
  id?: string;
  /** Used for connecting to an input field */
  inputId?: string;
  /** Text to be shown in label */
  label?: string;
  /** aria-label */
  ariaLabel?: string;
  /** aria-label for help/warning button */
  buttonAriaLabel?: string;
  /** Title for help/warning button */
  buttonTitle?: string;
  /** If the Callout should float over page content */
  calloutFloating?: boolean;
  /** Custom classNames for å overskrive styling */
  customClassNames?: {
    wrapper?: string;
    label?: string;
    legend?: string;
    helpicon?: string;
    helpPragraph?: string;
    warningicon?: string;
    warningPragraph?: string;
    editicon?: string;
    readonlyarea?: string;
    callout?: string;
  };
  editable?: boolean;
  editFunction?: () => void;
  help?: string | JSX.Element;
  /** When placed inside a fieldset, and the label element should be renderes as a legend element instead. */
  inFieldset?: boolean;
  inputSize?: 'small' | 'normal' | 'large';
  /** Event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** CalloutProps som sendes videre ned til Callout */
  calloutProps?: CalloutProps;
  onRenderLabel?: any;
  readOnly?: boolean;
  warning?: string | JSX.Element;
}
