import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';
import designtokenBreakpoints from '../../utils/designtokens/_breakpoints.json';
import designtokenSpacing from '../../utils/designtokens/_spacing.json';

export const getClassNames = () => {
  return mergeStyleSets({
    languageButton: {
      paddingLeft: '2.25rem !important',
      width: '100%',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          paddingLeft: `${designtokenSpacing['ske-spacing-xl']} !important`,
        },
      },
    },
    languageButtonContent: {
      fontSize: designtokenFontSizes['ske-font-size-l'],
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          fontSize: `${designtokenFontSizes['ske-font-size-s']}`,
        },
      },
    },
    languageButtonIsNotSelected: {
      fontWeight: ` ${designtokenFontSizes['ske-font-weight-bold']}`,
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          fontWeight: `${designtokenFontSizes['ske-font-weight-regular']}`,
        },
      },
    },
    checkIcon: {
      left: '0',
      width: '0.875rem',
      margin: `0 ${designtokenSpacing['ske-spacing-md']}`,
      fontSize: designtokenFontSizes['ske-font-size-xl'],
      display: 'inline',
      position: 'absolute',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          fontSize: designtokenFontSizes['ske-font-size-m'],
          padding: `0 ${designtokenSpacing['ske-spacing-sm']}`,
          left: 'auto',
          width: 'auto',
          marginLeft: '-1.5rem',
        },
      },
    },
    languageButtonFlag: {
      marginRight: designtokenSpacing['ske-spacing-sm'],
      verticalAlign: 'middle',
    },
    languageButtonText: {
      marginLeft: designtokenSpacing['ske-spacing-sm'],
    },
  });
};
