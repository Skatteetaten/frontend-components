import { SearchMenuProps } from './SearchMenu';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export const getClassNames = (props: SearchMenuProps) => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    searchBoxWrapper: {
      backgroundColor: palette.skeColor.whiteGrey,
      padding: '12px',
      border: `1px solid ${palette.skeColor.black}`,
      selectors: {
        '.ms-SearchBox': {
          border: 'inherit'
        }
      }
    },
    searchMenuDropdown: {
      marginTop: '-16px',
      paddingTop: '16px',
      selectors: {
        ul: {
          listStyleType: 'none',
          padding: 0
        },
        li: {
          paddingLeft: '30px',
          cursor: 'pointer',
          color: `${palette.skeColor.blackAlt} !important`,
          selectors: {
            ':hover': {
              background: palette.skeColor.lightBlue,
              textDecoration: 'underline'
            },
            ':active': {
              background: palette.skeColor.lightBlue,
              textDecoration: 'none'
            },
            ':focus': {
              background: palette.skeColor.lightBlue,
              textDecoration: 'underline'
            }
          }
        }
      }
    },
    typeCheckbox: {
      cursor: 'default !important'
    }
  });
};
