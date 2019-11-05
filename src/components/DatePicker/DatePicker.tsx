import * as React from 'react';
import moment from 'moment';
import 'moment/locale/nb';

import { css } from '@uifabric/utilities';
import {
  DayOfWeek,
  DatePicker as FabricDatePicker,
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
// @ts-ignore TODO
const DEFAULTFORMATDATE = date => {
  if (date) {
    return moment(date).format(DatePicker.DefaultDateFormat);
  }
  return null;
};
// @ts-ignore TODO
const DEFAULTPARSEDATEFROMSTRING = dateStr => {
  if (dateStr) {
    return moment(dateStr, DatePicker.DefaultDateFormat).toDate();
  }
  return null;
};
interface DatePickerProps extends IDatePickerProps {
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
  calloutFloating: LabelWithCalloutProps['calloutFloating'];
}
interface DatePickerState {
  isCalloutVisible: boolean;
}
/**
 * @visibleName DatePicker (Datovelger)
 */
export default class DatePicker extends React.Component<
  DatePickerProps,
  DatePickerState
> {
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
  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
  }

  _onClick = () => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

  _onDismiss = () => {
    this.setState({
      isCalloutVisible: false
    });
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
      ...props
    } = this.props;
    const classNames = getClassNames(this.props);

    return (
      <div id={id}>
        <LabelWithCallout
          label={label}
          help={help}
          calloutFloating={calloutFloating}
          {...labelCallout}
        />
        <FabricDatePicker
          {...props}
          className={css(classNames, className)}
          // @ts-ignore TODO
          disabled={props.readonlyMode ? 'disabled' : disabled}
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
          inputSize={inputSize}
        >
          {children}
        </FabricDatePicker>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
}

export { DayOfWeek, FirstWeekOfYear };
