import { mergeStyleSets } from '@fluentui/merge-styles';
import { SkeIcons } from '../utils';
import { DropdownProps } from './DropDown.types';
import { IDropdownStyles } from '@fluentui/react';
import designtokenFonts from '../utils/designtokens/_fontSizes.json';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';

function getFieldTypeStyles(props: DropdownProps) {
  if (props.inputSize === 'large') {
    return {
      '.ms-Dropdown-title': {
        borderWidth: 2,
        padding: '0.313rem 0,75rem',
        borderRadius: '0rem',
        fontSize: designtokenFonts['ske-font-size-l'],
        height: '2.875rem',
      },
      '& span.ms-Dropdown-caretDownWrapper': {
        top: designtokenSpacing['ske-spacing-md'],
        fontSize: designtokenFonts['ske-font-size-l'],
        color: designtokenColors['ske-color-interactive'],
      },
    };
  } else {
    return {
      '.ms-Dropdown-title': {
        fontSize: designtokenFonts['ske-font-size-s'],
      },
      '& span.ms-Dropdown-caretDownWrapper': {
        color: designtokenColors['ske-color-interactive'],
      },
    };
  }
}

export const getClassNames = (props: DropdownProps) => {
  const { errorMessage } = props;
  const inset = 0;
  const radius = '0';
  const errorIcon = "'" + SkeIcons.icons.Error + "'";

  return mergeStyleSets({
    main: {
      selectors: {
        ...getFieldTypeStyles(props),
        '& .ms-TextField-errorMessage': {
          fontSize: designtokenFonts['ske-font-size-s'],
        },
        '::-moz-focus-inner': {
          border: '0',
        },
        '& .ms-Dropdown-title': {
          borderColor: designtokenColors['ske-color-black-100'],
          borderRadius: '0rem',
        },
        '& .ms-Dropdown-titleIsPlaceHolder': {
          borderColor: designtokenColors['ske-color-black-100'],
        },
        '& .ms-Dropdown-title.ms-Dropdown-title': errorMessage && {
          borderColor: errorMessage
            ? designtokenColors['ske-color-status-error']
            : designtokenColors['ske-color-black-100'],
          borderWidth: designtokenSpacing['ske-spacing-xs'],
        },
        // hack
        '&:focus .ms-Dropdown-title.ms-Dropdown-title': {
          border: `${designtokenSpacing['ske-spacing-xs']} solid ${designtokenColors['ske-color-interactive']}`,
        },
        '& .is-disabled .ms-Dropdown': {
          backgroundColor: 'red',
        },
        '& .is-disabled .ms-Dropdown-title': {
          borderColor: designtokenColors['ske-color-grey-50'],
          borderStyle: 'solid',
          borderWidth: '0.063rem',
          backgroundColor: designtokenColors['ske-color-grey-5'],
        },
        '& .is-disabled .ms-Dropdown-caretDownWrapper': {
          color: designtokenColors['ske-color-grey-50'],
        },
        '&:active .is-disabled .ms-Dropdown-title': {
          borderColor: designtokenColors['ske-color-grey-50'],
        },
        '&:hover .is-disabled .ms-Dropdown-title': {
          borderColor: designtokenColors['ske-color-grey-50'],
          cursor: 'not-allowed',
        },
        '&:focus:after': !props.disabled && {
          content: '""',
          position: 'absolute',
          left: inset + 1,
          top: inset + 1,
          bottom: inset + 1,
          right: inset + 1,
          borderRadius: radius,
          outline: 'transparent',
          zIndex: 1,
        },
        '& div[role=alert]': {
          fontWeight: designtokenFonts['ske-font-weight-medium'],
        },
        '& div[role=alert]::before': {
          fontFamily: SkeIcons.fontFace.fontFamily,
          fontSize: designtokenFonts['ske-font-size-m'],
          content: errorIcon,
          marginRight: '0.188rem',
          verticalAlign: 'text-bottom',
        },
      },
    },
    readOnly: {
      borderStyle: 'none',
      fontSize: designtokenFonts['ske-font-size-m'],
      fontWeight: designtokenFonts['ske-font-weight-bold'],
      display: 'block',
      padding: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  });
};

export const getCalloutStyles = (): Partial<IDropdownStyles> => {
  const inset = 0;
  const radius = '0';

  return {
    dropdownItem: {
      color: designtokenColors['ske-color-black-100'],
      marginTop: designtokenSpacing['ske-spacing-sm'],
      marginBottom: designtokenSpacing['ske-spacing-sm'],
      selectors: {
        '&:hover': {
          background: `${designtokenColors['ske-color-interactive-light']} !important`,
          textDecoration: 'underline',
        },
        '&:active': {
          background: designtokenColors['ske-color-interactive-light'],
          textDecoration: 'none',
        },
        '&:focus': {
          background: designtokenColors['ske-color-interactive-light'],
          textDecoration: 'underline',
        },
        '&:hover:after, &:focus:after': {
          content: '""',
          position: 'absolute',
          left: inset + 1,
          top: inset + 1,
          bottom: inset + 1,
          right: inset + 1,
          borderRadius: radius,
          outline: 'transparent',
          zIndex: 1,
          color: designtokenColors['ske-color-black-100'],
        },
      },
    },
    dropdownItemSelected: {
      color: designtokenColors['ske-color-black-100'],
      background: `${designtokenColors['ske-color-grey-5']} !important`,
    },
    dropdownOptionText: { whiteSpace: 'normal !important' },
  };
};
