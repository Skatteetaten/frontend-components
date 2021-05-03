import { IDropdownProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';

export interface DropdownProps extends IDropdownProps {
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** @ignore */
  multiSelect?: IDropdownProps['multiSelect'];
  /** @ignore */
  multiSelectDelimiter?: IDropdownProps['multiSelectDelimiter'];
  /** Brukerspesifisert event for callout */
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Lesemodus. Kan brukes i sammenheng med selectedKey eller defaultSelectedKey for å vise verdi */
  readOnly?: boolean;
}

export interface DropdownState {
  isCalloutVisible: boolean;
}
