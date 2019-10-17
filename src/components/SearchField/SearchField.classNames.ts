import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '..';
import { PaletteProps } from '..';
// @ts-ignore TODO
export var getClassNames = function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  const { border, searchFieldSize } = props;
  const largeSize = searchFieldSize === 'large';
  const standardSize = searchFieldSize === 'standard';

  return mergeStyles([
    {
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
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none',
          boxSizing: 'border-box',
          selectors: {
            '.ms-SearchBox-field': {
              padding: border === 'slim' ? '4px 25px 4px 4px' : ''
            },
            '.ms-SearchBox-iconContainer': {
              right: standardSize ? -1 : '',
              top: standardSize ? 6 : ''
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
  ]);
};
