import * as React from 'react';
import i18n, { t } from './../utils/i18n/i18n';
import classnames from 'classnames';
import {
  DatePicker as FabricDatePicker,
  DayOfWeek,
  FirstWeekOfYear,
  IDatePicker,
  IDatePickerProps,
} from '@fluentui/react';
import { generateId } from '../utils';
import { LabelWithCallout } from '../LabelWithCallout';
import { getClassNames, getCalendarClassNames } from './DatePicker.classNames';
import { DatePickerProps } from './DatePicker.types';
import { ErrorMessage } from '../ErrorMessage';

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';
const DEFAULTFORMATDATE = (date: Date | null | undefined): string => {
  return date
    ? Intl.DateTimeFormat('no', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      }).format(date)
    : '';
};

const DEFAULTPARSEDATEFROMSTRING = (date: string): Date | string => {
  try {
    if (date && date.length === 10) {
      const day: number = parseInt(date.substring(0, 2));
      const month: number = parseInt(date.substring(3, 5));
      const year: number = parseInt(date.substring(6, 10));
      const formattedDate: Date = new Date(year, month - 1, day);
      return formattedDate;
    }
  } catch (error) {
    console.log(error);
  }
  return '';
};

const monthsForLocale = (
  localeName = 'no',
  monthFormat: 'long' | 'short' = 'long'
) => {
  const format = new Intl.DateTimeFormat(localeName, { month: monthFormat })
    .format;
  const months: string[] = [];
  for (let month = 0; month < 12; month++) {
    months.push(format(new Date(Date.UTC(2020, month))));
  }
  return months;
};

const weekdaysForLocale = (
  localeName = 'no',
  dayFormat: 'long' | 'short' = 'long'
) => {
  const format = new Intl.DateTimeFormat(localeName, { weekday: dayFormat })
    .format;
  const weekdays: string[] = [];
  for (let day = 0; day < 7; day++) {
    weekdays.push(format(new Date(Date.UTC(2020, 7, day + 2)))); // add 2 days to let the week start on Sunday
  }
  return weekdays;
};

/*
 * visibleName DatePicker (Datovelger)
 */
export const DatePicker: React.FC<DatePickerProps> = (
  props: DatePickerProps
) => {
  const {
    ariaLabel,
    calloutFloating,
    datepickerCalloutProps,
    children,
    className,
    editable,
    errorMessage = undefined,
    id,
    invalidInputErrorMessage,
    isOutOfBoundsErrorMessage,
    isRequired,
    isRequiredErrorMessage,
    help,
    label,
    labelButtonAriaLabel,
    labelWithCalloutProps,
    language,
    onCalloutToggle,
    readonlyMode,
    requiredWithMark = false,
    ...rest
  } = props;

  const defaultValues = {
    allowTextInput: true,
    dateTimeFormatter: undefined,
    disabled: false,
    firstDayOfWeek: language !== 'en' ? DayOfWeek.Monday : DayOfWeek.Sunday,
    firstWeekOfYear: 0, // FirstDay = 0, FirstFullWeek = 1, FirstFourDayWeek = 2
    formatDate: DEFAULTFORMATDATE,
    initialPickerDate: new Date(),
    isMonthPickerVisible: true,
    isRequired: false,
    highlightCurrentMonth: true,
    parseDateFromString: DEFAULTPARSEDATEFROMSTRING,
    pickerAriaLabel: t('datepicker.ariaLabel'),
    showGoToToday: true,
    showMonthPickerAsOverlay: false,
    showWeekNumbers: true,
  };
  const generatedId = generateId();
  const mainId = id ? id : 'datepicker-' + generatedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  const datePickerRef = React.useRef<IDatePicker | null>();
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [readOnly, setReadOnly] = React.useState<boolean | undefined>(
    readonlyMode && !editMode
  );
  const [
    requiredInternalState,
    setRequiredInternalState,
  ] = React.useState<boolean>(false);

  React.useEffect(() => {
    setReadOnly(readonlyMode && !editMode);
  }, [editMode, readonlyMode]);

  const DEFAULT_STRINGS = {
    months: monthsForLocale(language !== 'en' ? 'no' : 'en', 'long'),
    shortMonths: monthsForLocale(language !== 'en' ? 'no' : 'en', 'short'),
    days: weekdaysForLocale(language !== 'en' ? 'no' : 'en', 'long'),
    shortDays: weekdaysForLocale(language !== 'en' ? 'no' : 'en', 'short'),
    goToToday: t('datepicker.goToToday'),
    prevMonthAriaLabel: t('datepicker.prevMonthAriaLabel'),
    nextMonthAriaLabel: t('datepicker.nextMonthAriaLabel'),
    prevYearAriaLabel: t('datepicker.prevYearAriaLabel'),
    nextYearAriaLabel: t('datepicker.nextYearAriaLabel'),
    invalidInputErrorMessage: i18n.t('datepicker.invalidInputErrorMessage', {
      DEFAULT_DATE_FORMAT,
    }),
    /** Automatisk utvide høyde (ved multiline) */
    isOutOfBoundsErrorMessage: 'Datoen er ikke innenfor gyldig periode',
    isRequiredErrorMessage: t('datepicker.isRequiredErrorMessage'),
  };

  const onEdit = () => {
    if (!editMode) {
      datePickerRef.current && datePickerRef.current.focus();
    }
    setEditMode(!editMode);
  };

  const onBlur: IDatePickerProps['onBlur'] = (e) => {
    rest.onBlur && rest.onBlur(e);
    setRequiredInternalState(isRequired || requiredWithMark);
    // TO-DO datepicker er blitt en FunctionComponent. Det er ikke mulig å aksessere intern state på denne måten
    // Filled out feature request here: https://github.com/microsoft/fluentui/issues/19512
    // if (editMode && !datePickerRef.current?.state.isDatePickerShown) {
    //   setEditMode(!editMode);
    // }
  };

  return (
    <div id={id}>
      <LabelWithCallout
        id={labelId}
        inputId={inputId + '-label'}
        label={label}
        requiredMark={requiredWithMark}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        calloutFloating={calloutFloating}
        onCalloutToggle={onCalloutToggle}
        editable={editable}
        editFunction={onEdit}
        readOnly={readonlyMode}
        calloutProps={{
          ...labelWithCalloutProps?.calloutProps,
        }}
        {...labelWithCalloutProps}
      />

      <FabricDatePicker
        {...defaultValues}
        {...rest}
        id={inputId}
        ariaLabel={ariaLabel}
        className={classnames(
          getClassNames({ errorMessage, readonlyMode: readOnly, ...rest }),
          className
        )}
        isRequired={requiredInternalState}
        componentRef={(ref) => {
          datePickerRef.current = ref as IDatePicker;
        }}
        calloutProps={{
          ...datepickerCalloutProps,
          className: classnames(
            getCalendarClassNames(props),
            datepickerCalloutProps?.className
          ),
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
            : DEFAULT_STRINGS.invalidInputErrorMessage,
        }}
      >
        {children}
      </FabricDatePicker>
      {errorMessage && typeof errorMessage === 'string' ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        errorMessage
      )}
    </div>
  );
};
export default DatePicker;
export { DayOfWeek, FirstWeekOfYear };
