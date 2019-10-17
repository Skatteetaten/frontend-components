import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '../../components';

// @ts-ignore
export var getClassNames = function getClassNames(props, state) {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    main: {
      margin: '16px'
    },
    article: {
      minWidth: '400px',
      marginLeft: '16px'
    },
    nav: {
      width: '100%',
      margin: '-20px 16px 24px 0',
      borderLeft: `1px solid ${palette.skeColor.lightGrey}`,
      borderRight: `1px solid ${palette.skeColor.lightGrey}`,

      selectors: {
        '.ms-Nav-compositeLink': {
          backgroundColor: palette.skeColor.lightBeige,
          color: palette.skeColor.blackAlt
        },
        '.ms-Nav-compositeLink:hover': {
          backgroundColor: `${palette.skeColor.blue}`,
          textDecoration: 'underline'
        },
        '.ms-Nav-compositeLink:focus': {
          backgroundColor: `${palette.skeColor.blue}`,
          textDecoration: 'underline'
        },
        '.ms-Nav-chevronButton': {
          height: '64px',
          borderBottomWidth: '0',
          borderTop: `1px solid ${palette.skeColor.lightGrey}`,
          borderBottom: `0`,
          marginTop: '0',
          marginBottom: '0'
        },
        '& .ms-Nav-navItems': {
          marginBottom: '0'
        },
        '& .ms-Nav-chevronButton:hover': {
          backgroundColor: palette.skeColor.lightBlue,
          color: palette.skeColor.blackAlt
          //border: 'none'
        },
        '.ms-Nav-chevronButton i': {
          color: palette.skeColor.blackAlt,
          fontSize: '18px'
          //borderBottomWidth: '0'
        },
        '.is-selected .ms-Nav-link': {
          backgroundColor: palette.skeColor.lightBrown,
          border: `1px solid ${palette.skeColor.brown}`,
          color: palette.skeColor.blackAlt
        },
        '.ms-Nav-link::after': {
          borderLeft: 'none'
        },
        '.ms-Nav-chevronButton::after': {
          borderLeft: 'none'
        },
        '& button': {
          fontWeight: '700',
          paddingBottom: '0'
        },
        '& button i': {
          fontSize: '20px',
          fontWeight: '700'
        },
        '& ul': {
          marginTop: '0px'
        },
        '.ms-Nav': {
          display: state.isHidden === true ? 'none' : 'block',
          backgroundColor: palette.skeColor.white,

          //minWidth: '195px',
          selectors: {
            '@media (min-width: 1023px)': {
              display: 'block'
            }
          }
        }
      }
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
          justifyContent: 'flex-end'
        },
        '@media (min-width: 1022px)': {
          display: 'none'
        }
      }
    }
  });
};
