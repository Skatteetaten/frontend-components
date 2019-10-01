import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '../utils/fonts';

export var getClassNames = function getClassNames(props) {
  const { palette } = getTheme();

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
