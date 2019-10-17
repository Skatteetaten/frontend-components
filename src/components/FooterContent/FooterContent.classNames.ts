import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    footerWrapper: {
      backgroundColor: palette.skeColor.burgundy
    },
    footerContent: {
      backgroundColor: palette.skeColor.burgundy,
      color: palette.skeColor.white,
      maxWidth: '50%',
      margin: '0 auto',
      padding: '70px 0',
      selectors: {
        '@media (max-width: 1023px)': {
          maxWidth: '100%',
          padding: '70px 16px'
        }
      }
    },
    footerDecorContainer: {
      width: '100%',
      marginBottom: -5,
      lineHeight: 0,
      selectors: {
        svg: {
          height: '85px',
          overflow: 'hidden'
        }
      }
    }
  });
};

export const getLogoClassNames = () =>
  mergeStyles([
    {
      selectors: {
        '@media (max-width: 1023px)': {
          selectors: {
            img: {
              margin: '0 auto'
            },
            'div &': {
              marginBottom: '16px'
            }
          }
        }
      }
    }
  ]);
