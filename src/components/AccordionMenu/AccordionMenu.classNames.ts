import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';
import { FontSizes, IconFontSizes } from '../utils/fonts';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    accordionMenu: {
      padding: 0,
      margin: '0 !important',
      selectors: {
        li: {
          listStyle: 'none',
          selectors: {
            '&:last-child': {
              borderBottom: `2px solid ${palette.skeColor.grey}`
            }
          }
        }
      }
    },
    menuItem: {
      backgroundColor: palette.skeColor.white,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      border: 'none',
      borderTop: `2px solid ${palette.skeColor.grey}`,
      textAlign: 'left',
      padding: '0 15px',
      selectors: {
        '&:hover, &:focus': {
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none',
          borderTop: `2px solid ${palette.skeColor.grey}`,
          cursor: 'pointer'
        }
      }
    },
    menuItemIsOpen: {
      border: 'none'
    },
    menuItemTitle: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      fontSize: FontSizes.medium,
      margin: '0 15px 0 15px',
      padding: '10px 0'
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      border: `2px solid ${palette.skeColor.blackAlt}`,
      borderRadius: '50%',
      margin: '8px 0 8px 0',
      fontSize: IconFontSizes.xlarge
    },

    toggleButton: {
      color: palette.skeColor.blue,
      width: '26px',
      height: '26px',
      border: '3px solid transparent',
      borderRadius: '50%',
      selectors: {
        i: {
          fontSize: IconFontSizes.xlarge,
          paddingLeft: '1px'
        },
        ':hover': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue
        }
      }
    },
    toggleButtonOpen: {
      color: palette.skeColor.blue,
      width: '26px',
      height: '26px',
      border: '3px solid transparent',
      borderRadius: '50%',
      selectors: {
        i: {
          transform: 'rotate(180deg)',
          paddingLeft: '2px'
        },
        ':hover': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue
        }
      }
    },
    content: {
      borderTop: `2px solid ${palette.skeColor.grey}`,
      padding: 15,
      background: palette.skeColor.lightBeige,
      display: 'block'
    }
  });
};
