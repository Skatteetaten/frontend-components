import * as React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import 'moment/locale/nb';
import {
  DatePicker as FabricDatePicker,
  DayOfWeek,
  IDatePickerProps
} from 'office-ui-fabric-react/lib-commonjs/DatePicker';
import { FirstWeekOfYear } from 'office-ui-fabric-react/lib-commonjs/utilities/dateValues/DateValues';
import ErrorMessage from '../ErrorMessage';
import { getClassNames } from './DatePicker.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';
import { IDatePicker } from 'office-ui-fabric-react';
import { useId } from '@reach/auto-id';

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
const DEFAULTFORMATDATE = (date: Date | null | undefined): string => {
  if (date) {
    return moment(date).format(DEFAULT_DATE_FORMAT);
  }
  return '';
};

const DEFAULTPARSEDATEFROMSTRING = (date: string): Date | null => {
  if (date) {
    return moment(date, DEFAULT_DATE_FORMAT).toDate();
  }
  return null;
};
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
  labelCallout?: LabelWithCalloutProps;
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Tilstand som kan benyttes når datovelger skal vises i lesemodus */
  readonlyMode?: boolean;
  /** @ignore */
  underlined?: IDatePickerProps['underlined'];
}
/**
 * @visibleName DatePicker (Datovelger)
 */
export const DatePicker: React.FC<DatePickerProps> = (
  props: DatePickerProps
) => {
  const {
    ariaLabel,
    calloutFloating,
    children,
    className,
    editable,
    errorMessage = undefined,
    id,
    invalidInputErrorMessage,
    isOutOfBoundsErrorMessage,
    isRequiredErrorMessage,
    help,
    label,
    labelButtonAriaLabel,
    labelCallout,
    labelWithCalloutAutoDismiss,
    onCalloutToggle,
    readonlyMode,
    ...rest
  } = props;
  const defaultValues = {
    allowTextInput: true,
    dateTimeFormatter: undefined,
    disabled: false,
    firstDayOfWeek: DayOfWeek.Monday,
    firstWeekOfYear: 0, // FirstDay = 0, FirstFullWeek = 1, FirstFourDayWeek = 2
    formatDate: DEFAULTFORMATDATE,
    initialPickerDate: new Date(),
    isMonthPickerVisible: true,
    isRequired: false,
    highlightCurrentMonth: true,
    parseDateFromString: DEFAULTPARSEDATEFROMSTRING,
    pickerAriaLabel: 'Kalender',
    showGoToToday: true,
    showMonthPickerAsOverlay: false,
    showWeekNumbers: true
  };
  const genratedId = useId(id);
  const mainId = id ? id : 'datepicker-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  const datePicker = React.useRef<IDatePicker | null>();
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [readOnly, setReadOnly] = React.useState<boolean | undefined>(
    readonlyMode && !editMode
  );

  React.useEffect(() => {
    setReadOnly(readonlyMode && !editMode);
  }, [editMode, readonlyMode]);

  const onEdit = () => {
    datePicker.current && datePicker.current.focus();
    setEditMode(true);
  };

  const onBlur: IDatePickerProps['onBlur'] = e => {
    rest.onBlur && rest.onBlur(e);
    if (editMode) {
      setEditMode(!editMode);
    }
  };

  return (
    <div id={id}>
      <LabelWithCallout
        id={labelId}
        inputId={inputId}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        calloutFloating={calloutFloating}
        autoDismiss={labelWithCalloutAutoDismiss}
        onCalloutToggle={onCalloutToggle}
        editable={editable}
        editFunction={onEdit}
        readOnly={readonlyMode}
        {...labelCallout}
      />
      <FabricDatePicker
        {...rest}
        {...defaultValues}
        id={inputId}
        ariaLabel={ariaLabel ? ariaLabel : label}
        className={classnames(
          getClassNames({ errorMessage, readonlyMode: readOnly, ...rest }),
          className
        )}
        componentRef={ref => {
          datePicker.current = ref;
        }}
        disabled={readOnly ? true : rest.disabled}
        onBlur={onBlur}
        strings={{
          ...DEFAULT_STRINGS,
          isRequiredErrorMessage: isRequiredErrorMessage
            ? isRequiredErrorMessage
            : DEFAULT_STRINGS.isRequiredErrorMessage,
          isOutOfBoundsErrorMessage: isOutOfBoundsErrorMessage
            ? isOutOfBoundsErrorMessage
            : DEFAULT_STRINGS.isOutOfBoundsErrorMessage,
          invalidInputErrorMessage: invalidInputErrorMessage
            ? invalidInputErrorMessage
            : DEFAULT_STRINGS.invalidInputErrorMessage
        }}
      >
        {children}
      </FabricDatePicker>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
export default DatePicker;
export { DayOfWeek, FirstWeekOfYear };
