import { IComboBoxProps, ICalloutProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';

export interface ComboBoxProps extends IComboBoxProps {
  /** Egendefinert feilmelding */
  errorMessage?: IComboBoxProps['errorMessage'];
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelWithCalloutProps?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout */
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** CalloutProps som sendes videre ned til Callout */
  calloutProps?: ICalloutProps;
  /** Lesemodus. Kan brukes i sammenheng med text eller defaultSelectedKey for å vise verdi */
  readOnly?: boolean;
}
