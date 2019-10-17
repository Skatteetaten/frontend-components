import * as React from 'react';
import moment from 'moment';
import 'moment/locale/nb';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import Callout from '../Callout/Callout';
import { css } from '@uifabric/utilities';
import {
  DayOfWeek,
  DatePicker as FabricDatePicker,
  IDatePickerProps
} from 'office-ui-fabric-react/lib-commonjs/DatePicker';
import { FirstWeekOfYear } from 'office-ui-fabric-react/lib-commonjs/utilities/dateValues/DateValues';
import ErrorMessage from '../ErrorMessage';
import { isUndefined } from 'util';
import { getClassNames, getLabelClassNames } from './DatePicker.classNames';

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
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
  }
  // @ts-ignore TODO
  _onRenderLabel = props => {
    const { label, info, componentId, calloutFloating } = props;
    const styles = getLabelClassNames(props);
    let { isCalloutVisible } = this.state;

    return (
      <div className={styles.labelArea}>
        <span className={styles.label}>
          {label ? (
            <Label className={styles.labelText} htmlFor={componentId}>
              {label}
            </Label>
          ) : null}
        </span>

        {info && (
          <span
            className={styles.labelIconArea}
            // @ts-ignore TODO
            ref={infoButton => (this._iconButtonElement = infoButton)}
          >
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title="Info"
              ariaLabel="Info"
              onClick={this._onClick}
              className={styles.icon}
            />
          </span>
        )}

        {isCalloutVisible && (
          <Callout
            role="tooltip"
            color={Callout.HELP}
            directionalHint={
              !calloutFloating && !isUndefined(calloutFloating)
                ? Callout.POS_BOTTOM_LEFT
                : Callout.POS_TOP_LEFT
            }
            ariaLabel={'Help information'}
            isBeakVisible={true}
            // @ts-ignore TODO
            target={this._iconButtonElement}
            onClose={this._onDismiss}
          >
            <p>{info}</p>
          </Callout>
        )}
      </div>
    );
  };

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
      // @ts-ignore TODO
      calloutFloating,
      children,
      className,
      errorMessage = null,
      id,
      // @ts-ignore TODO
      info,
      inputSize,
      invalidInputErrorMessage,
      isOutOfBoundsErrorMessage,
      isRequiredErrorMessage,
      label,
      // @ts-ignore TODO
      onRenderLabel,
      ...props
    } = this.props;
    const labelProps = { label, info, calloutFloating };
    const classNames = getClassNames(this.props);

    return (
      <div id={id}>
        {onRenderLabel
          ? onRenderLabel(labelProps)
          : this._onRenderLabel(labelProps)}
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
