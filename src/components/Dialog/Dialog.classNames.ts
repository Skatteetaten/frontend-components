import { getTheme } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

const dekor = require('./assets/footerDekor.svg');
const logo = require('./assets/ske-logo.svg');
// @ts-ignore TODO
function setMinMaxWidth(props) {
  return {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth
  };
}
// @ts-ignore TODO
function getMainBackgroundStyle(props) {
  const palette = getTheme().palette as PaletteProps;

  if (props.layoutStyle === 'important') {
    return {
      background: `url(${dekor})`,
      backgroundSize: 'calc(100% + 1px) 20px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
      paddingBottom: 30,
      backgroundColor: palette.white,
      border: 'none !important'
    };
  } else {
    return {};
  }
}
// @ts-ignore TODO
function getHeaderBackgroundStyle(props) {
  if (props.layoutStyle === 'important') {
    return {
      backgroundImage: `url(${logo})`,
      backgroundSize: '40px 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top -30px left 20px',
      paddingTop: 70
    };
  } else {
    return {};
  }
}
// @ts-ignore TODO
export var getClassNames = function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    main: {
      displayName: `SkeDialog`,
      position: 'absolute',
      selectors: {
        '& .ms-Dialog-main': {
          selectors: {
            '@media (min-width: 480px)': {
              ...setMinMaxWidth(props),
              borderColor: palette.skeColor.burgundy,
              borderStyle: 'solid',
              borderWidth: '4px'
            }
          },
          ...getMainBackgroundStyle(props)
        },
        '& .ms-Dialog-header': {
          ...getHeaderBackgroundStyle(props)
        },
        '& .ms-Button.ms-Dialog-button--close i': {
          fontWeight: FontWeights.bold,
          fontSize: FontSizes.icon,
          opacity: 1
        },
        '& .ms-Button.ms-Dialog-button--close:hover i': {
          fontWeight: FontWeights.bold,
          fontSize: FontSizes.icon,
          opacity: 0.7,
          transition: 'opacity 300ms ease-out'
        },
        '& .ms-Dialog-title': {
          fontSize: FontSizes.xLarge,
          fontWeight: FontWeights.semibold,
          padding: props.layoutStyle === 'airy' ? '128px 64px 0 64px' : 20
        },
        '& .ms-Dialog-subText': {
          fontSize: FontSizes.medium
        },
        '& .ms-Overlay': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        '& .ms-Dialog-inner': {
          padding:
            props.layoutStyle === 'airy' ? '0 64px 64px ' : '0 20px 20px 20px'
        }
      }
    },
    helpButton: {
      displayName: 'SkeHelpButton',
      zIndex: 100,
      position: 'absolute',
      bottom: '-60px',
      left: '-15px'
    }
  });
};
