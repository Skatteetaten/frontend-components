import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps, skeColor } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    menuButton: {
      selectors: {
        '.ms-Button-label': {
          fontSize: FontSizes.small,
          color: palette.skeColor.white,
          textDecoration: 'none !important',
          padding: '1px 5px 0 5px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
          transition: 'border-bottom 0.3s'
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
    menuButtonButtom: {
      alignContent: 'center'
    },

    dropdownContainer: {
      position: 'absolute',
      backgroundColor: palette.skeColor.black,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      fontWeight: FontWeights.regular,
      margin: 0,
      padding: 0,
      zIndex: 1,
      selectors: {
        li: {
          display: 'block'
        },
        'li:not(:first-child)': {
          margin: 0
        }
      }
    }
  });
};
