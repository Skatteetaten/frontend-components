import { IDropdownProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';
import { CalloutProps } from '../Callout/Callout.types';
import { ReactNode } from 'react';

export interface DropdownProps extends IDropdownProps {
  children?: ReactNode;
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelWithCalloutProps?: LabelWithCalloutProps;
  /** @ignore */
  multiSelect?: IDropdownProps['multiSelect'];
  /** @ignore */
  multiSelectDelimiter?: IDropdownProps['multiSelectDelimiter'];
  /** Brukerspesifisert event for callout */
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Overstyr Datepicker Callout, se CalloutProps komponent */
  calloutProps?: CalloutProps;
  /** Lesemodus. Kan brukes i sammenheng med selectedKey eller defaultSelectedKey for å vise verdi */
  readOnly?: boolean;
  /** Om feltet er obligatorisk og skal markeres med stjerne (*) */
  requiredWithMark?: boolean;
}

export interface DropdownState {
  isCalloutVisible: boolean;
}
