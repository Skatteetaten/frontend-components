import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { getFocusStyle } from '../utils';
import { ButtonProps } from './Button.types';

import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';

function getTypeColor(props: ButtonProps): object {
  const radius = '200px';

  const interactiveColor = designtokenColors['ske-color-interactive'];
  const whiteColor = designtokenColors['ske-color-white-100'];

  const sizeNormal = {
    height: 'auto',
    minHeight: '32px',
    padding: '7px 15px',
  };

  switch (props.buttonStyle) {
    case 'primaryCornered':
      return {
        borderRadius: '7px',
        borderColor: interactiveColor,
        background: interactiveColor,
        color: whiteColor,
        ...sizeNormal,
        selectors: {
          [`@media  only screen and (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
            width: props.mobileFullWidth ? '100%' : 'auto',
          },
        },
      };
    case 'callToAction':
      return {
        borderColor: interactiveColor,
        background: interactiveColor,
        color: whiteColor,
        boxShadow: `0 8px 6px -6px ${designtokenColors['ske-color-grey-30']}`,
        fontSize: designtokenFontSizes['ske-font-size-xl'],
        borderWidth: '3px',
        borderRadius: '8px',
        fontWeight: designtokenFontSizes['ske-font-weight-semibold'],
        padding: '25px',
        height: '80px',
        maxWidth: 'calc((75*550px)/100)',
      };
    case 'primary':
      return {
        borderRadius: radius,
        borderColor: interactiveColor,
        background: interactiveColor,
        color: whiteColor,
        ...sizeNormal,
        selectors: {
          [`@media  only screen and (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
            width: props.mobileFullWidth ? '100%' : undefined,
          },
        },
      };
    case 'warning':
      return {
        borderRadius: radius,
        borderColor: designtokenColors['ske-color-burgundy-50'],
        background: designtokenColors['ske-color-burgundy-10'],
        color: designtokenColors['ske-color-black-100'],
        ...sizeNormal,

        selectors: {
          [`@media  only screen and (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
            width: props.mobileFullWidth ? '100%' : 'auto',
          },
        },
      };
    case 'secondarySimple':
      return {
        borderWidth: 3,
        borderRadius: radius,
        borderColor: 'transparent',
        background: 'none',
        color: interactiveColor,
        ...sizeNormal,
        selectors: {
          [`@media  only screen and (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
            width: props.mobileFullWidth ? '100%' : 'auto',
          },
          '.ms-Button-textContainer': {
            textDecoration: 'underline',
          },
        },
      };
    default:
      // secondary
      return {
        borderRadius: radius,
        borderColor: interactiveColor,
        background: whiteColor,
        color: interactiveColor,
        ...sizeNormal,
        selectors: {
          [`@media  only screen and (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
            width: props.mobileFullWidth ? '100%' : 'auto',
          },
        },
      };
  }
}

function getTypeHoverColor(props: ButtonProps): object {
  const interactiveColor = designtokenColors['ske-color-interactive'];
  const interactiveDarkColor = designtokenColors['ske-color-interactive-dark'];
  const interactiveLightColor =
    designtokenColors['ske-color-interactive-light'];
  const errorColor = designtokenColors['ske-color-status-error'];
  const whiteColor = designtokenColors['ske-color-white-100'];

  switch (props.buttonStyle) {
    case 'warning':
      return {
        borderColor: errorColor,
        background: errorColor,
        color: whiteColor,
      };
    case 'secondarySimple':
      return {
        borderColor: interactiveColor,
        background: interactiveLightColor,
        textDecoration: 'none',
        selectors: {
          '.ms-Button-textContainer': {
            textDecoration: 'none',
          },
        },
      };
    case 'primaryCornered':
    case 'primary':
    case 'callToAction':
      return {
        borderColor: interactiveDarkColor,
        background: interactiveDarkColor,
        color: whiteColor,
      };
    default:
      return {
        borderColor: interactiveColor,
        background: interactiveLightColor,
        color: interactiveColor,
      };
  }
}

function getDisabledColor(props: ButtonProps) {
  switch (props.buttonStyle) {
    case 'primary':
      return {
        boxShadow: `none`,
      };
    case 'secondary':
      return {
        background: 'none',
      };
    default:
      return;
  }
}

function setFocusRadius(props: ButtonProps) {
  if (props.buttonStyle === 'primaryCornered') {
    return '8px';
  }
  if (props.buttonStyle === 'callToAction') {
    return '10px';
  } else {
    return '21px';
  }
}

export function getClassNames(props: ButtonProps): string {
  const theme = getTheme();
  const inset = props.buttonStyle === 'secondarySimple' ? -4 : -8;
  const disabled = props.disabled;
  const radius = setFocusRadius(props);
  return mergeStyles([
    getFocusStyle(theme, inset, 'relative', radius),
    {
      displayName: `ske-${props.buttonStyle}-button`,
      selectors: {
        '&.ms-Button': {
          borderWidth: '3px',
          fontWeight: 'normal',
          padding: '15px',
          transition: '0.2s',
          textAlign: 'center',
          verticalAlign: 'top',
          ...getTypeColor(props),
        },
        '&.ms-Button:hover': {
          ...getTypeHoverColor(props),
        },
        '&.ms-Button:active': {
          transition: '0.15s',
          boxShadow: 'none',
          transform: disabled ? 'none' : 'translateY(2px)',
          transitionTimingFunction: 'ease',
        },
        '&.ms-Button:disabled': {
          background: designtokenColors['ske-color-grey-10'],
          borderColor: designtokenColors['ske-color-grey-30'],
          color: designtokenColors['ske-color-grey-30'],
          cursor: 'not-allowed',
          ...getDisabledColor(props),
        },
        '&.ms-Button i': {
          fontSize: designtokenFontSizes['ske-font-size-icon-l'],
        },
      },
    },
  ]);
}
