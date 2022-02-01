import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';

export const getClassNames = (contentWidth = '100%') => {
  return mergeStyleSets({
    topStripe: {
      position: 'relative',
    },
    background: {
      position: 'relative',
      backgroundColor: designtokenColors['ske-color-black-100'],
      zIndex: 125,
    },
    overlay: {
      zIndex: 100,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      minHeight: '12.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transition: '0.3s ease-out',
      display: 'none',
    },
    overlayShow: {
      display: 'block',
    },
    topStripeContainer: {
      zIndex: 150,
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'center',
      backgroundColor: designtokenColors['ske-color-black-100'],
      color: designtokenColors['ske-color-white-100'],
      fontSize: designtokenFontSizes['ske-font-size-s'],
      padding: 0,
      selectors: {
        li: {
          listStyleType: 'none',
          position: 'relative',
        },
        a: {
          fontWeight: designtokenFontSizes['ske-font-weight-regular'],
          color: designtokenColors['ske-color-white-100'],
          border: 'none',
          textDecoration: 'underline',
        },
        'a:active, a:active i': {
          color: designtokenColors['ske-color-black-100'],
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          justifyContent: 'flex-end',
          margin: `0 ${designtokenSpacing['ske-spacing-md']}`,
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-lg']})`]: {
          maxWidth: contentWidth,
        },
      },
    },
    loggedInUser: {
      order: '-1',
      width: '100%',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          order: 0,
          width: 'auto',
        },
      },
    },
    hideOnMobile: {
      display: 'none',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          display: 'block',
        },
      },
    },
    topStripeElement: {
      maxHeight: '40px',
      selectors: {
        a: {
          display: 'block',
          padding: '0.75rem 0.5rem',
          borderBottom: 'none !important',
        },
        'a:focus, a:hover, > span:hover > a': {
          color: designtokenColors['ske-color-black-100'],
          backgroundColor: designtokenColors['ske-color-white-100'],
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          marginLeft: designtokenSpacing['ske-spacing-md'],
        },
      },
    },
    topStripeUser: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      padding: designtokenSpacing['ske-spacing-md'],
      selectors: {
        '> i': {
          fontSize: designtokenFontSizes['ske-font-size-icon-l'],
          alignSelf: 'start',
        },
      },
    },
  });
};
