import * as React from 'react';
import PropTypes from 'prop-types';

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

//todo string.replace error
interface DatePickerProps extends IDatePickerProps {
  placeholder?: string;
  ariaLabel?: string;
  allowTextInput?: boolean;
  pickerAriaLabel?: string;
  borderless?: boolean;
  readonlyMode?: boolean;
  disabled?: boolean;
  showWeekNumbers?: boolean;
  isRequired?: boolean;
  isMonthPickerVisible?: boolean;
  showMonthPickerAsOverlay?: boolean;
  highlightCurrentMonth?: boolean;
  showGoToToday?: boolean;
  className?: string;
  isRequiredErrorMessage?: string;
  isOutOfBoundsErrorMessage?: string;
  invalidInputErrorMessage?: string;
  errorMessage?: JSX.Element | string;
  id?: string;
  inputSize?: 'normal' | 'large';
}
type DatePickerState = {
  isCalloutVisible: boolean;
};
/**
 * @visibleName DatePicker (Datovelger)
 */
export default class DatePicker extends React.Component<
  DatePickerProps,
  DatePickerState
> {
  static propTypes = {
    /** Placeholder tekst for tekstfelt  */
    placeholder: PropTypes.string,
    /** Label for tekstfeltet til datovelgeren som benyttes av skjermleser  */
    ariaLabel: PropTypes.string,
    /** Om datovelger godtar input som tekst eller ikke */
    allowTextInput: PropTypes.bool,
    /** Label for datovelger popoup som benyttes av skjermlesere */
    pickerAriaLabel: PropTypes.string,
    /** Om inputfelt for datovelger skal ha ramme eller ikke */
    borderless: PropTypes.bool,
    /** Tilstand som kan benyttes når datovelger skal vises i lesemodus */
    readonlyMode: PropTypes.bool,
    /** Viser datofelt som inaktiv */
    disabled: PropTypes.bool,
    /** Viser ukenummer */
    showWeekNumbers: PropTypes.bool,
    /** Om datofelt er påkrevd */
    isRequired: PropTypes.bool,
    /** Om månedsvelger vises ved siden av datovelger */
    isMonthPickerVisible: PropTypes.bool,
    /** Om månedsvelger vises som piler i datovelger */
    showMonthPickerAsOverlay: PropTypes.bool,
    /** Om månedsvelger viser valgt måned som aktiv */
    highlightCurrentMonth: PropTypes.bool,
    /** Om en lenken "I dag" skal vises og som velger dagens dato */
    showGoToToday: PropTypes.bool,
    className: PropTypes.string,
    /** Kan overstyre standard feilmelding hvis felt er påkrevd */
    isRequiredErrorMessage: PropTypes.string,
    /** Kan overstyre standard feilmelding hvis dato er satt utenfor gyldig periode */
    isOutOfBoundsErrorMessage: PropTypes.string,
    /** Kan overstyre standard feilmelding hvis ikke gyldig dato er satt */
    invalidInputErrorMessage: PropTypes.string,
    /** Tilhørende feilmelding */
    errorMessage: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Størrelse på inputfelt som skal benyttes */
    inputSize: PropTypes.oneOf(['normal', 'large'])
  };

  static DefaultDateFormat = DEFAULT_DATE_FORMAT;
  static DefaultStrings = DEFAULT_STRINGS;
  static DefaultFormatDate = date => {
    if (date) {
      return moment(date).format(DatePicker.DefaultDateFormat);
    }
    return null;
  };
  static DefaultParseDateFromString = dateStr => {
    if (dateStr) {
      return moment(dateStr, DatePicker.DefaultDateFormat).toDate();
    }
    return null;
  };

  static defaultProps = {
    allowTextInput: true,
    formatDate: DatePicker.DefaultFormatDate,
    parseDateFromString: DatePicker.DefaultParseDateFromString,
    firstDayOfWeek: DayOfWeek.Monday,
    initialPickerDate: new Date(),
    isRequired: false,
    isMonthPickerVisible: true,
    showMonthPickerAsOverlay: false,
    strings: DatePicker.DefaultStrings,
    highlightCurrentMonth: true,
    pickerAriaLabel: 'Kalender',
    showWeekNumbers: false,
    firstWeekOfYear: 0, // FirstDay = 0, FirstFullWeek = 1, FirstFourDayWeek = 2
    showGoToToday: true,
    dateTimeFormatter: undefined,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
  }

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
      calloutFloating,
      children,
      className,
      errorMessage = null,
      id,
      info,
      inputSize,
      invalidInputErrorMessage,
      isOutOfBoundsErrorMessage,
      isRequiredErrorMessage,
      label,
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
