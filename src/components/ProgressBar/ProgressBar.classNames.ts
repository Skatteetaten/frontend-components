import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, PaletteProps } from '../index';

export const getClassNames = function getClassNames() {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      displayName: 'SkeProgressBar',
      selectors: {
        '& .ms-ProgressIndicator-progressBar': {
          background: palette.skeColor.burgundy,
          height: '16px',
        },
        '& .ms-ProgressIndicator-itemProgress': {
          height: '16px',
          padding: '0',
          border: `1px solid ${palette.skeColor.blackAlt}`,
          marginTop: '8px',
          marginBottom: '8px',
        },
        '& .ms-ProgressIndicator-progressTrack': {
          background: palette.skeColor.whiteGrey,
          height: '16px',
        },
        '& .ms-ProgressIndicator-itemDescription': {
          fontSize: FontSizes.small,
        },
      },
    },
  ]);
};
