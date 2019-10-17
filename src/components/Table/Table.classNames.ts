import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

import { FontWeights } from '..';
import { PaletteProps } from '..';

export var getClassNames = function getClassNames() {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      displayName: 'SkeTable',
      overflowX: 'auto',
      selectors: {
        table: {
          display: 'table',
          borderCollapse: 'collapse',
          textAlign: 'left',
          selectors: {
            thead: {
              display: 'table-header-group'
            },
            'td,th': {
              padding: 12
            },
            'td.editableCell': {
              padding: 0
            },
            th: {
              verticalAlign: 'bottom',
              fontWeight: FontWeights.bold,
              borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
              position: 'relative',
              selectors: {
                i: {
                  color: `${palette.skeColor.blue}`,
                  position: 'absolute',
                  paddingLeft: '0.1em',
                  cursor: 'pointer',
                  selectors: {
                    ':hover': {
                      color: `${palette.skeColor.darkBlue}`
                    },
                    '& [data-icon-name="ArrowUpDown"]': {
                      selectors: {
                        '@media (min-width: 1024px)': {
                          opacity: 0
                        },
                        '& .noAutoHide': {
                          opacity: 1
                        },
                        ':hover': {
                          opacity: 1
                        }
                      }
                    }
                  }
                },
                ':focus': {
                  color: `${palette.skeColor.blue}`,
                  outline: '0'
                },
                '& .sortable': {
                  cursor: 'pointer',
                  selectors: {
                    ':hover [data-icon-name="ArrowUpDown"]': {
                      opacity: 1
                    },
                    ':focus [data-icon-name="ArrowUpDown"]': {
                      opacity: 1
                    }
                  }
                }
              }
            },
            td: {
              borderBottom: `1px solid ${palette.skeColor.lightGrey}`,
              selectors: {
                '& .right': {
                  textAlign: 'right'
                },
                '& .center': {
                  textAlign: 'center'
                }
              }
            }
          }
        },
        '.editableRow': {
          display: 'none'
        },
        '.editableRow-open': {
          display: 'table-row'
        }
      }
    }
  ]);
};
