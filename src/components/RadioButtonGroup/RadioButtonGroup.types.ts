import { IChoiceGroupOption, IChoiceGroupProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';
import { ReactNode } from 'react';

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
  /** Om feltet er obligatorisk og skal markeres med stjerne (*) */
  requiredWithMark?: boolean;
  children?: ReactNode;
}
