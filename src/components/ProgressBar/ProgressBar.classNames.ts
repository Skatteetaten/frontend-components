import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '..';
import { PaletteProps } from '..';

export var getClassNames = function getClassNames() {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      displayName: 'SkeProgressBar',
      selectors: {
        '& .ms-ProgressIndicator-progressBar': {
          background: palette.skeColor.brown
        },
        '& .ms-ProgressIndicator-itemDescription': {
          fontSize: FontSizes.xSmall
        }
      }
    }
  ]);
};
