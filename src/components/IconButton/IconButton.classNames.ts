import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { FontSizes, getFocusStyle, PaletteProps } from '../utils';
import { IconButtonProps } from './IconButton.types';

function getTypeColor(props: IconButtonProps) {
  switch (props.buttonSize) {
    case 'xSmall':
      return {
        width: '26px',
        height: '26px',
      };
    case 'small':
      return {
        width: '35px',
        height: '35px',
      };
    case 'medium':
      return {
        width: '40px',
        height: '40px',
      };
    case 'large':
      return {
        width: '50px',
        height: '50px',
      };
    case 'xLarge':
      return {
        width: '60px',
        height: '60px',
      };
    default:
      return {};
  }
}

function getCircleStyles(props: IconButtonProps) {
  const palette = getTheme().palette as PaletteProps;

  if (props.circle === true) {
    return {
      border: '3px solid ' + palette.skeColor.interactive,
    };
  } else {
    return {
      border: '3px solid ' + palette.skeColor.transparent,
    };
  }
}

function getCircleHoverStyles(props: IconButtonProps) {
  const palette = getTheme().palette as PaletteProps;
  return {
    color: palette.skeColor.blue,
    //borderWidth: '3px',
    //borderColor: palette.skeColor.blue,
    background: palette.skeColor.lightBlue,
  };
}

function getIconSize(props: IconButtonProps) {
  switch (props.buttonSize) {
    case 'xSmall':
      return {
        fontsize: FontSizes.smallPlus,
      };
    case 'small':
      return {
        fontSize: FontSizes.mediumPlus,
      };
    case 'medium':
      return {
        fontSize: FontSizes.largePlus,
      };
    case 'large':
      return {
        fontSize: FontSizes.xxLarge,
      };
    case 'xLarge':
      return {
        fontSize: FontSizes.superLarge,
      };
    default:
      return {
        fontSize: FontSizes.icon,
      };
  }
}

export const getClassNames = function getClassNames(props: IconButtonProps) {
  const palette = getTheme().palette as PaletteProps;
  const inset = props.circle ? -8 : -4;
  const radius = '50px';
  const disabled = props.disabled;

  return mergeStyles([
    getFocusStyle({ palette }, inset, 'relative', radius),
    {
      displayName: `ske-icon${props.buttonSize}-button`,
      selectors: {
        '&.ms-Button--icon': {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          padding: 0,
          background: 'none',
          color: palette.skeColor.blue,
          ...getTypeColor(props),
          ...getCircleStyles(props),
        },
        '&.ms-Button--icon i': {
          ...getIconSize(props),
        },
        '&.ms-Button--icon:hover': {
          transition: 'background-color 0.2s',
          // @ts-ignore
          ...getCircleHoverStyles(props),
        },
        '&:focus&:after': {
          //borderColor: 'transparent',
        },
        '&.ms-Button--icon:active': {
          //color: palette.skeColor.interactiveDark,
          transition: '0.15s',
          transform: disabled ? 'none' : 'translateY(2px)',
        },
        '&.ms-Button--icon:disabled': {
          ...getCircleStyles(props),
          color: palette.skeColor.lightGrey,
          borderColor: palette.skeColor.lightGrey,
          cursor: 'not-allowed',
        },
        '&.ms-Button--icon:disabled i': {
          color: palette.skeColor.lightGrey,
        },
      },
    },
  ]);
};
