import { mergeStyleSets } from '@fluentui/merge-styles';

import designtokenColors from '../../utils/designtokens/_colors.json';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';
import designtokenSpacing from '../../utils/designtokens/_spacing.json';
import designtokenBreakpoints from '../../utils/designtokens/_breakpoints.json';

export const getClassNames = () => {
  return mergeStyleSets({
    topStripeMenuIcon: {
      fontSize: designtokenFontSizes['ske-font-size-m'],
      verticalAlign: 'middle',
      marginRight: '0.05rem',
    },
    topStripeMenuShowChevron: {
      paddingRight: '1.375rem !important',
    },
    topStripeMenuTitle: {
      textDecoration: 'underline',
      display: 'inline',
    },
    topStripeMenuChevronIcon: {
      position: 'absolute',
      fontSize: designtokenFontSizes['ske-font-size-xl'],
      top: '0.6rem',
    },
    topStripeMenuDropdownContainer: {
      zIndex: '200',
      position: 'absolute',
      top: '2.625rem',
      backgroundColor: designtokenColors['ske-color-black-100'],
      minWidth: '100vw',
      selectors: {
        ul: {
          padding: 0,
          margin: 0,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          marginLeft: designtokenSpacing['ske-spacing-md'],
        },
        'a, i': {
          borderWidth: 0,
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']}) and (max-width: 1023px)`]: {
          left: 'auto',
          right: 0,
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          top: '2.375rem',
          padding: `${designtokenSpacing['ske-spacing-md']} ${designtokenSpacing['ske-spacing-lg']}`,
          minWidth: 'auto',
        },
      },
    },
    topStripeMenuDropdownElementContainer: {
      position: 'relative',
    },
    topStripeMenuDropdownElement: {
      fontSize: designtokenFontSizes['ske-font-size-s'],
      background: 'none',
      border: 'none',
      color: 'inherit',
      textDecoration: 'none !important',
      transition: 'none',
    },
    topStripeMenuDropdownElementIcon: {
      position: 'absolute',
      top: 14,
      left: 4,
    },
    topStripeMenuDropdownCloseButton: {
      width: '100%',
      display: 'block',
      margin: '0 auto',
      selectors: {
        '.ms-Button-flexContainer': {
          justifyContent: 'center',
        },
        ':hover, :focus, :hover i, :focus i': {
          backgroundColor: `${designtokenColors['ske-color-white-100']} !important`,
          color: `${designtokenColors['ske-color-black-100']} !important`,
          outline: 'none',
        },
        i: {
          color: `${designtokenColors['ske-color-white-100']} !important`,
        },
      },
    },
  });
};
