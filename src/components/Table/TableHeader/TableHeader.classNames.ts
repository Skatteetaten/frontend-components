import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

import { FontWeights, FontSizes, PaletteProps } from '../../utils';

export const getClassNames = (props) => {
  const { compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    tabellThead: {
      display: 'table-header-group',
    },
    tabellTheadCell: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
      padding: 12,
      fontSize: compactTable ? FontSizes.small : 'inherit',
      verticalAlign: 'bottom',
      fontWeight: FontWeights.bold,
      position: 'relative',
      selectors: {
        i: {
          color: `${palette.skeColor.blue}`,
          position: 'absolute',
          paddingLeft: '0.1em',
          cursor: 'pointer',
          selectors: {
            ':hover': {
              color: `${palette.skeColor.darkBlue}`,
            },
            '& [data-icon-name="ArrowUpDown"]': {
              selectors: {
                '@media (min-width: 1024px)': {
                  opacity: 0,
                },
                '& .noAutoHide': {
                  opacity: 1,
                },
                ':hover': {
                  opacity: 1,
                },
              },
            },
          },
        },
        ':focus': {
          color: `${palette.skeColor.blue}`,
          outline: '0',
        },
      },
    },
    tabellTheadCellIsSortable: {
      cursor: 'pointer',
      selectors: {
        ':hover [data-icon-name="ArrowUpDown"]': {
          opacity: 1,
        },
        ':focus [data-icon-name="ArrowUpDown"]': {
          opacity: 1,
        },
      },
    },
    tabellTheadCellIsEmpty: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
    },
  });
};
