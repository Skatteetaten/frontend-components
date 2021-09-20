import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, SkeIcons, PaletteProps } from '../utils';
import { TextFieldProps } from './TextField.types';

function getFieldTypeStyles(props: TextFieldProps) {
  if (props.inputSize === 'large') {
    return {
      '.ms-TextField-fieldGroup': {
        borderWidth: 2,
        minHeight: 42,
      },
    };
  } else if (props.errorMessage) {
    return {
      '.ms-TextField-fieldGroup': {
        borderWidth: 2,
      },
    };
  } else {
    return {
      '& .ms-TextField-field': {
        fontSize: FontSizes.medium,
      },
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
    underlined,
  } = props;
  const { semanticColors } = getTheme();
  const palette = getTheme().palette as PaletteProps;
  const errorIcon = "'" + SkeIcons.icons.Error + "'";
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;

  return mergeStyles({
    displayName: 'SkeTextField',
    selectors: {
      ...getFieldTypeStyles(props),
      '&& .ms-TextField-fieldGroup': {
        borderColor: color,
        borderRadius: '0px',
      },
      '& .ms-TextField-fieldGroup': readOnly && {
        border: 'none',
        outline: 'none',
        background: 'transparent',
      },
      '&& .ms-TextField-fieldGroup:focus': {
        border: props.errorMessage
          ? palette.skeColor.blue
          : palette.skeColor.error,
      },
      '&.is-active .ms-TextField-fieldGroup': !borderless &&
        !underlined &&
        !readOnly && {
          border: `1px solid ${palette.skeColor.blue}`,
        },
      // style customization for underlined model
      '&.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`,
      },
      '&.ms-TextField--underlined .ms-TextField-wrapper:hover': {
        border: `1px solid ${semanticColors.inputBorderHovered}`,
      },
      '&.is-active.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`,
        outline: `1px solid ${color}`,
      },
      // Ikke lengre i bruk
      '& .ms-TextField-field[readOnly]': {
        paddingLeft: '1px',
        cursor: 'default',
        fontWeight: boldText ? FontWeights.bold : FontWeights.regular,
        border: 'none',
        outline: 'none',
        background: 'transparent',
      },
      '& .ms-TextField-field[readOnly]:focus': {
        fontWeight: boldText ? FontWeights.bold : FontWeights.regular,
      },
      '&.is-active .ms-TextField-field': readOnly && {
        border: `1px solid ${palette.skeColor.blue}`,
        backgroundColor: palette.skeColor.white,
      },
      '&.is-active .ms-TextField-field[readOnly]:focus': readOnly && {
        border: `none`,
        background: 'transparent',
      },
      '& .ms-TextField-field[disabled]': {
        color: palette.skeColor.darkGrey,
      },
      '.ms-Button-icon': {
        fontSize: 18,
      },
      '& .ms-TextField-errorMessage': {
        position: 'relative',
        color: palette.skeColor.error,
        fontWeight: FontWeights.medium,
        fontSize: FontSizes.small,
        paddingLeft: 20,
      },
      '& .ms-TextField-errorMessage::before': {
        fontFamily: SkeIcons.fontFace.fontFamily,
        fontSize: 16,
        display: 'block',
        content: errorIcon,
        marginRight: 3,
        position: 'absolute',
        top: 6,
        left: 0,
      },
      'textarea.ms-TextField-field': {
        resize: 'none',
      },
      'input.ms-TextField-field': editableWhenEmpty && {
        border: '1px solid' + palette.skeColor.blackAlt,
        backgroundColor: palette.skeColor.white,
      },
      '& .ms-Callout-main': typeof calloutFloating !== 'undefined' &&
        !calloutFloating && {
          display: 'inline-block',
        },
      '.ms-TextField-suffix': !props.editMode &&
        props.readOnly && {
          display: 'none',
        },
      '&.is-disabled .ms-TextField-fieldGroup': {
        borderColor: palette.skeColor.lightGrey,
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: palette.skeColor.whiteGrey,
      },
      '&.is-disabled .ms-TextField-field': {
        color: palette.skeColor.blackAlt,
      },
      '&.is-disabled .ms-TextField-field:hover': {
        cursor: 'not-allowed',
      },
    },
  });
};
