import { mergeStyleSets } from '@fluentui/merge-styles';

import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';

export const getClassNames = (props) => {
  const whiteBackground = designtokenColors['ske-color-white-100'];
  const hoverBackground = designtokenColors['ske-color-interactive-light'];
  const color = designtokenColors['ske-color-interactive'];
  const overrideMaxWidth = props.containerMaxWidth;

  // @ts-ignore TODO
  return mergeStyleSets({
    topcontainer: {
      width: '100%',
      marginTop: '40px',
      zIndex: 2,
      visibility: 'hidden',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-lg']})`]: {
          position: 'fixed',
          top: 0,
          right: 0,
        },
      },
    },
    container: {
      position: 'relative !important',
      margin: '0 auto',
      opacity: 0,
      transition: '0.2s',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-xl']})`]: {
          maxWidth: overrideMaxWidth
            ? overrideMaxWidth
            : `${designtokenBreakpoints['ske-breakpoint-xl']}`,
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-xxl']})`]: {
          maxWidth: overrideMaxWidth
            ? overrideMaxWidth
            : `${designtokenBreakpoints['ske-breakpoint-xxl']}`,
        },
      },
    },
    box: {
      marginTop: 0,
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-lg']})`]: {
          top: '80vh',
          position: 'absolute',
          right: 0,
        },
      },
    },
    actionButton: {
      display: 'block',
      textDecoration: 'none !important',
      textAlign: 'center',
      margin: `${designtokenSpacing['ske-spacing-xl']} auto`,
      selectors: {
        '.ms-Button-flexContainer': {
          flexDirection: 'initial',
          justifyContent: 'center',
        },
        ':hover .ms-Button-flexContainer > div': {
          backgroundColor: hoverBackground,
        },
      },
    },
    icon: {
      fontSize: '1.375rem',
      color: color,
      display: 'inline',
      lineHeight: '0.8',
    },
    iconFixateContainer: {
      background: whiteBackground,
      borderColor: color,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '50%',
      height: '30px',
      width: '30px',
      position: 'absolute',
    },
    iconFixate: {
      position: 'absolute',
      top: '0.4em',
      left: '0.25em',
    },
    label: {
      fontSize: designtokenFontSizes['ske-font-size-icon-s'],
      fontWeight: 700,
      textAlign: 'center',
      marginTop: '40px',
      backgroundColor: 'white !important',
      borderRadius: '10px',
      color: color,
      padding: '2px 15px',
      zIndex: 1,
    },
    vis: {
      visibility: 'visible',
      opacity: '1 !important',
      transform: 'translateY(-15px)',
    },
  });
};
