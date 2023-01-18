import * as React from 'react';
import { t } from '../utils';
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
import {
  DEFAULTFORMATDATE,
  DEFAULTPARSEDATEFROMSTRING,
  monthsForLocale,
  weekdaysForLocale,
} from './utils';

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
    pickerAriaLabel: t('datepicker.kalender'),
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

  const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';

  const monthsNynorsk = [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
  ];

  const shortMonthsNynorsk = [
    'jan.',
    'feb.',
    'mars',
    'apr.',
    'mai',
    'juni',
    'juli',
    'aug.',
    'sep.',
    'okt.',
    'nov.',
    'des.',
  ];

  const daysNynorsk = [
    'søndag',
    'måndag',
    'tysdag',
    'onsdag',
    'torsdag',
    'fredag',
    'laurdag',
  ];

  const shortDaysNynorsk = ['sø.', 'må.', 'ty.', 'on.', 'to.', 'fr.', 'la.'];

  const monthsSamisk = [
    'Ođđajagemánnu',
    'Guovvamánnu',
    'Njukčamánnu',
    'Cuoŋománnu',
    'Miessemánnu',
    'Geassemánnu',
    'Suoidnemánnu',
    'Borgemánnu',
    'Čakčamánnu',
    'Golggotmánnu',
    'Skábmamánnu',
    'Juovlamánnu',
  ];

  const shortMonthsSamisk = [
    'Ođđ',
    'Guo',
    'Nju',
    'Cuo',
    'Mie',
    'Gea',
    'Suo',
    'Bor',
    'Čak',
    'Gol',
    'Ská',
    'Juo',
  ];

  const daysSamisk = [
    'Sotnabeaivi',
    'Mánnodat',
    'Disdat',
    'Gaskavahkku',
    'Duorastat',
    'Bearjadat',
    'Lávvardat',
  ];

  const shortDaysSamisk = ['Sot', 'Mán', 'Dis', 'Gas', 'Duo', 'Bea', 'Láv'];

  const locale = language != undefined ? language : 'no';
  const isLocaleBokmalOrEnglish =
    locale === 'no' || locale === 'nb' || locale === 'en';
  const isLocaleNynorsk = language === 'nn';

  const DEFAULT_STRINGS = {
    months: isLocaleBokmalOrEnglish
      ? monthsForLocale(language, 'long')
      : isLocaleNynorsk
      ? monthsNynorsk
      : monthsSamisk,
    shortMonths: isLocaleBokmalOrEnglish
      ? monthsForLocale(language, 'short')
      : isLocaleNynorsk
      ? shortMonthsNynorsk
      : shortMonthsSamisk,
    days: isLocaleBokmalOrEnglish
      ? weekdaysForLocale(language, 'long')
      : isLocaleNynorsk
      ? daysNynorsk
      : daysSamisk,
    shortDays: isLocaleBokmalOrEnglish
      ? weekdaysForLocale(language, 'short')
      : isLocaleNynorsk
      ? shortDaysNynorsk
      : shortDaysSamisk,
    goToToday: t('datepicker.goToToday')!,
    prevMonthAriaLabel: t('datepicker.prevMonthAriaLabel'),
    nextMonthAriaLabel: t('datepicker.nextMonthAriaLabel'),
    prevYearAriaLabel: t('datepicker.prevYearAriaLabel'),
    nextYearAriaLabel: t('datepicker.nextYearAriaLabel'),
    invalidInputErrorMessage: t('datepicker.invalidInputErrorMessage', {
      DEFAULT_DATE_FORMAT,
    }),
    /** Automatisk utvide høyde (ved multiline) */
    isOutOfBoundsErrorMessage: t('datepicker.isOutOfBoundsErrorMessage'),
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
