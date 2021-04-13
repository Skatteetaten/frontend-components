import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '../index';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    footerWrapper: {
      backgroundColor: palette.skeColor.burgundy,
    },
    footerContent: {
      backgroundColor: palette.skeColor.burgundy,
      color: palette.skeColor.white,
      padding: '24px 4px',
      selectors: {
        '@media (max-width: 1023px)': {
          maxWidth: '100%',
          padding: '24px 16px',
        },
      },
    },
    footerDecorContainer: {
      width: '100%',
      marginBottom: -5,
      lineHeight: 0,
      selectors: {
        svg: {
          height: '85px',
          overflow: 'hidden',
        },
      },
    },
  });
};

export const getLogoClassNames = () =>
  mergeStyles([
    {
      selectors: {
        '@media (max-width: 1023px)': {
          selectors: {
            img: {
              margin: '0 auto',
            },
            'div &': {
              marginBottom: '16px',
            },
          },
        },
      },
    },
  ]);
