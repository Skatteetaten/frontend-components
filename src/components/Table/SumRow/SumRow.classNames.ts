import { mergeStyleSets } from '@fluentui/merge-styles';

export const getClassNames = () => {
  return mergeStyleSets({
    sumRow: {
      verticalAlign: 'middle',
    },
    sumCell: {
      fontWeight: '400',
      padding: 0,
      verticalAlign: 'inherit',
    },
    sumCellIsSum: {
      textAlign: 'end',
      padding: '12px',
    },
  });
};
