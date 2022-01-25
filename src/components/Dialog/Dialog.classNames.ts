import { mergeStyleSets } from '@fluentui/merge-styles';
import { DialogProps } from './Dialog.types';
import dekor from './assets/footerDekor.svg';
import logo from './assets/ske-logo.svg';

import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';

function setMinMaxWidth(props: DialogProps) {
  return {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
  };
}

function getMainBackgroundStyle(props: DialogProps) {
  if (props.layoutStyle === 'important') {
    return {
      background: `url(${dekor})`,
      backgroundSize: 'calc(100% + 1px) 20px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
      paddingBottom: 30,
      backgroundColor: designtokenColors['ske-color-white-100'],
      border: 'none !important',
    };
  } else {
    return {};
  }
}

function getHeaderBackgroundStyle(props: DialogProps) {
  if (props.layoutStyle === 'important') {
    const logoPlacement = props.title ? '-30px' : '-18px';
    return {
      backgroundImage: `url(${logo})`,
      backgroundSize: '40px 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `top ${logoPlacement} left 20px`,
      paddingTop: 70,
    };
  } else {
    return {};
  }
}

export const getClassNames = function getClassNames(
  props: DialogProps,
  tag = 'SKE'
) {
  let primaryColor;

  switch (tag) {
    case 'INK': {
      primaryColor = designtokenColors['ske-color-green-100'];
      break;
    }
    case 'LSO': {
      primaryColor = designtokenColors['ske-color-black-100'];
      break;
    }
    default: {
      primaryColor = designtokenColors['ske-color-burgundy-100'];
      break;
    }
  }

  const overflows = props.tabletContentOverflows;

  return mergeStyleSets({
    main: {
      displayName: `SkeDialog`,
      position: 'absolute',
      selectors: {
        '& .ms-Dialog-main': {
          height: overflows ? '100%' : '',
          selectors: {
            [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
              ...setMinMaxWidth(props),
              borderColor: primaryColor,
              borderStyle: 'solid',
              borderWidth: '4px',
            },
          },
          ...getMainBackgroundStyle(props),
        },
        '& .ms-Modal-scrollableContent': {
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          selectors: {
            [`@media only screen and (min-device-width: 768px) and (max-device-width: ${'$ske-breakpoint-lg'})`]: {
              //iPad scrolling fix
              position: overflows ? 'absolute' : 'relative',
              top: 0,
              bottom: 0,
              minWidth: props.minWidth,
              maxWidth: props.maxWidth,
            },
          },
        },
        '& .ms-Dialog-header': {
          ...getHeaderBackgroundStyle(props),
        },
        '& .ms-Button.ms-Dialog-button--close i': {
          fontWeight: designtokenFontSizes['ske-font-weight-bold'],
          fontSize: designtokenFontSizes['ske-font-size-icon-l'],
          opacity: 1,
        },
        '& .ms-Button.ms-Dialog-button--close:hover i': {
          fontWeight: designtokenFontSizes['ske-font-weight-bold'],
          fontSize: designtokenFontSizes['ske-font-size-icon-l'],
          opacity: 0.7,
          transition: 'opacity 300ms ease-out',
        },
        '& .ms-Dialog-title': {
          fontSize: designtokenFontSizes['ske-font-size-xl'],
          fontWeight: designtokenFontSizes['ske-font-weight-semibold'],
          padding:
            props.layoutStyle === 'airy'
              ? '128px 64px 0 64px'
              : '20px 50px 20px 20px',
        },
        '& .ms-Dialog-subText': {
          fontSize: designtokenFontSizes['ske-font-size-m'],
        },
        '& .ms-Overlay': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        '& .ms-Dialog-inner': {
          padding:
            props.layoutStyle === 'airy' ? '0 64px 64px ' : '0 20px 20px 20px',
        },
      },
    },
    helpButton: {
      displayName: 'SkeHelpButton',
      zIndex: 100,
      position: 'absolute',
      bottom: '-60px',
      left: '-15px',
    },
  });
};
