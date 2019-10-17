import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { MdIcons } from '../utils/icons/';
import { Animation } from '../utils/getAnimationStyles';
import { PaletteProps } from '..';
// @ts-ignore TODO
function getFieldTypeStyles(props) {
  if (props.inputSize === 'large') {
    return {
      '.ms-Dropdown-title': {
        borderWidth: 2,
        padding: '5px 12px',
        borderRadius: '0px',
        fontSize: FontSizes.large,
        height: '46px'
      },
      '& span.ms-Dropdown-caretDownWrapper': {
        top: '8px',
        fontSize: FontSizes.large
      }
    };
  } else {
    return {
      '.ms-Dropdown-title': {
        fontSize: FontSizes.small
      }
    };
  }
}
// @ts-ignore TODO
export const getClassNames = props => {
  const { errorMessage } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;
  const inset = 0;
  const radius = '0';

  return mergeStyles({
    displayName: 'SkeDropdown',
    selectors: {
      ...getFieldTypeStyles(props),
      '& .ms-TextField-errorMessage': {
        fontSize: FontSizes.small
      },
      '::-moz-focus-inner': {
        border: '0'
      },
      '& .ms-Dropdown-title': {
        borderColor: palette.skeColor.blackAlt,
        borderRadius: '0px'
      },
      '& .ms-Dropdown-title.ms-Dropdown-title': errorMessage && {
        borderColor: color
      },
      // hack
      '&:focus .ms-Dropdown-title.ms-Dropdown-title': {
        border: `2px solid ${palette.skeColor.blue}`
      },
      '&.is-disabled.is-disabled span.ms-Dropdown-title': {
        borderColor: palette.skeColor.grey,
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: palette.skeColor.whiteGrey
      },
      '&.is-disabled.is-disabled span.ms-Dropdown-caretDownWrapper': {
        color: palette.skeColor.grey
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
        zIndex: 1
      }
    }
  });
};
// @ts-ignore TODO
export const getErrorClassNames = props => {
  const { errorMessage } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;
  const errorIcon = "'" + MdIcons.icons.Error + "'";

  return mergeStyles(Animation.errorMessage, {
    displayName: 'SkeDropdownError',
    color,
    fontSize: FontSizes.small,
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 20,
    position: 'relative',
    selectors: {
      '&:before': {
        fontFamily: MdIcons.fontFace.fontFamily,
        fontSize: 18,
        display: 'block',
        content: errorIcon,
        marginRight: 3,
        position: 'absolute',
        top: 5,
        left: 0
      }
    }
  });
};
// @ts-ignore TODO
export const getCalloutClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  const inset = 0;
  const radius = '0';

  return mergeStyles({
    displayName: 'SkeDropdownValg',
    selectors: {
      '::-moz-focus-inner': {
        border: '0'
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-Dropdown-item:focus:after, .ms-Dropdown-item:hover:after': {
        content: '""',
        position: 'absolute',
        left: inset + 1,
        top: inset + 1,
        bottom: inset + 1,
        right: inset + 1,
        border: '2px solid ' + palette.skeColor.blue,
        borderRadius: radius,
        outline: 'transparent',
        zIndex: 1
      }
    }
  });
};
// @ts-ignore TODO
export const getLabelClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    labelArea: {
      display: 'flex',
      alignItems: 'center'
    },
    label: {
      //flexGrow: 1,
    },
    labelText: {
      fontSize: FontSizes.small,
      color: palette.skeColor.blackAlt,
      fontWeight: FontWeights.regular
    },
    labelIconArea: {
      height: '26px',
      marginTop: '-5px'
    },
    icon: {
      color: palette.skeColor.blue,
      selectors: {
        '& i': {
          fontSize: 'large'
        },
        '&:focus&:after': {
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none'
        }
      }
    },
    callOut: {
      padding: '10px',
      maxWidth: '300px'
    }
  });
};
