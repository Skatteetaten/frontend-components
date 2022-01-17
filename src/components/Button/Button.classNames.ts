import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, PaletteProps, getFocusStyle } from '../utils';
import { ButtonProps } from './Button.types';

function getTypeColor(props: ButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  const radius = '200px';

  const sizeNormal = {
    height: 'auto',
    minHeight: '32px',
    padding: '7px 15px',
  };

  switch (props.buttonStyle) {
    case 'primaryCornered':
      return {
        borderRadius: '7px',
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white,
        ...sizeNormal,
        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
          },
        },
      };
    case 'callToAction':
      return {
        borderColor: palette.skeColor.interactive,
        background: palette.skeColor.interactive,
        color: palette.skeColor.white,
        boxShadow: `0 8px 6px -6px ${palette.skeColor.grey30}`,
        fontSize: FontSizes.largePlus,
        borderWidth: '3px',
        borderRadius: '8px',
        fontWeight: FontWeights.semibold,
        padding: '25px',
        height: '80px',
        maxWidth: 'calc((75*550px)/100)',
      };
    case 'primary':
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white,
        ...sizeNormal,
        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
          },
        },
      };
    case 'warning':
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.burgundy50,
        background: palette.skeColor.burgundy10,
        color: palette.bodyText,
        ...sizeNormal,

        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
          },
        },
      };
    case 'secondarySimple':
      return {
        borderWidth: 3,
        borderRadius: '6px',
        borderColor: 'transparent',
        textDecoration: 'underline',
        background: 'none',
        color: palette.skeColor.blue,
        ...sizeNormal,
        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
          },
        },
      };
    default:
      // secondary
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.interactive,
        background: palette.skeColor.white,
        color: palette.skeColor.interactive,
        ...sizeNormal,
        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
          },
        },
      };
  }
}

function getTypeHoverColor(props: ButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.buttonStyle) {
    case 'warning':
      return {
        borderColor: palette.skeColor.error,
        background: palette.skeColor.error,
        color: palette.white,
      };
    case 'primaryCornered':
    case 'primary':
    case 'callToAction':
      return {
        borderColor: palette.skeColor.interactiveDark,
        background: palette.skeColor.interactiveDark,
        color: palette.skeColor.white,
      };
    default:
      return {
        borderColor: palette.skeColor.interactive,
        background: palette.skeColor.interactiveLight,
        color: palette.skeColor.interactive,
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
  if (
    props.buttonStyle === 'primaryCornered' ||
    props.buttonStyle === 'secondarySimple'
  ) {
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
  const palette = theme.palette as PaletteProps;
  const inset = -8;
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
          background: palette.skeColor.whiteGrey,
          borderColor: palette.skeColor.lightGrey,
          color: palette.skeColor.lightGrey,
          cursor: 'not-allowed',
          ...getDisabledColor(props),
        },
        '&.ms-Button i': {
          fontSize: FontSizes.icon,
        },
      },
    },
  ]);
}
