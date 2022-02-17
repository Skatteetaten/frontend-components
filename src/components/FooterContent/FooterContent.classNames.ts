import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { PaletteProps } from '../utils';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    footerWrapperSKE: {
      backgroundColor: palette.skeColor.burgundy,
      color: palette.skeColor.white,
    },
    footerContentSKE: {
      backgroundColor: palette.skeColor.burgundy,
      padding: '24px 4px',
      selectors: {
        '@media (max-width: 1023px)': {
          maxWidth: '100%',
          padding: '24px 16px',
        },
      },
    },
    /** BRAND VARIANTS INK */
    footerWrapperINK: {
      backgroundColor: palette.skeColor.green100,
      color: palette.skeColor.white,
    },
    footerContentINK: {
      backgroundColor: palette.skeColor.green100,
      padding: '24px 4px',
      selectors: {
        '@media (max-width: 1023px)': {
          maxWidth: '100%',
          padding: '24px 16px',
        },
      },
    },

    /** BRAND VARIANTS LSO */
    footerWrapperLSO: {
      backgroundColor: palette.skeColor.black100,
      color: palette.skeColor.white,
    },
    footerContentLSO: {
      backgroundColor: palette.skeColor.black100,
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
