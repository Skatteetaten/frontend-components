import { mergeStyleSets } from '@fluentui/merge-styles';

import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';

export const getClassNames = (props) => {
  return mergeStyleSets({
    mainContainer: {
      border: '2px solid '.concat(designtokenColors['ske-color-status-error']),
      display: 'flex',
      backgroundColor: designtokenColors['ske-color-white-100'],
      justifyContent: 'flex-start',
      width: 'fit-content',
      selectors: {
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: designtokenFontSizes['ske-font-size-l'],
          margin: '0',
        },
      },
      ul: {
        padding: 0,
      },
      li: {
        display: 'block',
        cursor: 'pointer',
        lineHeight: designtokenFontSizes['ske-line-height-s'],
      },
    },
    iconArea: {
      width: '4rem',
      backgroundColor: designtokenColors['ske-color-status-error'],
      textAlign: 'center',
      selectors: {
        [`@media (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          width: '2rem',
        },
      },
    },
    errorIcon: {
      fontSize: '2.4rem',
      color: designtokenColors['ske-color-white-100'],
      padding: '6px 8px 8px 4px',
      selectors: {
        [`@media (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          fontSize: '1.4rem',
        },
      },
    },
    errorListContainer: {
      padding: `${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-xl']}`,
      selectors: {
        [`@media (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          padding: '8px 12px',
        },
      },
    },
  });
};
