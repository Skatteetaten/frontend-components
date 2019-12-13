import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '..';
import { PaletteProps } from '..';
import { ButtonProps } from './Button';
import { getFocusStyle } from '../utils/getFocusStyle';

function getTypeColor(props: ButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  const radius = '20px';

  switch (props.buttonStyle) {
    case 'primary':
      return {
        borderRadius: '6px',
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white,
        boxShadow: `0 8px 6px -6px ${palette.skeColor.lightGrey}`,
        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
            padding: '21px 0'
          }
        }
      };
    case 'primaryLarge':
      return {
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white,
        boxShadow: `0 8px 6px -6px ${palette.skeColor.lightGrey}`,
        fontSize: FontSizes.largePlus,
        borderWidth: '3px',
        borderRadius: '7px',
        fontWeight: FontWeights.semibold,
        padding: '25px',
        height: '80px',
        maxWidth: 'calc((75*550px)/100)'
      };
    case 'primaryRoundedFilled':
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white
      };
    case 'warning':
      return {
        borderRadius: '6px',
        borderColor: palette.skeColor.lightPink,
        background: palette.skeColor.lightPink,
        color: palette.bodyText,
        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
            padding: '21px 0'
          }
        }
      };
    case 'secondary':
      return {
        padding: 0,
        borderWidth: 0,
        background: 'none',
        color: palette.skeColor.blue
      };
    default:
      // primaryRounded
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.white,
        color: palette.skeColor.blue
      };
  }
}

function getTypeFocusColor(props: ButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.buttonStyle) {
    case 'warning':
      return {
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.lightPink,
        color: palette.bodyText
      };
    case 'secondary':
      return {
        background: 'none',
        color: palette.skeColor.blue
      };
    default:
      return {
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.lightBlue,
        color: palette.skeColor.blue
      };
  }
}

function getTypeActiveColor(props: ButtonProps) {
  const palette = getTheme().palette as PaletteProps;
  switch (props.buttonStyle) {
    case 'warning':
      return {
        borderColor: palette.skeColor.pink,
        background: palette.skeColor.pink,
        color: palette.skeColor.white
      };
    case 'secondary':
      return {
        background: 'none',
        color: palette.skeColor.darkBlue
      };
    default:
      return {
        borderColor: palette.skeColor.darkBlue,
        background: palette.skeColor.darkBlue,
        color: palette.skeColor.white
      };
  }
}

function getDisabledColor(props: ButtonProps) {
  switch (props.buttonStyle) {
    case 'primary':
      return {
        boxShadow: `none`
      };
    case 'secondary':
      return {
        background: 'none'
      };
    default:
      return;
  }
}

function getLabelStyles(props: ButtonProps) {
  if (props.buttonStyle === 'secondary') {
    return {
      textDecoration: 'underline'
    };
  } else {
    return;
  }
}

function setFocusRadius(props: ButtonProps) {
  if (props.buttonStyle === 'primary' || props.buttonStyle === 'warning') {
    return '6px';
  }
  if (props.buttonStyle === 'primaryLarge') {
    return '7px';
  } else {
    return '20px';
  }
}

function setInset(props: ButtonProps) {
  if (props.buttonStyle === 'primary' || props.buttonStyle === 'warning') {
    return -3;
  } else {
    return -4;
  }
}

export function getClassNames(props: ButtonProps): string {
  const theme = getTheme();
  const palette = theme.palette as PaletteProps;
  const inset = setInset(props);
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
          transition: 'background 0.3s',
          ...getTypeColor(props)
        },
        '&.ms-Button:hover, &.ms-Button:focus': {
          ...getTypeFocusColor(props)
        },
        '&.ms-Button:hover .ms-Button-label': {
          ...getLabelStyles(props)
        },
        '&.ms-Button:active': {
          ...getTypeActiveColor(props)
        },
        '&.ms-Button:disabled': {
          background: palette.skeColor.whiteGrey,
          borderColor: palette.skeColor.lightGrey,
          color: palette.skeColor.lightGrey,
          ...getDisabledColor(props)
        },
        '&.ms-Button i': {
          fontSize: FontSizes.icon
        }
      }
    }
  ]);
}
