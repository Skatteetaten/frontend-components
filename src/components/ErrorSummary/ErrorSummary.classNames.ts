import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, LineHeightSizes, PaletteProps } from '../utils';

export const getClassNames = (props) => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    mainContainer: {
      border: '2px solid '.concat(palette.skeColor.error),
      display: 'flex',
      backgroundColor: palette.skeColor.white,
      justifyContent: 'flex-start',
      width: 'fit-content',
      selectors: {
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: FontSizes.large,
          margin: '0',
        },
      },
      ul: {
        padding: 0,
      },
      li: {
        display: 'block',
        cursor: 'pointer',
        lineHeight: LineHeightSizes.xLarge,
      },
    },
    iconArea: {
      width: '4rem',
      backgroundColor: palette.skeColor.error,
      textAlign: 'center',
      selectors: {
        '@media (max-width: 639px)': {
          width: '2rem',
        },
      },
    },
    errorIcon: {
      fontSize: '2.4rem',
      color: palette.skeColor.white,
      padding: '6px 8px 8x 4px',
      selectors: {
        '@media (max-width: 639px)': {
          fontSize: '1.4rem',
        },
      },
    },
    errorListContainer: {
      padding: '16px 24px',
      selectors: {
        '@media (max-width: 639px)': {
          padding: '8px 12px',
        },
      },
    },
  });
};
