import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '..';
import { PaletteProps } from '..';

export const getClassNames = function getClassNames() {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      displayName: 'SkeProgressBar',
      selectors: {
        '& .ms-ProgressIndicator-progressBar': {
          background: palette.skeColor.burgundyLight,
          height: '5px'
        },
        '& .ms-ProgressIndicator-progressTrack': {
          background: palette.skeColor.whiteGrey,
          height: '5px'
        },
        '& .ms-ProgressIndicator-itemDescription': {
          fontSize: FontSizes.small
        }
      }
    }
  ]);
};
