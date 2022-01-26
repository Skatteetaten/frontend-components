import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, IconFontSizes, PaletteProps } from '../utils';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';

export function getClassNames() {
  const palette = getTheme().palette as PaletteProps;
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
      backgroundColor: palette.skeColor.white,
      marginBottom: 20,
      selectors: {
        '& hr': {
          margin: 0,
          border: 'solid',
          borderWidth: '1px',
          color: palette.skeColor.lightGrey,
        },
      },
    },
    content: {
      backgroundColor: palette.skeColor.white,
      padding: paddingAccordionContent,
      selectors: {
        '&:focus': {
          background: palette.skeColor.backgroundFocusColor,
        },
      },
    },
    heading: {
      fontSize: FontSizes.largePlus,
      margin: '0',
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.skeColor.white,
      border: 'solid',
      width: designtokenSpacing['ske-spacing-xxl'],
      height: designtokenSpacing['ske-spacing-xxl'],
      borderRadius: '50%',
      borderWidth: '2px',
      borderColor: palette.skeColor.black,
      fontSize: FontSizes.large,
      fontWeight: FontWeights.bold,
      zIndex: 10,
      marginTop: designtokenSpacing['ske-spacing-lg'],

      selectors: {
        [`@media (max-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          fontSize: FontSizes.medium,
          width: designtokenSpacing['ske-spacing-xl'],
          height: designtokenSpacing['ske-spacing-xl'],
        },
      },
    },
    stepLine: {
      display: 'block',
      position: 'absolute',
      width: 2,
      backgroundColor: palette.skeColor.lightGrey,
      top: designtokenSpacing['ske-spacing-xxl'],
      left: '0.8rem',
      height: '100%',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          top: '1.5rem',
          left: designtokenSpacing['ske-spacing-lg'],
          marginLeft: 1,
        },
      },
    },
    toggleButton: {
      width: '100%',
      border: 'none',
      textAlign: 'left',
      color: palette.skeColor.blue,
      fontSize: FontSizes.medium,
      fontWeight: FontWeights.bold,
      padding: '16px 16px 16px 8px',
      background: 'none',
      position: 'relative',
      cursor: 'pointer',
      marginTop: '0px',
      marginBottom: '0px',

      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          fontSize: FontSizes.largePlus,
        },
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue,
        },
        '&:focus': {
          outline: 'none',
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: FontSizes.largePlus,
          margin: '0',
        },
        '& i': {
          alignSelf: 'flex-start',
          transition: '.2s',
          marginTop: '-2px',
          fontSize: IconFontSizes.xlarge,
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: IconFontSizes.xxlarge,
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
      color: palette.skeColor.blackAlt,
      width: '100%',
      border: 'none',
      textAlign: 'left',
      fontSize: FontSizes.large,
      fontWeight: FontWeights.regular,
      margin: 0,
      padding: '8px 5px 0 0',
    },
  });
}
