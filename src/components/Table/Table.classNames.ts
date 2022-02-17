import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';

import { PaletteProps } from '../utils';

export const getClassNames = (props) => {
  const { fullWidth } = props;
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    SkeTable: {
      overflowX: 'auto',
    },
    tabell: {
      display: 'table',
      width: fullWidth ? '100%' : undefined,
      borderCollapse: 'collapse',
      textAlign: 'left',
      height: '1px',
    },
    tabellCaption: {
      textAlign: 'left',
    },
    tabellThead: {
      display: 'table-header-group',
    },
    tabellTheadRow: {
      verticalAlign: 'middle',
    },
    emptyTd: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
    },
  });
};
