import * as React from 'react';
import moment from 'moment';
import 'moment/locale/nb';

import { css } from '@uifabric/utilities';
import {
  DatePicker as FabricDatePicker,
  DayOfWeek,
  IDatePickerProps
} from 'office-ui-fabric-react/lib-commonjs/DatePicker';
import { FirstWeekOfYear } from 'office-ui-fabric-react/lib-commonjs/utilities/dateValues/DateValues';
import ErrorMessage from '../ErrorMessage';
import { getClassNames } from './DatePicker.classNames';
import LabelWithCallout from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';
const DEFAULT_STRINGS = {
  months: moment.months(),
  shortMonths: moment.monthsShort(),
  days: moment.weekdays(),
  shortDays: moment.weekdaysShort(),

  goToToday: 'I dag',
  prevMonthAriaLabel: 'Gå til forrige måned',
  nextMonthAriaLabel: 'Gå til neste måned',
  prevYearAriaLabel: 'Gå til forrige år',
  nextYearAriaLabel: 'Gå til neste år',
  invalidInputErrorMessage: `Ikke en gyldig dato. (format: ${DEFAULT_DATE_FORMAT})`,
  /** Automatisk utvide høyde (ved multiline) */
  isOutOfBoundsErrorMessage: 'Datoen er ikke innenfor gyldig periode',
  isRequiredErrorMessage: 'Dette feltet er påkrevd'
};
const DEFAULTFORMATDATE = (date: Date | null | undefined): String => {
  if (date) {
    return moment(date).format(DatePicker.DefaultDateFormat);
  }
  return '';
};

const DEFAULTPARSEDATEFROMSTRING = (
  date: Date | null | undefined
): Date | null => {
  if (date) {
    return moment(date, DatePicker.DefaultDateFormat).toDate();
  }
  return null;
};
export interface DatePickerProps extends IDatePickerProps {
  /** Tilstand som kan benyttes når datovelger skal vises i lesemodus */
  readonlyMode?: boolean;
  /** Kan overstyre standard feilmelding hvis felt er påkrevd */
  isRequiredErrorMessage?: string;
  /** Kan overstyre standard feilmelding hvis dato er satt utenfor gyldig periode */
  isOutOfBoundsErrorMessage?: string;
  /** Kan overstyre standard feilmelding hvis ikke gyldig dato er satt */
  invalidInputErrorMessage?: string;
  /** Tilhørende feilmelding */
  errorMessage?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  calloutFloating?: LabelWithCalloutProps['calloutFloating'];
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: () => void;
  /** @ignore */
  borderless?: IDatePickerProps['borderless'];
  /** @ignore */
  underlined?: IDatePickerProps['underlined'];
}
/**
 * @visibleName DatePicker (Datovelger)
 */
export default class DatePicker extends React.Component<DatePickerProps> {
  static DefaultDateFormat = DEFAULT_DATE_FORMAT;
  static DefaultStrings = DEFAULT_STRINGS;
  static DefaultFormatDate = DEFAULTFORMATDATE;
  static DefaultParseDateFromString = DEFAULTPARSEDATEFROMSTRING;

  static defaultProps = {
    allowTextInput: true,
    dateTimeFormatter: undefined,
    disabled: false,
    firstDayOfWeek: DayOfWeek.Monday,
    firstWeekOfYear: 0, // FirstDay = 0, FirstFullWeek = 1, FirstFourDayWeek = 2
    formatDate: DatePicker.DefaultFormatDate,
    highlightCurrentMonth: true,
    initialPickerDate: new Date(),
    isMonthPickerVisible: true,
    isRequired: false,
    parseDateFromString: DatePicker.DefaultParseDateFromString,
    pickerAriaLabel: 'Kalender',
    showGoToToday: true,
    showMonthPickerAsOverlay: false,
    showWeekNumbers: false,
    strings: DatePicker.DefaultStrings
  };

  render() {
    const {
      disabled,
      calloutFloating,
      children,
      className,
      errorMessage = null,
      id,
      help,
      inputSize,
      invalidInputErrorMessage,
      isOutOfBoundsErrorMessage,
      isRequiredErrorMessage,
      label,
      labelCallout,
      onCalloutToggle,
      ...rest
    } = this.props;
    const classNames = getClassNames(this.props);

    return (
      <div id={id}>
        <LabelWithCallout
          label={label}
          help={help}
          calloutFloating={calloutFloating}
          onCalloutToggle={onCalloutToggle}
          {...labelCallout}
        />
        <FabricDatePicker
          {...rest}
          className={css(classNames, className)}
          disabled={rest.readonlyMode ? true : disabled}
          strings={{
            ...DatePicker.DefaultStrings,
            isRequiredErrorMessage: isRequiredErrorMessage
              ? isRequiredErrorMessage
              : DatePicker.DefaultStrings.isRequiredErrorMessage,
            isOutOfBoundsErrorMessage: isOutOfBoundsErrorMessage
              ? isOutOfBoundsErrorMessage
              : DatePicker.DefaultStrings.isOutOfBoundsErrorMessage,
            invalidInputErrorMessage: invalidInputErrorMessage
              ? invalidInputErrorMessage
              : DatePicker.DefaultStrings.invalidInputErrorMessage
          }}
        >
          {children}
        </FabricDatePicker>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
}

export { DayOfWeek, FirstWeekOfYear };
