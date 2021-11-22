import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

import { PaletteProps } from '../utils';

export const getClassNames = (props) => {
  const { fullWidth } = props;
  const palette = getTheme().palette as PaletteProps;

  // TO-DO sjekke om det settes rare classNames rett fra props eller attributes - OK
  // TO-DO refaktorere med bruk av desigtokens - OK
  // TO-DO åpne opp med flere customClassNames - OK
  // TO-DO åpne opp til JSX.Element i header - OK
  // TO-DO høyre justering - OK

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
