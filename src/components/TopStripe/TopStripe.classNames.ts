import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  // @ts-ignore TODO
  return mergeStyleSets({
    container: {
      whiteSpace: 'pre',
      backgroundColor: palette.skeColor.blackAlt,
      color: palette.skeColor.white + '!important',
      height: '30px',
      fontSize: FontSizes.small,
      justifyContent: 'flex-end',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingRight: '16px',
      zIndex: 200,
      listStyleType: 'none',
      fontFamily:
        'Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      fontWeight: FontWeights.regular,
      selectors: {
        li: {
          listStyleType: 'none',
          margin: 0,
          padding: 0
        },
        'li:not(:first-child)': {
          marginLeft: 32
        },
        'a,i': {
          fontWeight: FontWeights.regular,
          borderWidth: 2,
          color: palette.skeColor.white,
          borderColor: palette.skeColor.lightGrey
        },
        'a:hover,a:hover i': {
          color: palette.skeColor.white,
          borderColor: palette.skeColor.white
        },
        'a:focus, a:focus i': {
          color: palette.skeColor.darkBlue,
          borderColor: palette.skeColor.white,
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none'
        },
        '@media (min-width: 900px)': {
          height: '40px',
          fontSize: FontSizes.small
        }
      }
    }
  });
};
