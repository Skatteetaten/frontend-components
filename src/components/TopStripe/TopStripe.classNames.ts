import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    overlay: {
      zIndex: 100,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      minHeight: '200px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transition: '0.3s ease-out',
      display: 'none'
    },
    overlayShow: {
      display: 'block'
    },
    plainButton: {
      fontSize: FontSizes.small,
      background: 'inherit',
      border: 'inherit',
      borderWidth: 2,
      borderBottom: '2px solid ' + palette.skeColor.lightGrey,
      color: palette.skeColor.white,
      textDecoration: 'none !important',
      transition: 'none',
      paddingTop: 1,
      paddingBottom: 0,
      selectors: {
        ':hover': {
          cursor: 'pointer',
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        ':focus': {
          backgroundColor: palette.skeColor.white,
          color: palette.skeColor.blackAlt,
          transition: 'none'
        }
      }
    },
    topStripeContainer: {
      margin: 0,
      zIndex: 150,
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: palette.skeColor.blackAlt,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      height: 30,
      fontWeight: FontWeights.regular,
      padding: '0 8px',
      selectors: {
        li: { listStyleType: 'none', padding: '14px 16px 16px 16px' },
        'a,i': {
          fontWeight: FontWeights.regular,
          borderWidth: 2,
          padding: '0px 6px 0px 6px',
          color: palette.skeColor.white,
          borderColor: palette.skeColor.lightGrey
        },
        'a:hover,a:hover i': {
          color: palette.skeColor.white,
          borderColor: palette.skeColor.white
        },
        'a:focus, a:focus i': {
          color: palette.skeColor.blackAlt,
          borderColor: palette.skeColor.darkGrey,
          backgroundColor: palette.skeColor.white,
          outline: 'none'
        },
        'a:active,a:active i': {
          color: palette.skeColor.blackAlt,
          backgroundColor: palette.skeColor.white
        },
        '@media (min-width: 900px)': {
          height: '40px',
          fontSize: FontSizes.small
        }
      }
    },
    menuButton: {
      selectors: {
        '.ms-Button-label': {
          margin: '2px 0 0 0',
          padding: 0,

          fontSize: FontSizes.small,
          color: palette.skeColor.white,
          textDecoration: 'none !important',
          borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
          transition: 'border-bottom 0.3s',
          borderLeftWidth: 0,
          borderRightWidth: 0
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.white,
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none'
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none'
        }
      }
    },
    menuButtonActive: {
      borderRadius: 0,
      backgroundColor: palette.skeColor.white,
      selectors: {
        '.ms-Button-label': {
          fontSize: FontSizes.small,
          color: palette.skeColor.blackAlt,
          textDecoration: 'none !important',
          padding: '1px 0px 0 0px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
          transition: 'border-bottom 0.3s'
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.blackAlt,
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.blackAlt,
          transition: 'none'
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.blackAlt,
          transition: 'none'
        }
      }
    },
    dropdownContainer: {
      minWidth: '100px',
      position: 'absolute',
      backgroundColor: palette.skeColor.blackAlt,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      fontWeight: FontWeights.regular,
      paddingInlineStart: 10,
      paddingInlineEnd: 10,
      selectors: {
        'li:hover:not(:last-child)': {
          backgroundColor: 'white',
          color: 'black'
        },
        'li:hover a': {
          color: 'black'
        },
        'a,i': {
          borderWidth: 0
        }
      }
    },
    dropDownLink: {
      position: 'relative',
      selectors: {
        'i, a, button': {
          fontSize: FontSizes.small,
          background: 'none',
          border: 'none',
          color: 'inherit',
          textDecoration: 'none !important',
          transition: 'none',
          paddingTop: 1,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0
        }
      }
    },
    icon: {
      position: 'absolute',
      left: 0
    },
    menuCloseButton: {
      display: 'block',
      margin: '0 auto',
      selectors: {
        i: {
          color: palette.skeColor.white + '!important'
        },
        'i:hover': {
          backgroundColor: palette.skeColor.white,
          color: palette.skeColor.blackAlt + '!important'
        }
      }
    }
  });
};
