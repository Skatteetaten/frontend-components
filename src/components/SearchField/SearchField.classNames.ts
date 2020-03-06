import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '..';
import { PaletteProps } from '..';
import { SearchFieldProps } from './SearchField';

export const getClassNames = (props: SearchFieldProps) => {
  const palette = getTheme().palette as PaletteProps;
  const { border, searchFieldSize } = props;
  const largeSize = searchFieldSize === 'large';
  const standardSize = searchFieldSize === 'standard';

  return mergeStyleSets({
    blackAlt: {
      color: `${palette.skeColor.blackAlt} !important`
    },
    searchList: {
      listStyleType: 'none !important',
      padding: '0px',
      marginTop: '0px',
      marginBottom: '11px'
    },
    searchListDropdown: {
      width: '100% - 2px',
      top: '-13px',
      border: `1px solid ${palette.skeColor.black}`,
      borderTop: 0,
      selectors: {
        ul: {
          margin: 0
        },
        li: {
          cursor: 'pointer',
          color: palette.skeColor.blackAlt,
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
    main: {
      displayName: 'SkeSearchField',
      selectors: {
        '&.ms-SearchBox': {
          borderRadius: '0px',
          height: largeSize ? 48 : 32,
          border:
            border === 'slim'
              ? `1px solid ${palette.skeColor.black}`
              : `2px solid ${palette.skeColor.black}`,
          position: 'relative',
          fontSize: largeSize ? FontSizes.large : FontSizes.medium
        },
        '&.is-active.ms-SearchBox': {
          border: `1px solid ${palette.skeColor.blue}`,
          outline: 'none',
          boxSizing: 'border-box',
          selectors: {
            '.ms-SearchBox-field': {
              padding:
                border === 'slim' ? '5px 25px 5px 5px' : '5px 25px 5px 6px'
            },
            '.ms-SearchBox-iconContainer': {
              right: standardSize ? 0 : 1,
              top: standardSize ? 7 : 6
            }
          }
        },
        '& .ms-SearchBox-field': {
          outline: 'none',
          fontWeight: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          padding: '5px 30px 5px 5px'
        },
        '& .ms-SearchBox-iconContainer': {
          position: 'absolute',
          right: 0,
          top: largeSize ? 5 : 7
        },
        '& .ms-SearchBox-iconContainer:hover': {
          border: 'none'
        },
        '& .ms-SearchBox-icon': {
          position: 'absolute',
          color: palette.skeColor.blue,
          right: 10,
          top: largeSize ? 5 : 0,
          border: 'none',
          boxSizing: 'border-box',
          fontSize: largeSize ? FontSizes.xLarge : FontSizes.medium,
          opacity: 1,
          outline: 'none'
        },
        '& .ms-SearchBox-clearButton': {
          display: 'none'
        },
        '& .ms-Button': {
          display: 'none'
        }
      }
    }
  });
};
