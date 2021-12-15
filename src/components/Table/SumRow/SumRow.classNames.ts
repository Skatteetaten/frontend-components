import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenSpacing from '../../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';

export const getClassNames = (compactTable) => {
  return mergeStyleSets({
    sumRow: {
      verticalAlign: 'middle',
    },
    sumCell: {
      fontSize: compactTable
        ? designtokenFontSizes['ske-font-size-s']
        : 'inherit',
      padding: compactTable
        ? `${designtokenSpacing['ske-spacing-sm']} ${designtokenSpacing['ske-spacing-sm']}`
        : `${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']}`,
      verticalAlign: 'inherit',
    },
    sumCellIsText: {
      fontWeight: designtokenFontSizes['ske-font-weight-bold'],
      textAlign: 'end',
    },
    sumCellIsSum: {
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      textAlign: 'end',
    },
  });
};
