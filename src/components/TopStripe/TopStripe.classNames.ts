import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, PaletteProps } from '../utils';

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
      display: 'none',
    },
    overlayShow: {
      display: 'block',
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
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 1,
      paddingBottom: 0,
      marginRight: '10px',
      selectors: {
        ':hover': {
          cursor: 'pointer',
          borderBottom: '2px solid rgba(255, 255, 255, 1)',
        },
        ':focus': {
          backgroundColor: palette.skeColor.white,
          color: palette.skeColor.blackAlt,
          transition: 'none',
          outline: 'none',
        },
      },
    },
    chevronIcon: {
      position: 'absolute',
      fontSize: '22px',
      padding: '2px 2px',
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
      minHeight: '40px',
      fontWeight: FontWeights.regular,
      padding: '0 8px',
      selectors: {
        li: { listStyleType: 'none', padding: '6px 16px 8px 16px' },
        'a,i': {
          fontWeight: FontWeights.regular,
          borderWidth: 2,
          //padding: '0px 6px 0px 6px',
          color: palette.skeColor.white,
          borderColor: palette.skeColor.lightGrey,
        },
        'a:hover,a:hover i': {
          color: palette.skeColor.white,
          borderColor: palette.skeColor.white,
        },
        'a:focus, a:focus i': {
          color: palette.skeColor.blackAlt,
          borderColor: palette.skeColor.darkGrey,
          backgroundColor: palette.skeColor.white,
          outline: 'none',
        },
        'a:active,a:active i': {
          color: palette.skeColor.blackAlt,
          backgroundColor: palette.skeColor.white,
        },
        '@media (min-width: 900px)': {
          minHeight: '40px',
          fontSize: FontSizes.small,
        },
      },
    },
    topStripeButton: {
      textAlign: 'left',
      lineHeight: '20px',
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
          borderRightWidth: 0,
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.white,
          borderBottom: '2px solid rgba(255, 255, 255, 1)',
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none',
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none',
        },
      },
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
          transition: 'border-bottom 0.3s',
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.blackAlt,
          borderBottom: '2px solid rgba(255, 255, 255, 1)',
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.blackAlt,
          transition: 'none',
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.blackAlt,
          transition: 'none',
        },
      },
    },
    dropdownContainer: {
      minWidth: '10rem',
      position: 'absolute',
      backgroundColor: palette.skeColor.blackAlt,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      fontWeight: FontWeights.regular,
      paddingInlineStart: 4,
      paddingInlineEnd: 4,
      margin: 0,
      selectors: {
        'li:hover:not(:last-child)': {
          backgroundColor: 'white',
          color: 'black',
        },
        'li:hover a': {
          color: 'black',
        },
        'a,i': {
          borderWidth: 0,
        },
        '@media (max-width: 900px)': {
          minWidth: '100%',
          left: 0,
          padding: 0,
          textAlign: 'center',
        },
      },
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
        },
      },
    },
    icon: {
      position: 'absolute',
      top: 14,
      left: 4,
    },
    menuIcon: {
      fontSize: '16px',
      verticalAlign: 'middle',
    },
    menuCloseButton: {
      width: '100%',
      display: 'block',
      margin: '0 auto',

      selectors: {
        '.ms-Button-flexContainer': {
          justifyContent: 'center',
        },
        '.ms-Button-flexContainer:hover': {
          backgroundColor: palette.skeColor.white,
          color: palette.skeColor.blackAlt + '!important',
        },
        '.ms-Button-flexContainer:hover i': {
          color: palette.skeColor.blackAlt + '!important',
        },
        i: {
          color: palette.skeColor.white + '!important',
        },
      },
    },
  });
};
