import { ITextFieldProps } from '@fluentui/react';
import { calloutState } from '../LabelWithCallout';

export interface TextFieldProps extends ITextFieldProps {
  /** Benyttes når teksten for et readOnly tekstfelt skal fremheves  */
  boldText?: boolean;
  /** Bestemmer om hjelptekst/varseltekst skal legge seg mellom label og tekstfelt eller flytende over innhold */
  calloutFloating?: boolean;
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Bestemmer om ett readOnly felt skal være alltid redigerbart om det er tomt */
  editableWhenEmpty?: boolean;
  /** Benyttes når et readOnly felt skal være redigertbart  */
  editable?: boolean;
  /** Tilhørende hjelpetekst */
  help?: JSX.Element | string;
  id?: string;
  /** Størrelse på tekstfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Setter inputmode (html 5) på tekstefeltet */
  inputMode?: ITextFieldProps['inputMode'];
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Størrelse på label */
  labelSize?: 'small' | 'large';
  /** Tekst inni feltet som vises før man skriver */
  placeholder?: string;
  /** Tilhørende varseltekst */
  warning?: JSX.Element | string;
  /** Antall rader som skal vises i feltet når multiline er satt */
  rows?: number;
  /** @ignore */
  borderless?: ITextFieldProps['borderless'];
  /** @ignore */
  underlined?: ITextFieldProps['underlined'];
  /** @ignore */
  editMode?: boolean;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
}