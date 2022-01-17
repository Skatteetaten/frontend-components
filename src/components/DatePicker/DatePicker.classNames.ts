import { mergeStyles } from '@fluentui/merge-styles';
import { SkeIcons } from '../utils';
import { DatePickerProps } from './DatePicker.types';
import designtokenFonts from '../utils/designtokens/_fontSizes.json';
import designtokenColors from '../utils/designtokens/_colors.json';

const errorIcon = "'" + SkeIcons.icons.Error + "'";

function getFieldTypeStyles(props: DatePickerProps) {
  if (props.inputSize === 'large') {
    return {
      '& .ms-TextField-fieldGroup': {
        borderWidth: '2px',
        height: '46px',
        margin: '5px 0',
        fontSize: designtokenFonts['ske-font-size-l'],
      },
      '& input.ms-TextField-field': {
        fontSize: `${designtokenFonts['ske-font-size-l']} !important`,
      },
      'i.ms-DatePicker-event--without-label': {
        marginTop: '6px',
        fontSize: designtokenFonts['ske-font-size-xl'],
        color: designtokenColors['ske-color-interactive'],
      },
    };
  } else {
    return {
      '& .ms-TextField-fieldGroup': {
        fontSize: designtokenFonts['ske-font-size-s'],
      },
      'i.ms-DatePicker-event--without-label': {
        color: designtokenColors['ske-color-interactive'],
      },
    };
  }
}

function getTextFieldStyles(props: DatePickerProps) {
  if (props.readonlyMode === true) {
    return {
      '& .ms-TextField-fieldGroup': {
        border: 'none',
      },
      '& .ms-TextField-fieldGroup:focus .ms-TextField-field': {
        cursor: 'not-allowed',
      },
      '& .ms-TextField-field': {
        paddingLeft: 0,
        pointerEvents: 'none',
      },
    };
  } else {
    return {};
  }
}

export const getCalendarClassNames = (props: DatePickerProps) => {
  return mergeStyles({
    displayName: 'SkeCalendar',
    color: designtokenColors['ske-color-black100'],

    selectors: {
      '& .ms-DatePicker-monthOption:hover': {
        color: `${designtokenColors['ske-color-black100']} !important`,
      },
      '& .ms-DatePicker-goToday': {
        right: '10px',
      },
      '& .ms-DatePicker-day--highlighted': {
        backgroundColor: designtokenColors['ske-color-interactive-light'],
        color: designtokenColors['ske-color-black100'],
      },
      '& .ms-DatePicker-day--today': {
        backgroundColor: designtokenColors['ske-color-interactive-light'],
        color: designtokenColors['ske-color-black100'],
      },
    },
  });
};

export const getClassNames = (props: DatePickerProps) => {
  const { errorMessage, readonlyMode } = props;
  const color = errorMessage
    ? designtokenColors['ske-color-status-error']
    : designtokenColors['ske-color-interactive'];
  return mergeStyles({
    displayName: 'SkeDatePicker',
    outline: 'transparent',
    position: 'relative',
    selectors: {
      '&& .ms-TextField-fieldGroup': {
        borderRadius: '0px',
        borderColor: designtokenColors['ske-color-black100'],
      },
      '& .ms-TextField-field': {
        fontSize: designtokenFonts['ske-font-size-m'],
      },
      '&& .ms-TextField-fieldGroup.ms-TextField-fieldGroup:after': {
        content: '""',
      },
      '& .ms-TextField.is-disabled': !readonlyMode && {
        borderColor: designtokenColors['ske-color-grey30'],
        borderStyle: 'solid',
        borderWidth: '0px',
        backgroundColor: designtokenColors['ske-color-grey5'],
      },
      '& .ms-TextField.is-disabled i': {
        color: designtokenColors['ske-color-grey50'],
      },
      '& .ms-TextField.is-disabled input': {
        padding: '8px',
        cursor: 'not-allowed',
        color: designtokenColors['ske-color-black100'],
      },
      '& .ms-TextField.is-disabled .ms-TextField-fieldGroup': {
        backgroundColor: readonlyMode ? 'transparent' : undefined,
        borderColor: designtokenColors['ske-color-grey30'],
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      '& .ms-TextField .ms-TextField-fieldGroup .ms-TextField-field': readonlyMode && {
        fontWeight: designtokenFonts['ske-font-weight-bold'],
        fontSize: designtokenFonts['ske-font-size-medium'],
        color: designtokenColors['ske-color-black100'],
      },
      '.ms-TextField i': readonlyMode && {
        display: 'none',
      },
      // style customization for underlined mode
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`,
      },
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper:hover': {
        border: `1px solid ${designtokenColors['ske-color-black100']}`,
      },
      '& .ms-TextField-errorMessage': {
        color: designtokenColors['ske-color-status-error'],
        fontWeight: designtokenFonts['ske-font-weight-medium'],
        selectors: {
          ':before': {
            fontFamily: SkeIcons.fontFace.fontFamily,
            fontSize: designtokenFonts['ske-font-size-l'],
            display: 'block',
            content: errorIcon,
            marginRight: 3,
          },
        },
      },
      '& .ms-TextField .ms-TextField-fieldGroup': errorMessage && {
        borderColor: designtokenColors['ske-color-status-error'],
        borderWidth: '2px',
      },
      '& .ms-TextField.is-active .ms-TextField-fieldGroup': errorMessage && {
        outlineColor: designtokenColors['ske-color-status-interactive'],
        borderColor: designtokenColors['ske-color-status-interactive'],
      },
      '& .ms-DatePicker-goToday ': {
        right: '14px;',
      },
      ...getFieldTypeStyles(props),
      ...getTextFieldStyles(props),
    },
  });
};
