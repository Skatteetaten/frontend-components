import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, PaletteProps, SkeIcons } from '../utils';
import { DatePickerProps } from './DatePicker.types';

const errorIcon = "'" + SkeIcons.icons.Error + "'";

function getFieldTypeStyles(props: DatePickerProps) {
  const palette = getTheme().palette as PaletteProps;

  if (props.inputSize === 'large') {
    return {
      '& .ms-TextField-fieldGroup': {
        borderWidth: '2px',
        height: '46px',
        margin: '5px 0',
        fontSize: FontSizes.large,
      },
      '& input.ms-TextField-field': {
        fontSize: FontSizes.large + ' !important',
      },
      'i.ms-DatePicker-event--without-label': {
        marginTop: '6px',
        fontSize: FontSizes.xLarge,
        color: palette.skeColor.blue,
      },
    };
  } else {
    return {
      '& .ms-TextField-fieldGroup': {
        fontSize: FontSizes.small,
      },
      'i.ms-DatePicker-event--without-label': {
        color: palette.skeColor.blue,
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
  const palette = getTheme().palette as PaletteProps;
  return mergeStyles({
    displayName: 'SkeCalendar',
    color: palette.skeColor.blackAlt,

    selectors: {
      '& .ms-DatePicker-monthOption:hover': {
        color: `${palette.skeColor.blackAlt} !important`,
      },
      '& .ms-DatePicker-goToday': {
        right: '10px',
      },
      '& .ms-DatePicker-day--highlighted': {
        backgroundColor: palette.skeColor.lightBlue,
        color: palette.skeColor.blackAlt,
      },
      '& .ms-DatePicker-day--today': {
        backgroundColor: palette.skeColor.lightBlue,
        color: palette.skeColor.blackAlt,
      },
    },
  });
};

export const getClassNames = (props: DatePickerProps) => {
  const { errorMessage, readonlyMode } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage ? palette.skeColor.error : palette.skeColor.blue;
  return mergeStyles({
    displayName: 'SkeDatePicker',
    outline: 'transparent',
    position: 'relative',
    selectors: {
      '&& .ms-TextField-fieldGroup': {
        borderRadius: '0px',
        borderColor: palette.skeColor.blackAlt,
      },
      '& .ms-TextField-field': {
        fontSize: FontSizes.medium,
      },
      '&& .ms-TextField-fieldGroup.ms-TextField-fieldGroup:after': {
        content: '""',
      },
      '& .ms-TextField.is-disabled': !readonlyMode && {
        borderColor: palette.skeColor.lightGrey,
        borderStyle: 'solid',
        borderWidth: '0px',
        backgroundColor: palette.skeColor.neutralGrey,
      },
      '& .ms-TextField.is-disabled i': {
        color: palette.skeColor.grey,
      },
      '& .ms-TextField.is-disabled input': {
        padding: '8px',
        cursor: 'not-allowed',
        color: palette.skeColor.blackAlt,
      },
      '& .ms-TextField.is-disabled .ms-TextField-fieldGroup': {
        backgroundColor: readonlyMode ? 'transparent' : undefined,
        borderColor: palette.skeColor.lightGrey,
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      '& .ms-TextField .ms-TextField-fieldGroup .ms-TextField-field': readonlyMode && {
        fontWeight: FontWeights.bold,
        fontSize: FontSizes.medium,
        color: palette.skeColor.blackAlt,
      },
      '.ms-TextField i': readonlyMode && {
        display: 'none',
      },
      // style customization for underlined mode
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`,
      },
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper:hover': {
        border: `1px solid ${palette.skeColor.black}`,
      },
      '& .ms-TextField-errorMessage': {
        color: palette.skeColor.error,
        selectors: {
          ':before': {
            fontFamily: SkeIcons.fontFace.fontFamily,
            fontSize: 18,
            display: 'block',
            content: errorIcon,
            marginRight: 3,
          },
        },
      },
      '& .ms-TextField .ms-TextField-fieldGroup': errorMessage && {
        borderColor: palette.skeColor.error,
        borderWidth: '2px',
      },
      '& .ms-TextField.is-active .ms-TextField-fieldGroup': errorMessage && {
        outlineColor: palette.skeColor.blue,
        borderColor: palette.skeColor.blue,
      },
      '& .ms-DatePicker-goToday ': {
        right: '14px;',
      },
      ...getFieldTypeStyles(props),
      ...getTextFieldStyles(props),
    },
  });
};
