import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';

import { PaletteProps } from '../../utils';
import designtokenSpacing from '../../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';
import designtokenBreakpoints from '../../utils/designtokens/_breakpoints.json';

export const getClassNames = (props) => {
  const { compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    tabellThead: {
      display: 'table-header-group',
    },
    tabellTheadCell: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
      padding: compactTable
        ? `${designtokenSpacing['ske-spacing-sm']}`
        : `${designtokenSpacing['ske-spacing-lg']}`,
      fontSize: compactTable
        ? designtokenFontSizes['ske-font-size-s']
        : 'inherit',
      verticalAlign: 'bottom',
      fontWeight: designtokenFontSizes['ske-font-weight-bold'],
      position: 'relative',
      selectors: {
        i: {
          color: `${palette.skeColor.blue}`,
          position: 'absolute',
          paddingLeft: designtokenSpacing['ske-spacing-xs'],
          cursor: 'pointer',
          selectors: {
            ':hover': {
              color: `${palette.skeColor.darkBlue}`,
            },
            '& [data-icon-name="ArrowUpDown"]': {
              selectors: {
                [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-lg']})`]: {
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
      paddingRight: `${designtokenSpacing['ske-spacing-xl']} !important`,
      selectors: {
        ':hover [data-icon-name="ArrowUpDown"]': {
          opacity: 1,
        },
        ':focus [data-icon-name="ArrowUpDown"]': {
          opacity: 1,
        },
      },
    },
    tabellTheadCellAlignedRight: {
      justifyContent: 'flex-end',
      textAlign: 'right',
    },
    tabellTheadCellAlignedCenter: {
      justifyContent: 'center',
      textAlign: 'center',
    },
    tabellTheadCellIsEmpty: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
    },
    tabellTheadCellHiddenOnMobile: {
      display: 'none',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          display: 'table-cell',
        },
      },
    },
  });
};
