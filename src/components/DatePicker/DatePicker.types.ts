import { IDatePickerProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';

import { CalloutProps } from '../Callout/Callout.types';

export interface DatePickerProps extends IDatePickerProps {
  /** @ignore */
  borderless?: IDatePickerProps['borderless'];
  /** Bestemmer om hjelptekst/varseltekst skal legge seg mellom label og tekstfelt eller flytende over innhold */
  calloutFloating?: LabelWithCalloutProps['calloutFloating'];
  /** Benyttes når et readOnly felt skal være redigertbart */
  editable?: boolean;
  /** Tilhørende feilmelding */
  errorMessage?: JSX.Element | string;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Kan overstyre standard feilmelding hvis ikke gyldig dato er satt */
  invalidInputErrorMessage?: string;
  /** Kan overstyre standard feilmelding hvis dato er satt utenfor gyldig periode */
  isOutOfBoundsErrorMessage?: string;
  /** Kan overstyre standard feilmelding hvis felt er påkrevd */
  isRequiredErrorMessage?: string;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelWithCalloutProps?: LabelWithCalloutProps;
  /** Overstyr Datepicker Callout, se CalloutProps komponent */
  datepickerCalloutProps?: CalloutProps;
  /** Språk vist i komponent. Default er norsk bokmål. */
  language?: 'nb' | 'nn' | 'en' | 'se';
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Tilstand som kan benyttes når datovelger skal vises i lesemodus */
  readonlyMode?: boolean;
  /** Om ledetekst for obligatoriske felt skal markeres med stjerne (*) */
  showRequiredMark?: boolean;

  /** @ignore */
  underlined?: IDatePickerProps['underlined'];
}
