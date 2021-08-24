import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
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
      border: 'solid',
      borderWidth: '3px',
      borderColor: palette.skeColor.blue,
    };
  } else {
    return {
      borderWidth: 0,
    };
  }
}

function getCircleHoverStyles(props: IconButtonProps) {
  const palette = getTheme().palette as PaletteProps;
  return {
    color: palette.skeColor.blue,
    borderWidth: '3px',
    borderColor: palette.skeColor.blue,
    background: palette.skeColor.lightBlue,
  };
}

function getCircleFocusStyles(props: IconButtonProps) {
  const palette = getTheme().palette as PaletteProps;
  return {
    borderColor: palette.skeColor.darkBlue,
    backgroundColor: palette.skeColor.darkBlue,
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
  const inset = -4;
  const radius = '0';

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
        '&.ms-Button--icon:hover, &.ms-Button--icon:focus': {
          border: `3px solid ${palette.skeColor.blue}`,
          transition: 'background-color 0.3s',
          // @ts-ignore
          ...getCircleHoverStyles(props),
        },
        '&:focus&:after': {
          borderColor: 'transparent',
        },
        '&.ms-Button--icon:active': {
          color: palette.white,
          ...getCircleFocusStyles(props),
        },
        '&.ms-Button--icon:disabled': {
          ...getCircleStyles(props),
          color: palette.skeColor.lightGrey,
          borderColor: palette.skeColor.lightGrey,
        },
        '&.ms-Button--icon:disabled i': {
          color: palette.skeColor.lightGrey,
        },
      },
    },
  ]);
};
