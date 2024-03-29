import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';

export const getClassNames = function getClassNames(props, state) {
  const palette = getTheme().palette;

  return mergeStyleSets({
    main: {
      margin: '16px',
      selectors: {
        '@media (max-width: 1024px)': {
          marginLeft: '0px',
          marginRight: '0px',
        },
      },
    },
    article: {
      marginLeft: '16px',
      selectors: {
        '@media (max-width: 1023px)': {
          marginLeft: '0',
        },
        h1: {
          fontSize: '42px',
          selectors: {
            '@media (max-width: 640px)': {
              fontSize: '24px',
            },
          },
        },
        h3: {
          marginTop: '24px',
          marginBottom: '4px',
        },
        ul: {
          listStyleType: 'square',
        },
        'p > a, li > a': {
          color: palette.skeColor.blue,
          textDecoration: 'none',
          fontWeight: 500,
          paddingBottom: '1px',
          borderBottom: `1px solid ${palette.skeColor.blue}`,
          selectors: {
            ':hover': {
              color: palette.skeColor.darkBlue,
              borderBottom: '2px solid ' + palette.skeColor.darkBlue,
              backgroundColor: palette.skeColor.lightBlue,
            },
            ':focus': {
              color: palette.skeColor.darkBlue,
              borderBottom: '2px solid ' + palette.skeColor.darkBlue,
              backgroundColor: palette.skeColor.lightBlue,
              outline: 'none',
            },
          },
        },
      },
    },
    navSmallScreenButton: {
      marginBottom: '24px',
      textAlign: 'right',
      selectors: {
        '@media (min-width: 1024px)': {
          display: 'none',
        },
      },
    },
    navSmallScreen: {
      display: state.showNavigation === true ? 'block' : 'none',
      selectors: {
        '@media (min-width: 1024px)': {
          display: 'none',
        },
      },
    },
    navDesktop: {
      display: 'none',
      selectors: {
        '@media (min-width: 1024px)': {
          display: 'block',
        },
      },
    },
    navComponents: {
      width: '100%',
      margin: '-20px 16px 24px 0',
      borderLeft: `1px solid ${palette.skeColor.lightGrey}`,
      borderRight: `1px solid ${palette.skeColor.lightGrey}`,

      selectors: {
        '.ms-Nav-compositeLink': {
          backgroundColor: palette.skeColor.lightBeige,
          color: palette.skeColor.blackAlt,
        },
        '.ms-Nav-compositeLink:hover': {
          backgroundColor: `${palette.skeColor.blue}`,
          textDecoration: 'underline',
        },
        '.ms-Nav-compositeLink:focus': {
          backgroundColor: `${palette.skeColor.blue}`,
          textDecoration: 'underline',
        },
        '.ms-Nav-chevronButton': {
          height: '64px',
          borderBottomWidth: '0',
          borderTop: `1px solid ${palette.skeColor.lightGrey}`,
          borderBottom: `0`,
          marginTop: '0',
          marginBottom: '0',
        },
        '& .ms-Nav-navItems': {
          marginBottom: '0',
        },
        '& .ms-Nav-chevronButton:hover': {
          backgroundColor: palette.skeColor.lightBlue,
          color: palette.skeColor.blackAlt,
        },
        '.ms-Nav-chevronButton i': {
          color: palette.skeColor.blackAlt,
          fontSize: '18px',
        },
        '.is-selected .ms-Nav-link': {
          backgroundColor: palette.skeColor.lightBrown,
          border: `1px solid ${palette.skeColor.brown}`,
          color: palette.skeColor.blackAlt,
        },
        '.ms-Nav-link::after': {
          borderLeft: 'none',
        },
        '.ms-Nav-chevronButton::after': {
          borderLeft: 'none',
        },
        '& button': {
          fontWeight: '700',
          paddingBottom: '0',
        },
        '& button i': {
          fontSize: '20px',
          fontWeight: '700',
        },
        '& ul': {
          marginTop: '0px',
        },
        '.ms-Nav': {
          display: state.isHidden === true ? 'none' : 'block',
          backgroundColor: palette.skeColor.white,

          selectors: {
            '@media (min-width: 1024px)': {
              display: 'block',
            },
          },
        },
      },
    },
    navMobile: {
      borderBottom: `3px solid ${palette.skeColor.burgundy}`,
      marginBottom: '24px',
      width: '100%',
      display: 'block',
      borderLeft: `1px solid ${palette.skeColor.white}`,
      borderRight: `1px solid ${palette.skeColor.white}`,

      selectors: {
        '& .ms-Button-flexContainer': {
          justifyContent: 'flex-end',
        },
        '@media (min-width: 1024px)': {
          display: 'none',
        },
      },
    },
  });
};
