import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

import { FontWeights, FontSizes, PaletteProps } from '../utils';

export const getClassNames = (props) => {
  const { fullWidth, compactTable } = props;
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      displayName: 'SkeTable',
      overflowX: 'auto',
      selectors: {
        '> table': {
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
            'td.editableCell': {
              padding: 0,
            },
            tr: {
              height: '100%',
              verticalAlign: 'middle',
            },
            '.separator': {
              borderBottom: `1px solid ${palette.skeColor.lightGrey}`,
            },
            'tr.clickable:hover': {
              backgroundColor: palette.skeColor.lightBlue,
            },
            td: {
              height: '100%',
              padding: 0,
            },
            '.cellButton': {
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
            '.cellContent': {
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
            '.cellContentSmall': {
              padding: '2px 12px',
            },
            '.cellContentLarge': {
              padding: '12px',
            },
            '.cellContentChildRow': {
              padding: '0px 12px 12px 12px',
            },
            '.cellContentHideEdit': {
              minHeight: '60px',
            },
            '.cellContent.clickable': {
              paddingTop: '8px',
              paddingBottom: '8px',
            },
            '.cellContent.clickable:hover': {
              cursor: 'pointer',
            },
            'td.expandableCell td, td.expandableCell .is-closed': {
              borderBottom: 'none',
            },
            'th.hideOnMobile, td.hideOnMobile': {
              display: 'none',
              selectors: {
                '@media (min-width: 640px)': {
                  display: 'table-cell',
                },
              },
            },
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
            'td, .tableRow': {
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
              },
            },
          },
        },
        '.expandButton-open': {
          marginTop: '16px',
        },
        '.expandCell': {
          maxWidth: 50,
          maxHeight: 50,
        },
        '.editableRow': {
          display: 'none',
        },
        '.editableRow-open': {
          display: 'table-row',
        },
        '.expandableRow': {
          div: {
            alignItems: 'start',
            marginTop: '16px',
          },
        },
        '.expandableRow-open .is-closed, .expandableRow-open td': {
          borderBottom: 'none',
          div: {
            alignItems: 'start',
            marginTop: '16px',
          },
        },
        '.emptyTd': {
          borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
        },
        '.expandableContent': {
          marginTop: '40px',
          width: 'max-content',
          padding: '0 0 12px 62px',
          '>div': {
            overflowX: 'initial',
          },
        },
      },
    },
  ]);
};
