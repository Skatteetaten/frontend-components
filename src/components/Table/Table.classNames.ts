import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

import { PaletteProps } from '../utils';

export const getClassNames = (props) => {
  const { fullWidth } = props;
  const palette = getTheme().palette as PaletteProps;

  // TO-DO sjekke om det settes rare classNames rett fra props eller attributes
  // TO-DO åpne opp med flere customClassNames
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
    tableTheadRow: {
      verticalAlign: 'middle',
    },
    emptyTd: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
    },
  });
};
