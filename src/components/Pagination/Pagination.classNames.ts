import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '../../../lib';
import { mergeStyleSets } from '@uifabric/merge-styles';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    paginationContainer: {
      fontSize: '16px',
      selectors: {
        button: {
          border: 'none',
          background: 'transparent',
          fontSize: '16px'
        },
        ul: {
          listStyle: 'none',
          display: 'inline-flex',
          paddingLeft: '0'
        },
        li: {
          display: 'inline'
        }
      }
    }
  });
};
