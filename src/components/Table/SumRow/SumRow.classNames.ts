import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenSpacing from '../../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';

export const getClassNames = () => {
  return mergeStyleSets({
    sumRow: {
      verticalAlign: 'middle',
    },
    sumCell: {
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      padding: 0,
      verticalAlign: 'inherit',
    },
    sumCellIsSum: {
      textAlign: 'end',
      padding: designtokenSpacing['ske-spacing-md'],
    },
  });
};
