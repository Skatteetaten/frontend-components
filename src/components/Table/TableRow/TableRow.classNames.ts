import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';

import { PaletteProps } from '../../utils';

import designtokenSpacing from '../../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';
import designtokenBreakpoints from '../../utils/designtokens/_breakpoints.json';

export const getClassNames = (props, expandabledRowOpenWidth) => {
  const { compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    tableRow: {
      borderBox: 'box-sizing',
      verticalAlign: 'middle',
      selectors: {
        '&.tableRowIsClickable': {
          selectors: {
            ':hover': {
              backgroundColor: palette.skeColor.lightBlue,
            },
          },
        },
        '&.tableRowEditableAndOpen': {
          display: 'table-row',
        },
        '&.tableRowEditableAndClosed': {
          display: 'none',
        },
        '&.tableRowHasSeparator': {
          borderBottom: `1px solid ${palette.skeColor.lightGrey}`,
        },
        //'&.tableRowIsExpandableAndOpen': {},
      },
    },

    expandableContent: {
      // Dette henter width'en fra parent-row slik at ekspandert innhold kan ta hele bredden
      width: expandabledRowOpenWidth ? expandabledRowOpenWidth - 5 + 'px' : '',
      padding: compactTable
        ? `${designtokenSpacing['ske-spacing-sm']}`
        : `${designtokenSpacing['ske-spacing-md']} 0`,
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 99,
    },
    tableCell: {
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      padding: 0,
      // verticalAlign: 'inherit',
      verticalAlign: 'middle',
      selectors: {
        '&.tableCellAlignedRight': {
          justifyContent: 'flex-end',
          textAlign: 'right',
        },
        '&.tableCellAlignedCenter': {
          justifyContent: 'center',
          textAlign: 'center',
        },
        '&.tableCellIsSum': {
          textAlign: 'end',
          padding: designtokenSpacing['ske-spacing-lg'],
        },
        '&.tableCellForExpandCollapseButton': {
          maxWidth: designtokenSpacing['ske-spacing-xl'],
          selectors: {
            [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
              maxWidth: '3.125rem',
            },
          },
        },
        '&.tableCellIsEditableRowClosed': {
          borderBottom: 'none',
        },
        '&.tableCellAboveExpandedArea': {
          borderBottom: 'none',
          verticalAlign: 'top',
        },
        '&.tableCellHiddenOnMobile': {
          display: 'none',
          selectors: {
            [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
              display: 'table-cell',
            },
          },
        },
        '&.tableCellHasSeparator': {
          borderBottom: `1px solid ${palette.skeColor.lightGrey}`,
        },
      },
    },

    cellContent: {
      display: 'block',
      width: '100%',
      verticalAlign: 'middle',
      boxSizing: 'border-box',

      fontSize: compactTable
        ? designtokenFontSizes['ske-font-size-s']
        : 'inherit',
      padding: `${designtokenSpacing['ske-spacing-md']} ${designtokenSpacing['ske-spacing-lg']}`,
      textAlign: 'inherit',

      selectors: {
        '&.cellContentSmall': {
          padding: `${designtokenSpacing['ske-spacing-xs']} ${designtokenSpacing['ske-spacing-lg']}`,
        },
        '&.cellContentClickable': {
          paddingTop: designtokenSpacing['ske-spacing-md'],
          paddingBottom: designtokenSpacing['ske-spacing-md'],
          cursor: 'pointer',
        },
        '&.cellContentLarge': {
          padding: compactTable
            ? `${designtokenSpacing['ske-spacing-sm']} ${designtokenSpacing['ske-spacing-sm']}`
            : `${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']}`,
        },
        '&.cellContentChildRow': {
          padding: `0 ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']}`,
        },
        '&.cellContentAlignedRight': {
          /* justifyContent: 'flex-end',*/
          textAlign: 'right',
        },
        '&.cellContentAlignedCenter': {
          /* justifyContent: 'center',*/
          textAlign: 'center',
        },
        '&.cellContentAboveExpandedArea': {
          alignItems: 'start',
        },
        '&.cellContentHideEdit': {
          minHeight: designtokenSpacing['ske-spacing-mega'],
        },
      },
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

    emptyTd: {
      borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
    },
  });
};
