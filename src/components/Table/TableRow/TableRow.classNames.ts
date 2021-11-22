import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

import { PaletteProps } from '../../utils';

import designtokenSpacing from '../../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';
import designtokenBreakpoints from '../../utils/designtokens/_breakpoints.json';

export const getClassNames = (props, expandabledRowOpenWidth) => {
  const { compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    tabellTheadCell: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
      padding: designtokenSpacing['ske-spacing-lg'],
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
      selectors: {
        ':hover [data-icon-name="ArrowUpDown"]': {
          opacity: 1,
        },
        ':focus [data-icon-name="ArrowUpDown"]': {
          opacity: 1,
        },
      },
    },
    tableRow: {
      borderBox: 'box-sizing',
      verticalAlign: 'middle',
    },
    tableRowIsClickable: {
      selectors: {
        ':hover': {
          backgroundColor: palette.skeColor.lightBlue,
        },
      },
    },
    tableRowEditableAndOpen: {
      display: 'table-row',
    },
    tableRowEditableAndClosed: {
      display: 'none',
    },
    tableRowIsExpandableAndOpen: {},
    expandableContent: {
      // Dette henter width'en fra parent-row slik at ekspandert innhold kan ta hele bredden
      width: expandabledRowOpenWidth ? expandabledRowOpenWidth - 5 + 'px' : '',
      padding: compactTable
        ? designtokenSpacing['ske-spacing-sm']
        : designtokenSpacing['ske-spacing-md'],
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 99,
    },
    tableCell: {
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      padding: 0,
      verticalAlign: 'inherit',
    },
    tableCellAlignedRight: {
      justifyContent: 'flex-end',
      textAlign: 'right',
    },
    tableCellAlignedCenter: {
      justifyContent: 'center',
      textAlign: 'center',
    },
    tableCellIsSum: {
      textAlign: 'end',
      padding: designtokenSpacing['ske-spacing-lg'],
    },
    tableCellForExpandCollapseButton: {
      maxWidth: designtokenSpacing['ske-spacing-xl'],
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          maxWidth: designtokenSpacing['ske-spacing-xxl'],
        },
      },
    },
    tableCellIsEditableRowClosed: {
      borderBottom: 'none',
      verticalAlign: 'top',
    },
    tableCellAboveExpandedArea: {
      borderBottom: 'none',
      verticalAlign: 'top',
    },
    cellContent: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      fontSize: compactTable
        ? designtokenFontSizes['ske-font-size-s']
        : 'inherit',
      padding: `${designtokenSpacing['ske-spacing-md']} ${designtokenSpacing['ske-spacing-lg']}`,
      textAlign: 'inherit',
      verticalAlign: 'middle',
      width: '100%',
    },
    cellContentClickable: {
      paddingTop: designtokenSpacing['ske-spacing-md'],
      paddingBottom: designtokenSpacing['ske-spacing-md'],
      cursor: 'pointer',
    },
    cellContentSmall: {
      padding: `${designtokenSpacing['ske-spacing-xs']} ${designtokenSpacing['ske-spacing-lg']}`,
    },
    cellContentLarge: {
      padding: compactTable
        ? `${designtokenSpacing['ske-spacing-sm']} ${designtokenSpacing['ske-spacing-sm']}`
        : `${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']}`,
    },
    cellContentChildRow: {
      padding: `0 ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']}`,
    },
    cellContentAlignedRight: {
      justifyContent: 'flex-end',
      textAlign: 'right',
    },
    cellContentAlignedCenter: {
      justifyContent: 'center',
      textAlign: 'center',
    },
    cellContentAboveExpandedArea: {
      alignItems: 'start',
      paddingTop: compactTable ? '10px' : '13px',
    },
    cellContentHideEdit: {
      minHeight: designtokenSpacing['ske-spacing-mega'],
    },
    // TO-DO hover og focus settes i riktig - avventer at bug om hover/focus på iconButton først fikses
    expandButton: {},
    expandButtonIsActive: {},
    editButton: {
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 'none',
      background: 'transparent',
      boxSizing: 'border-box',
      fontSize: 'inherit',
      textAlign: 'inherit',
    },
    separator: {
      borderBottom: `1px solid ${palette.skeColor.lightGrey}`,
    },
    emptyTd: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
    },
    hideOnMobile: {
      display: 'none',
      selectors: {
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          display: 'table-cell',
        },
      },
    },
  });
};
