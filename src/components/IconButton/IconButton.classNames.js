import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '../utils/fonts';
import { getFocusStyle } from '../utils/getFocusStyle';

function getTypeColor(props) {
  switch (props.buttonType) {
    case 'small':
      return {
        width: '35px',
        height: '35px'
      };
    case 'medium':
      return {
        width: '40px',
        height: '40px'
      };
    case 'large':
      return {
        width: '50px',
        height: '50px'
      };
    case 'xLarge':
      return {
        width: '60px',
        height: '60px'
      };
    default:
      return {};
  }
}

function getCircleStyles(props) {
  const { palette } = getTheme();

  if (props.circle === true) {
    return {
      border: 'solid',
      borderWidth: '3px',
      borderColor: palette.skeColor.blue
    };
  } else {
    return {
      borderWidth: 0
    };
  }
}

function getCircleHoverStyles(props) {
  const { palette } = getTheme();

  if (props.circle === true) {
    return {
      borderWidth: '3px',
      background: palette.skeColor.lightBlue,
      color: palette.skeColor.blue
    };
  } else {
    return {
      color: palette.skeColor.blue,
      borderWidth: '3px',
      borderColor: palette.skeColor.blue,
      background: palette.skeColor.lightBlue
    };
  }
}

function getCircleFocusrStyles(props) {
  const { palette } = getTheme();

  if (props.circle === true) {
    return {
      borderColor: palette.skeColor.darkBlue,
      backgroundColor: palette.skeColor.darkBlue
    };
  } else {
    return {
      borderColor: palette.skeColor.darkBlue,
      backgroundColor: palette.skeColor.darkBlue
    };
  }
}

function getIconSize(props) {
  switch (props.buttonType) {
    case 'small':
      return {
        fontSize: FontSizes.mediumPlus
      };
    case 'medium':
      return {
        fontSize: FontSizes.largePlus
      };
    case 'large':
      return {
        fontSize: FontSizes.xxLarge
      };
    case 'xLarge':
      return {
        fontSize: FontSizes.superLarge
      };
    default:
      return {
        fontSize: FontSizes.icon
      };
  }
}

export var getClassNames = function getClassNames(props) {
  const { palette } = getTheme();
  const inset = -4;
  const radius = 0;

  return mergeStyles([
    getFocusStyle({ palette }, inset, 'relative', radius),
    {
      displayName: `ske-icon${props.buttonType}-button`,
      selectors: {
        '&.ms-Button--icon': {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          padding: 0,
          background: 'none',
          color: palette.skeColor.blue,
          ...getTypeColor(props),
          ...getCircleStyles(props)
        },
        '&.ms-Button--icon i': {
          ...getIconSize(props)
        },
        '&.ms-Button--icon:hover, &.ms-Button--icon:focus': {
          border: '3px solid',
          borderColor: palette.skeColor.blue,
          transition: 'background-color 0.3s',
          ...getCircleHoverStyles(props)
        },
        '.ms-Fabric.is-focusVisible.is-focusVisible &:focus:after': {
          borderWidth: '0px'
        },
        '&.ms-Button--icon:active': {
          color: palette.white,
          ...getCircleFocusrStyles(props)
        },
        '&.ms-Button--icon:disabled': {
          ...getCircleStyles(props),
          color: palette.skeLysGraa,
          borderColor: palette.skeColor.lightGrey
        },
        '&.ms-Button--icon:disabled i': {
          color: palette.skeColor.lightGrey
        }
      }
    }
  ]);
};
