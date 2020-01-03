import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export const getClassNames = function getClassNames() {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      selectors: {
        '.ms-ContextualMenu-list': {
          border: `2px solid ${palette.skeColor.blackAlt}`,
          borderRadius: '0'
        },
        '.ms-ContextualMenu-link:hover': {
          backgroundColor: palette.skeColor.lightBlue
        }
      }
    }
  ]);
};
