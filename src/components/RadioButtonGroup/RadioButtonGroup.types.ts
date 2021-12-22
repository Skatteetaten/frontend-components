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
  /** Om merke for obligatorisk felt skal vises */
  required?: boolean;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Størrelse på feltnavn over radioknappene */
  labelSize?: 'small' | 'normal' | 'large';
  /** Overstyr label, se LabelWithCallout komponent */
  labelWithCalloutProps?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  options: IRadioButtonGroupOptions[];
  /** Callout warning */
  warning?: JSX.Element | string;
}
