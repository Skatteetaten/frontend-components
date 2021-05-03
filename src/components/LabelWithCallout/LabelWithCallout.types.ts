import * as React from 'react';

export enum calloutState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export interface LabelWithCalloutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** aria-label */
  ariaLabel?: string;
  /** If the Callout shoud close if the user clicks the area outside it.  */
  autoDismiss?: boolean;
  /** Draws a border round the callout */
  border?: boolean;
  /** aria-label for help/warning button */
  buttonAriaLabel?: string;
  /** Title for help/warning button */
  buttonTitle?: string;
  /** If the Callout should float over page content */
  calloutFloating?: boolean;
  /** For overriding styles */
  className?: string;
  editable?: boolean;
  editFunction?: () => void;
  help?: string | JSX.Element;
  id?: any;
  /** Used for connecting to an input field */
  inputId?: any;
  /** When placed inside a fieldset, and the label element should be renderes as a legend element instead. */
  inFieldset?: boolean;
  inputSize?: 'small' | 'normal' | 'large';
  label?: string;
  /** Event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  onRenderLabel?: any;
  readOnly?: boolean;
  warning?: string | JSX.Element | undefined;
}
