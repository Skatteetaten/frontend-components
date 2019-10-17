import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '..';
import { MdIcons } from '../utils/icons/';
import { isUndefined } from 'util';
import { PaletteProps } from '..';

const errorIcon = "'" + MdIcons.icons.Error + "'";
// @ts-ignore TODO
function getCalloutStyles(props) {
  const calloutFloating = props.calloutFloating;

  //inline callout layout
  if (!isUndefined(calloutFloating) && !calloutFloating) {
    return {
      '& .ms-Callout-container': {
        width: '100%',
        position: 'inherit',
        margin: '10px 0'
      },
      '& .ms-Callout': {
        left: '0 !important',
        top: '0 !important',
        position: 'inherit'
      },
      '& .ms-Callout-beak': {
        left: '20px !important',
        top: '-8px !important'
      },
      '& .ms-Callout-main': {
        maxWidth: '100%'
      }
    };
  } else {
    return {
      '& .ms-Callout-container': {
        width: '100%',
        position: 'relative',
        display: 'block'
      },
      '& .ms-Callout': {
        width: '100%',
        maxWidth: '300px'
      },
      '& .ms-Callout-main': {
        width: '100%'
      }
    };
  }
}
// @ts-ignore TODO
function getFieldTypeStyles(props) {
  switch (props.inputSize) {
    case 'large':
      return {
        '& .ms-TextField-fieldGroup': {
          borderWidth: '2px',
          height: '46px',
          padding: '5px 0',
          fontSize: FontSizes.large
        },
        '& input.ms-TextField-field': {
          fontSize: FontSizes.large + ' !important'
        },
        'i.ms-DatePicker-event--without-label': {
          marginTop: '5px',
          fontSize: FontSizes.large
        }
      };
    default:
      return {
        '& .ms-TextField-fieldGroup': {
          fontSize: FontSizes.small
        }
      };
  }
}
// @ts-ignore TODO
function getTextFieldStyles(props) {
  switch (props.readonlyMode) {
    case true:
      return {
        '& .ms-TextField-fieldGroup': {
          border: 'none'
        },
        '& .ms-TextField-fieldGroup:focus .ms-TextField-field': {
          cursor: 'not-allowed'
        },
        '& .ms-TextField-field': {
          paddingLeft: 0,
          pointerEvents: 'none'
        }
      };
    default:
      return {};
  }
}
// @ts-ignore TODO
export const getClassNames = props => {
  const { errorMessage, borderless, underlined, readonlyMode } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage ? palette.skeColor.error : palette.skeColor.blue;
  // @ts-ignore TODO
  return mergeStyles({
    displayName: 'SkeDatePicker',
    outline: 'transparent',
    position: 'relative',
    selectors: {
      '&& .ms-TextField-fieldGroup': {
        borderRadius: '0px',
        borderColor: palette.skeColor.blackAlt
      },
      '& .ms-TextField-field': {
        fontSize: FontSizes.medium
      },
      '&& .ms-TextField-fieldGroup.ms-TextField-fieldGroup:after': {
        content: '""'
      },
      '& .ms-TextField.is-disabled': !readonlyMode && {
        borderColor: palette.skeColor.grey,
        borderWidth: '1px',
        borderStyle: 'solid',
        backgroundColor: palette.skeColor.whiteGrey
      },
      '& .ms-TextField.is-disabled i': {
        color: palette.skeColor.grey
      },
      '& .ms-TextField.is-disabled .ms-TextField-fieldGroup': readonlyMode && {
        backgroundColor: 'transparent'
      },
      '& .ms-TextField .ms-TextField-fieldGroup .ms-TextField-field': readonlyMode && {
        fontWeight: FontWeights.bold,
        fontSize: FontSizes.medium,
        color: palette.skeColor.blackAlt
      },
      '.ms-TextField i': readonlyMode && {
        display: 'none'
      },
      '& .ms-TextField.is-active .ms-TextField-fieldGroup': !borderless &&
        !underlined &&
        !readonlyMode && {
          outlineColor: color,
          outlineWidth: '1px',
          outlineStyle: 'solid'
        },
      // style customization for underlined mode
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`
      },
      '& .ms-TextField.ms-TextField--underlined .ms-TextField-wrapper:hover': {
        border: `1px solid ${palette.skeColor.black}`
      },
      '& .ms-TextField.is-active.ms-TextField--underlined .ms-TextField-wrapper': {
        border: `1px solid ${color}`,
        outlineColor: color,
        outlineWidth: '1px',
        outlineStyle: 'solid'
      },

      '& .ms-TextField.is-active .ms-Label': {
        color: color
      },
      '& .ms-TextField-errorMessage': {
        color: palette.skeColor.error,
        selectors: {
          ':before': {
            fontFamily: MdIcons.fontFace.fontFamily,
            fontSize: 18,
            display: 'block',
            content: errorIcon,
            marginRight: 3
          }
        }
      },
      '& .ms-TextField .ms-TextField-fieldGroup': errorMessage && {
        borderColor: palette.skeColor.error
      },
      ...getFieldTypeStyles(props),
      ...getTextFieldStyles(props)
    }
  });
};
// @ts-ignore TODO
export const getLabelClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  // @ts-ignore TODO
  return mergeStyleSets({
    labelArea: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      flexWrap: 'wrap',
      selectors: {
        ...getCalloutStyles(props)
      }
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
    }
  });
};
// @ts-ignore TODO
export const getErrorClassNames = props => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles({
    color: palette.skeColor.error,
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    position: 'relative',
    display: 'block',
    paddingLeft: '20px',
    paddingTop: 5,
    selectors: {
      '&::before': {
        fontFamily: MdIcons.fontFace.fontFamily,
        fontSize: 18,
        display: 'block',
        content: errorIcon,
        marginRight: 3,
        position: 'absolute',
        left: 0
      }
    }
  });
};
