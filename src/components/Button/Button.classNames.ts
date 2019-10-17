import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { getFocusStyle } from '..';
import { FontSizes, FontWeights } from '..';
import { PaletteProps } from '..';
// @ts-ignore TODO
function getTypeColor(props): string {
  const palette = getTheme().palette as PaletteProps;
  const radius = '20px';

  switch (props.type) {
    case 'primary':
      // @ts-ignore TODO
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
      // @ts-ignore TODO
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
    case 'primaryRounded':
      // @ts-ignore TODO
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.white,
        color: palette.skeColor.blue
      };
    case 'primaryRoundedFilled':
      // @ts-ignore TODO
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white
      };
    case 'warning':
      // @ts-ignore TODO
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
      // @ts-ignore TODO
      return {
        padding: 0,
        borderWidth: 0,
        background: 'none',
        color: palette.skeColor.blue
      };
    default:
      // @ts-ignore TODO
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.white,
        color: palette.skeColor.blue
      };
  }
}
// @ts-ignore TODO
function getTypeFocusColor(props): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.type) {
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
// @ts-ignore TODO
function getTypeActiveColor(props) {
  const palette = getTheme().palette as PaletteProps;
  switch (props.type) {
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
// @ts-ignore TODO
function getDisabledColor(props) {
  switch (props.type) {
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
// @ts-ignore TODO
function getLabelStyles(props) {
  switch (props.type) {
    case 'secondary':
      return {
        textDecoration: 'underline'
      };
    default:
      return;
  }
}
// @ts-ignore TODO
function setFocusRadius(props) {
  if (props.type === 'primary' || props.type === 'warning') {
    return '6px';
  }
  if (props.type === 'primaryLarge') {
    return '7px';
  } else {
    return '20px';
  }
}
// @ts-ignore TODO
function setInset(props) {
  if (props.type === 'primary' || props.type === 'warning') {
    return -3;
  } else {
    return -4;
  }
}
// @ts-ignore TODO
export function getClassNames(props): string {
  const theme = getTheme();
  const palette = theme.palette as PaletteProps;
  const inset = setInset(props);
  const radius = setFocusRadius(props);
  // @ts-ignore TODO
  return mergeStyles([
    getFocusStyle(theme, inset, 'relative', radius),
    {
      displayName: `ske-${props.type}-button`,
      selectors: {
        '&.ms-Button': {
          borderWidth: '3px',
          fontWeight: 'normal',
          padding: '15px',
          transition: 'background 0.3s',
          // @ts-ignore TODO
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
