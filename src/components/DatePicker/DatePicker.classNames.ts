import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, PaletteProps } from '..';
import { MdIcons } from '../utils/icons/';
import { DatePickerProps } from './DatePicker';

const errorIcon = "'" + MdIcons.icons.Error + "'";

function getFieldTypeStyles(props: DatePickerProps) {
  if (props.inputSize === 'large') {
    return {
      '& .ms-TextField-fieldGroup': {
        borderWidth: '2px',
        height: '46px',
        padding: '5px 0',
        fontSize: FontSizes.large
      },
      '& input.ms-TextField-field': {
        fontSize: FontSizes.large + ' !important'
      },
      'i.ms-DatePicker-event--without-label': {
        marginTop: '0px',
        fontSize: FontSizes.xLarge
      }
    };
  } else {
    return {
      '& .ms-TextField-fieldGroup': {
        fontSize: FontSizes.small
      }
    };
  }
}

function getTextFieldStyles(props: DatePickerProps) {
  if (props.readonlyMode === true) {
    return {
      '& .ms-TextField-fieldGroup': {
        border: 'none'
      },
      '& .ms-TextField-fieldGroup:focus .ms-TextField-field': {
        cursor: 'not-allowed'
      },
      '& .ms-TextField-field': {
        paddingLeft: 0,
        pointerEvents: 'none'
      }
    };
  } else {
    return {};
  }
}

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
        borderColor: palette.skeColor.blackAlt
      },
      '& .ms-TextField-field': {
        fontSize: FontSizes.medium
      },
      '&& .ms-TextField-fieldGroup.ms-TextField-fieldGroup:after': {
        content: '""'
      },
      '& .ms-TextField.is-disabled': !readonlyMode && {
        borderColor: palette.skeColor.grey,
        borderWidth: '1px',
        borderStyle: 'solid',
        backgroundColor: palette.skeColor.whiteGrey
      },
      '& .ms-TextField.is-disabled i': {
        color: palette.skeColor.grey
      },
      '& .ms-TextField.is-disabled input': {
        padding: '8px'
      },
      '& .ms-TextField.is-disabled .ms-TextField-fieldGroup': readonlyMode && {
        backgroundColor: 'transparent'
      },
      '& .ms-TextField .ms-TextField-fieldGroup .ms-TextField-field': readonlyMode && {
        fontWeight: FontWeights.bold,
        fontSize: FontSizes.medium,
        color: palette.skeColor.blackAlt
      },
      '.ms-TextField i': readonlyMode && {
        display: 'none'
      },

      // style customization for underlined mode
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`
      },
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper:hover': {
        border: `1px solid ${palette.skeColor.black}`
      },
      '& .ms-TextField-errorMessage': {
        color: palette.skeColor.error,
        selectors: {
          ':before': {
            fontFamily: MdIcons.fontFace.fontFamily,
            fontSize: 18,
            display: 'block',
            content: errorIcon,
            marginRight: 3
          }
        }
      },
      '& .ms-TextField .ms-TextField-fieldGroup': errorMessage && {
        borderColor: palette.skeColor.error,
        borderWidth: '2px'
      },
      '& .ms-TextField.is-active .ms-TextField-fieldGroup': errorMessage && {
        outlineColor: palette.skeColor.blue,
        borderColor: palette.skeColor.blue
      },
      ...getFieldTypeStyles(props),
      ...getTextFieldStyles(props)
    }
  });
};
