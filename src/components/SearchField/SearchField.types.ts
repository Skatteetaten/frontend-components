import { IDropdownOption, ISearchBoxProps } from '@fluentui/react';
import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';
import { Language } from '../utils/Language';

export interface SearchFieldProps extends ISearchBoxProps {
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Descriptive label for SearchField */
  label?: string;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelWithCalloutProps?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Liste med mulige søkeresultat fra søk */
  options?: Array<IDropdownOption>;
  /** Størrelsen på søkefeltet */
  searchFieldSize?: 'standard' | 'large';
  /** @ignore */
  underlined?: ISearchBoxProps['underlined'];
  /**påkalt etter bruker valger et alternativ*/
  onSelected?: (option: IDropdownOption) => void;
  /** Language selection for what the screen reader reads out. Default is Norwegian Bokmål */
  language?: Language;
  /** Begrens antall viste søkeresultat */
  limit?: number;
  /** Tillater tastatursnarvei på søk */
  keyboardShortcut?: boolean;
  /** Hvilke taster som fungerer for snarvei */
  searchShortcutKeys?: string;
  /** Gjør søkeikonet klikkbart, trenger samme kode som onSearch */
  onSearchIcon?: (newValue: any) => void;
  /** Legg til egen mouseover tittel på søkeikonet */
  searchIconTitle?: string;
}
