import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '../utils/fonts';
import { isUndefined } from 'util';
import { PaletteProps } from '..';
// @ts-ignore TODO
function getCalloutStyles(props) {
  const inputSizeLarge = props.inputSize === 'large';
  const calloutFloating = props.calloutFloating;

  //inline callout layout
  if (
    (inputSizeLarge && isUndefined(calloutFloating)) ||
    (!isUndefined(calloutFloating) && !calloutFloating)
  ) {
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
        margin: '0'
      }
    };
  }
}
// @ts-ignore TODO
export const getClassNames = props => {
  const palette = getTheme().palette as PaletteProps;

  // @ts-ignore TODO
  return mergeStyleSets({
    labelArea: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      fontSize: FontSizes.small,
      selectors: {
        ...getCalloutStyles(props)
      }
    },
    label: {
      //flexGrow: 1,
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
    errorIcon: {
      position: 'absolute',
      left: -25,
      bottom: -30,
      selectors: {
        '& i': {
          color: palette.skeColor.pink,
          fontSize: 'large'
        }
      }
    }
  });
};
