import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { MdIcons } from '../utils/icons/';
import { isUndefined } from 'util';
import { PaletteProps } from '..';
import { TextFieldProps } from './TextField';

function getFieldTypeStyles(props: TextFieldProps) {
  if (props.inputSize === 'large') {
    return {
      '.ms-TextField-fieldGroup': {
        borderWidth: 2,
        minHeight: 42
      }
    };
  } else {
    return {
      '& .ms-TextField-field': {
        fontSize: FontSizes.medium
      }
    };
  }
}

export const getClassNames = (props: TextFieldProps) => {
  const {
    boldText,
    borderless,
    calloutFloating,
    editableWhenEmpty,
    errorMessage,
    readOnly,
    underlined
  } = props;
  const { semanticColors } = getTheme();
  const palette = getTheme().palette as PaletteProps;
  const errorIcon = "'" + MdIcons.icons.Error + "'";
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;

  // @ts-ignore TODO
  return mergeStyles({
    displayName: 'SkeTextField',
    selectors: {
      ...getFieldTypeStyles(props),
      '&.is-disabled .ms-TextField-fieldGroup': {
        border: `1px solid ${palette.skeColor.lightGrey}`,
        backgroundColor: palette.skeColor.neutralGrey
      },
      '&& .ms-TextField-fieldGroup': {
        borderColor: color,
        borderRadius: '0px'
      },
      '& .ms-TextField-fieldGroup': readOnly && {
        border: 'none',
        outline: 'none',
        background: 'transparent'
      },
      '&& .ms-TextField-fieldGroup:focus': {
        border: props.errorMessage
          ? palette.skeColor.blue
          : palette.skeColor.error
      },
      '&.is-active .ms-TextField-fieldGroup': !borderless &&
        !underlined &&
        !readOnly && {
          border: `1px solid ${palette.skeColor.blue}`
        },
      // style customization for underlined model
      '&.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`
      },
      '&.ms-TextField--underlined .ms-TextField-wrapper:hover': {
        border: `1px solid ${semanticColors.inputBorderHovered}`
      },
      '&.is-active.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`,
        outlineColor: color,
        outlineWidth: '1px',
        outlineStyle: 'solid'
      },
      // Ikke lengre i bruk
      '& .ms-TextField-field[readOnly]': {
        paddingLeft: '1px',
        cursor: 'default',
        fontWeight: boldText ? FontWeights.bold : FontWeights.regular,
        border: 'none',
        outline: 'none',
        background: 'transparent'
      },
      '& .ms-TextField-field[readOnly]:focus': {
        fontWeight: boldText ? FontWeights.bold : FontWeights.regular
      },
      '&.is-active .ms-TextField-field': readOnly && {
        border: `1px solid ${palette.skeColor.blue}`,
        backgroundColor: palette.skeColor.white
      },
      '&.is-active .ms-TextField-field[readOnly]:focus': readOnly && {
        border: `none`,
        background: 'transparent'
      },
      '& .ms-TextField-field[disabled]': {
        color: palette.skeColor.darkGrey
      },
      '.ms-Button-icon': {
        paddingBottom: '4px',
        fontSize: 18
      },
      '& .ms-TextField-errorMessage': {
        position: 'relative',
        color: palette.skeColor.error,
        paddingLeft: 20
      },
      '& .ms-TextField-errorMessage::before': {
        fontFamily: MdIcons.fontFace.fontFamily,
        fontSize: 18,
        display: 'block',
        content: errorIcon,
        marginRight: 3,
        position: 'absolute',
        top: 5,
        left: 0
      },
      'textarea.ms-TextField-field': {
        resize: 'none'
      },
      'input.ms-TextField-field': editableWhenEmpty && {
        border: '1px solid' + palette.skeColor.blackAlt,
        backgroundColor: palette.skeColor.white
      },
      '& .ms-Callout-main': !isUndefined(calloutFloating) &&
        !calloutFloating && {
          display: 'inline-block'
        },
      '.ms-TextField-suffix': !props.editMode &&
        props.readOnly && {
          display: 'none'
        }
    }
  });
};
