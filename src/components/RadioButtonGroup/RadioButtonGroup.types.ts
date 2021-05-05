import { IChoiceGroupOption, IChoiceGroupProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';

export interface IRadioButtonGroupOptions extends IChoiceGroupOption {
  description?: string;
}

export interface RadioButtonGroupProps extends IChoiceGroupProps {
  calloutFloating?: boolean;
  /** CSS class */
  className?: string;
  /** Feilmelding */
  errorMessage?: JSX.Element | string;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Horizontal layout */
  horizontal?: boolean;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  options: IRadioButtonGroupOptions[];
  /** Callout warning */
  warning?: JSX.Element | string;
}
