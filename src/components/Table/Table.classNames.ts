import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

import { FontWeights, FontSizes, PaletteProps } from '../utils';

export const getClassNames = (props, expandabledRowOpenWidth) => {
  const { fullWidth, compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

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
      selectors: {
        caption: {
          textAlign: 'left',
        },
        thead: {
          display: 'table-header-group',
        },
        'thead th': {
          borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
          padding: 12,
          fontSize: compactTable ? FontSizes.small : 'inherit',
        },
        tr: {
          height: '100%',
          verticalAlign: 'middle',
        },
        'tr.clickable:hover': {
          backgroundColor: palette.skeColor.lightBlue,
        },
        td: {
          height: '100%',
          padding: 0,
        },
        '.expandCell': {
          maxWidth: 50,
          maxHeight: 50,
        },
        // '.expandableRow-open .is-closed, .expandableRow-open td': {
        //   borderBottom: 'none',
        //   verticalAlign: 'top',
        //   '.cellContent': {
        //     alignItems: 'start',
        //     marginTop: compactTable ? 0 : '2px',
        //     height: 'auto',
        //   },
        // },
        th: {
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
            '& .sortable': {
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
          },
        },
        '.tableCell': {
          fontWeight: '400',
          verticalAlign: 'inherit',
          selectors: {
            '& .right, & .right .cellContent': {
              justifyContent: 'flex-end',
              textAlign: 'right',
            },
            '& .center, & .center .cellContent': {
              justifyContent: 'center',
              textAlign: 'center',
            },
            '& .sum': {
              textAlign: 'end',
              padding: '12px',
            },
          },
        },
      },
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
    editableRowClosed: {
      display: 'none',
    },
    editableRowOpen: {
      display: 'table-row',
    },
    cellContent: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      fontSize: compactTable ? FontSizes.small : 'inherit',
      height: compactTable ? '28px' : '100%',
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
      padding: '12px',
    },
    cellContentChildRow: {
      padding: '0px 12px 12px 12px',
    },
    cellContentHideEdit: {
      minHeight: '60px',
    },
    cellButton: {
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
    expandableRowOpen: {
      // TO-DO se for å skrive bedre selectors og flytte logikken som Modifier lengre ned
      selector: {
        'td, .tableCellIsClosed': {
          borderBottom: 'none',
          verticalAlign: 'top',
          '.cellContent': {
            alignItems: 'start',
            marginTop: compactTable ? 0 : '2px',
            height: 'auto',
          },
        },
      },
    },
    expandableContent: {
      // Dette henter width'en fra parent-row slik at ekspandert innhold kan ta hele bredden
      width: expandabledRowOpenWidth + 'px',
      padding: compactTable ? '0 ' : '1rem 0 0 0',
      position: 'relative',
      zIndex: 99,
      // div: {
      //   overflowX: 'initial',
      // },
      // table: {
      //   width: '100%',
      // },
    },
    expandableContentAfter: {
      padding: compactTable ? '0 32px 4px 32px' : '0 52px 8px 52px',
      div: {
        overflowX: 'initial',
      },
    },
  });
};
