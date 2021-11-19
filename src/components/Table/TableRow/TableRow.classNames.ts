import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

import { FontWeights, FontSizes, PaletteProps } from '../../utils';

export const getClassNames = (props, expandabledRowOpenWidth) => {
  const { compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

  // TO-DO sjekke om det settes rare classNames rett fra props eller attributes
  return mergeStyleSets({
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
      padding: compactTable ? '0.25rem' : '0.5rem',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 99,
    },
    tableCell: {
      fontWeight: '400',
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
      padding: '12px',
    },
    tableCellForExpandCollapseButton: {
      maxWidth: '50px',
      maxHeight: '50px',
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
      fontSize: compactTable ? FontSizes.small : 'inherit',
      //height: compactTable ? '28px' : '100%',
      padding: '8px 12px',
      textAlign: 'inherit',
      verticalAlign: 'middle',
      width: '100%',
    },
    cellContentClickable: {
      paddingTop: '8px',
      paddingBottom: '8px',
      cursor: 'pointer',
    },
    cellContentSmall: {
      padding: '2px 12px',
    },
    cellContentLarge: {
      padding: compactTable ? '6px 6px' : '12px 12px',
    },
    cellContentChildRow: {
      padding: '0px 12px 12px 12px',
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
      minHeight: '60px',
    },
    // TO-DO hover og focus settes i riktig - avventer at bug om hover/focus på iconButton først fikses
    expandButton: {},
    expandButtonIsActive: {},
    editButton: {
      border: 'none',
      background: 'transparent',
      boxSizing: 'border-box',
      fontSize: 'inherit',
      height: '100%',
      margin: 0,
      padding: 0,
      textAlign: 'inherit',
      width: '100%',
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
        '@media (min-width: 640px)': {
          display: 'table-cell',
        },
      },
    },
  });
};
