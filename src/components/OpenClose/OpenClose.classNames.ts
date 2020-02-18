import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, IconFontSizes } from '..';
import { PaletteProps } from '..';

export function getClassNames() {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    toggleButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: 'none',
      color: palette.skeColor.blue,
      fontSize: FontSizes.medium,
      fontWeight: FontWeights.bold,
      background: 'none',
      cursor: 'pointer',
      selectors: {
        '@media (min-width: 640px)': {
          fontSize: FontSizes.largePlus
        },
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue
        },
        '&:focus': {
          outline: 'none'
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: FontSizes.largePlus,
          margin: '0'
        },
        '& i': {
          transition: '.2s',
          fontSize: IconFontSizes.xlarge,
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: IconFontSizes.xxlarge
            }
          }
        }
      }
    },
    content: {
      padding: '10px 0 15px 10px'
    },
    heading: {
      fontSize: FontSizes.largePlus,
      margin: '0'
    },
    toggleButtonOpen: {
      selectors: {
        '& i': {
          transform: 'rotate(180deg)'
        }
      }
    }
  });
}
