import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontWeights } from '..';
import { PaletteProps } from '..';

export var getClassNames = function getClassNames() {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyles([
    {
      displayName: 'SkeTabs',
      selectors: {
        '& .ms-Pivot-link': {
          background: palette.skeColor.neutralGrey,
          marginRight: 10,
          display: 'inline-block',
          minWidth: '10%',
          maxWidth: '100%'
        },
        '&.ms-Pivot-text .ms-Pivot-count': {
          color: palette.skeColor.black
        },
        '& .ms-Pivot': {
          borderBottom: `3px solid ${palette.skeColor.burgundy}`,
          width: '100%',
          display: 'inline-block'
        },
        '& .ms-Button-flexContainer': {
          display: 'block',
          justifyContent: 'center',
          margin: '0 auto'
        },
        '& .ms-Pivot-link.is-selected': {
          background: palette.skeColor.burgundy,
          fontWeight: FontWeights.regular,
          borderBottom: 'none',
          selectors: {
            ':before': {
              borderBottom: 'none'
            }
          }
        }
      }
    }
  ]);
};
