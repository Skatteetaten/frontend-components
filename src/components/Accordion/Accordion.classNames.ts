import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';
import designtokenColors from '../utils/designtokens/_colors.json';

export function getClassNames() {
  const paddingAccordionContent = `0 0 ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-md']}`;
  return mergeStyleSets({
    containerStep: {
      margin: '0 auto',
    },
    wrapperStep: {
      position: 'relative',
    },
    accordion: {
      position: 'relative',
      backgroundColor: designtokenColors['ske-color-white-100'],
      marginBottom: designtokenSpacing['ske-spacing-lg'],
      selectors: {
        '& hr': {
          margin: 0,
          border: 'solid',
          borderWidth: '1px',
          color: designtokenColors['ske-color-grey-30'],
        },
      },
    },
    content: {
      backgroundColor: designtokenColors['ske-color-white-100'],
      padding: paddingAccordionContent,
      selectors: {
        '&:focus': {
          background: designtokenColors['ske-color-blue-10'],
        },
      },
    },
    heading: {
      fontSize: designtokenFontSizes['ske-font-size-icon-l'],
      margin: '0',
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: designtokenColors['ske-color-white-100'],
      border: 'solid',
      width: designtokenSpacing['ske-spacing-xxl'],
      height: designtokenSpacing['ske-spacing-xxl'],
      borderRadius: '50%',
      borderWidth: '2px',
      borderColor: designtokenColors['ske-color-black-100'],
      fontSize: designtokenFontSizes['ske-font-size-l'],
      fontWeight: designtokenFontSizes['ske-font-weight-bold'],
      zIndex: 10,
      marginTop: designtokenSpacing['ske-spacing-lg'],

      selectors: {
        [`@media (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          fontSize: designtokenFontSizes['ske-font-size-m'],
          width: designtokenSpacing['ske-spacing-xl'],
          height: designtokenSpacing['ske-spacing-xl'],
        },
      },
    },
    stepLine: {
      display: 'block',
      position: 'absolute',
      width: 2,
      backgroundColor: designtokenColors['ske-color-grey-30'],
      top: designtokenSpacing['ske-spacing-xxl'],
      left: '0.8rem',
      height: '100%',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          top: designtokenSpacing['ske-spacing-xl'],
          left: designtokenSpacing['ske-spacing-lg'],
          marginLeft: 1,
        },
      },
    },
    toggleButton: {
      width: '100%',
      border: 'none',
      textAlign: 'left',
      color: designtokenColors['ske-color-interactive'],
      fontSize: designtokenFontSizes['ske-font-size-m'],
      fontWeight: designtokenFontSizes['ske-font-weight-bold'],
      padding: `${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-md']}`,
      background: 'none',
      position: 'relative',
      cursor: 'pointer',
      marginTop: 0,
      marginBottom: 0,

      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          fontSize: designtokenFontSizes['ske-font-size-icon-l'],
        },
        '&:hover, &:focus': {
          background: designtokenColors['ske-color-interactive-light'],
        },
        '&:focus': {
          outline: 'none',
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: designtokenFontSizes['ske-font-size-icon-l'],
          margin: '0',
        },
        '& i': {
          alignSelf: 'flex-start',
          transition: '.2s',
          marginTop: '-2px',
          fontSize: designtokenFontSizes['ske-font-size-icon-xl'],
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: designtokenFontSizes['ske-font-size-icon-xxl'],
            },
          },
        },
      },
    },
    toggleButtonOpen: {
      selectors: {
        '& i': {
          transform: 'rotate(180deg)',
        },
      },
    },
    toggleButtonContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subtitle: {
      display: 'block',
      color: designtokenColors['ske-color-black-100'],
      width: '100%',
      border: 'none',
      textAlign: 'left',
      fontSize: designtokenFontSizes['ske-font-size-l'],
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      margin: 0,
      padding: `${designtokenSpacing['ske-spacing-md']} ${designtokenSpacing['ske-spacing-sm']} 0 0`,
    },
  });
}
