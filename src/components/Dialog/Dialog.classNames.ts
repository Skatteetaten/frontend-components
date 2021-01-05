import { getTheme } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';
import { DialogProps } from './Dialog';

const dekor = require('./assets/footerDekor.svg');
const logo = require('./assets/ske-logo.svg');

function setMinMaxWidth(props: DialogProps) {
  return {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth
  };
}

function getMainBackgroundStyle(props: DialogProps) {
  const palette = getTheme().palette as PaletteProps;

  if (props.layoutStyle === 'important') {
    return {
      background: `url(${dekor.default})`,
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

function getHeaderBackgroundStyle(props: DialogProps) {
  if (props.layoutStyle === 'important') {
    const logoPlacement = props.title ? '-30px' : '-18px';
    return {
      backgroundImage: `url(${logo.default})`,
      backgroundSize: '40px 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `top ${logoPlacement} left 20px`,
      paddingTop: 70
    };
  } else {
    return {};
  }
}

export const getClassNames = function getClassNames(props: DialogProps) {
  const palette = getTheme().palette as PaletteProps;

  const overflows = props.tabletContentOverflows;

  return mergeStyleSets({
    main: {
      displayName: `SkeDialog`,
      position: 'absolute',
      selectors: {
        '& .ms-Dialog-main': {
          height: overflows ? '100%' : '',
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
        '& .ms-Modal-scrollableContent': {
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          selectors: {
            '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
              //iPad scrolling fix
              position: overflows ? 'absolute' : 'relative',
              top: 0,
              bottom: 0,
              minWidth: props.minWidth,
              maxWidth: props.maxWidth
            }
          }
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
          padding:
            props.layoutStyle === 'airy'
              ? '128px 64px 0 64px'
              : '20px 50px 20px 20px'
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
