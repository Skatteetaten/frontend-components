import * as React from 'react';
import i18n, { t } from './../utils/i18n/i18n';
import classnames from 'classnames';
import moment from 'moment';
import 'moment/locale/nb';
import {
  DatePicker as FabricDatePicker,
  DayOfWeek,
  IDatePicker,
  IDatePickerProps,
} from '@fluentui/react';
import { FirstWeekOfYear } from '@fluentui/react';
import { generateId } from '../utils';
import { LabelWithCallout } from '../LabelWithCallout';
import { getClassNames, getCalendarClassNames } from './DatePicker.classNames';
import { DatePickerProps } from './DatePicker.types';

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';
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

/*
 * visibleName DatePicker (Datovelger)
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
    language,
    onCalloutToggle,
    readonlyMode,
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

  React.useEffect(() => {
    setReadOnly(readonlyMode && !editMode);
  }, [editMode, readonlyMode]);

  if (language) {
    i18n.changeLanguage(language);
    moment.locale(language);
  }

  const DEFAULT_STRINGS = {
    months: moment.months(),
    shortMonths: moment.monthsShort(),
    days: moment.weekdays(),
    shortDays: moment.weekdaysShort(),
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
        {...defaultValues}
        {...rest}
        id={inputId}
        ariaLabel={ariaLabel}
        className={classnames(
          getClassNames({ errorMessage, readonlyMode: readOnly, ...rest }),
          className
        )}
        componentRef={(ref) => {
          datePickerRef.current = ref as IDatePicker;
        }}
        calloutProps={{
          className: getCalendarClassNames(props),
        }}
        disabled={readOnly ? true : rest.disabled}
        onBlur={onBlur}
        textField={{
          errorMessage: errorMessage,
        }}
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
    </div>
  );
};
export default DatePicker;
export { DayOfWeek, FirstWeekOfYear };
