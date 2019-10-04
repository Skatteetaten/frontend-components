import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { getFocusStyle } from '../utils/getFocusStyle';
import { FontSizes, FontWeights } from '../utils/fonts';

function getTypeColor(props) {
  const { palette } = getTheme();
  const radius = '20px';

  switch (props.buttonType) {
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
    case 'primaryRounded':
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.white,
        color: palette.skeColor.blue
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
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.white,
        color: palette.skeColor.blue
      };
  }
}

function getTypeFocusColor(props) {
  const { palette } = getTheme();
  switch (props.buttonType) {
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

function getTypeActiveColor(props) {
  const { palette } = getTheme();
  switch (props.buttonType) {
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

function getDisabledColor(props) {
  switch (props.buttonType) {
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

function getLabelStyles(props) {
  switch (props.buttonType) {
    case 'secondary':
      return {
        textDecoration: 'underline'
      };
    default:
      return;
  }
}

function setFocusRadius(props) {
  if (props.buttonType === 'primary' || props.buttonType === 'warning') {
    return '6px';
  }
  if (props.buttonType === 'primaryLarge') {
    return '7px';
  } else {
    return '20px';
  }
}

function setInset(props) {
  if (props.buttonType === 'primary' || props.buttonType === 'warning') {
    return -3;
  } else {
    return -4;
  }
}

export var getClassNames = function getClassNames(props) {
  const theme = getTheme();
  const inset = setInset(props);
  const radius = setFocusRadius(props);

  return mergeStyles([
    getFocusStyle(theme, inset, 'relative', radius),
    {
      displayName: `ske-${props.buttonType}-button`,
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
          background: theme.palette.skeColor.whiteGrey,
          borderColor: theme.palette.skeColor.lightGrey,
          color: theme.palette.skeColor.lightGrey,
          ...getDisabledColor(props)
        },
        '&.ms-Button i': {
          fontSize: FontSizes.icon
        }
      }
    }
  ]);
};
