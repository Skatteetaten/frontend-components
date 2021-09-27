import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, PaletteProps, getFocusStyle } from '../utils';
import { ButtonProps } from './Button.types';

function getTypeColor(props: ButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  const radius = '100px';

  const sizeNormal = {
    height: 'auto',
    minHeight: '32px',
    padding: '7px 15px',
  };

  switch (props.buttonStyle) {
    case 'primary':
      return {
        borderRadius: '6px',
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
    case 'primaryLarge':
      return {
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white,
        boxShadow: `0 8px 6px -6px ${palette.skeColor.grey10}`,
        fontSize: FontSizes.largePlus,
        borderWidth: '3px',
        borderRadius: '7px',
        fontWeight: FontWeights.semibold,
        padding: '25px',
        height: '80px',
        maxWidth: 'calc((75*550px)/100)',
      };
    case 'primaryRoundedFilled':
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.blue,
        color: palette.skeColor.white,
        ...sizeNormal,
      };
    case 'warning':
      return {
        borderRadius: '6px',
        borderColor: palette.skeColor.burgundy30,
        background: palette.skeColor.burgundy10,
        color: palette.bodyText,
        ...sizeNormal,
        boxShadow: `0 6px 6px -6px ${palette.skeColor.lightGrey}`,

        selectors: {
          '@media  only screen and (max-width: 479px)': {
            width: '100%',
          },
        },
      };
    case 'secondary':
      return {
        padding: 0,
        borderWidth: 0,
        background: 'none',
        color: palette.skeColor.blue,
        height: 'auto',
      };
    default:
      // primaryRounded
      return {
        borderRadius: radius,
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.white,
        color: palette.skeColor.blue,
        ...sizeNormal,
      };
  }
}

function getTypeFocusColor(props: ButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.buttonStyle) {
    case 'warning':
      return {
        borderColor: palette.skeColor.error,
        background: palette.skeColor.error,
        color: palette.white,
      };
    case 'secondary':
      return {
        background: 'none',
        color: palette.skeColor.blue,
      };
    default:
      return {
        borderColor: palette.skeColor.blue,
        background: palette.skeColor.lightBlue,
        color: palette.skeColor.blue,
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

function getLabelStyles(props: ButtonProps) {
  if (props.buttonStyle === 'secondary') {
    return {
      textDecoration: 'underline',
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
          transition: 'background 0.2s',
          boxShadow: `0 8px 6px -6px ${palette.skeColor.grey30}`,

          textAlign: props.icon ? 'left' : 'center',
          verticalAlign: 'top',
          ...getTypeColor(props),
        },
        '&.ms-Button:hover, &.ms-Button:focus': {
          ...getTypeFocusColor(props),
        },
        '&.ms-Button:hover .ms-Button-label': {
          ...getLabelStyles(props),
        },
        '&.ms-Button:active': {
          position: 'relative',
          top: '2px',
          transition: '0.15s',
          boxShadow: 'none',
        },
        '&.ms-Button:disabled': {
          background: palette.skeColor.whiteGrey,
          borderColor: palette.skeColor.lightGrey,
          color: palette.skeColor.lightGrey,
          ...getDisabledColor(props),
        },
        '&.ms-Button i': {
          fontSize: FontSizes.icon,
        },
      },
    },
  ]);
}
