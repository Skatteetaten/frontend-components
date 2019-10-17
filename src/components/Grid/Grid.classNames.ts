import { mergeStyleSets } from '@uifabric/merge-styles';
// @ts-ignore TODO
export const getClassNames = props => {
  const {
    noSpacing,
    rowSpacing,
    centered,
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl,
    smPush,
    mdPush,
    lgPush,
    xlPush,
    xxlPush,
    xxxlPush,
    smPull,
    mdPull,
    lgPull,
    xlPull,
    xxlPull,
    xxxlPull,
    hiddenSm,
    hiddenMd,
    hiddenMdUp,
    hiddenMdDown,
    hiddenLg,
    hiddenLgUp,
    hiddenLgDown,
    hiddenXl,
    hiddenXlUp,
    hiddenXlDown,
    hiddenXxl,
    hiddenXxlUp,
    hiddenXxlDown,
    hiddenXxxl
  } = props;
  // @ts-ignore TODO
  return mergeStyleSets({
    grid: {
      displayName: 'ske-Grid',
      boxSizing: 'border-box',
      zoom: 1,
      padding: '0 8px',
      selectors: {
        '&::before, &::after': {
          display: 'table',
          content: '""',
          lineHeight: '0'
        },
        '&::after': {
          clear: 'both'
        }
      }
    },
    row: {
      displayName: 'ske-Grid-row',
      boxSizing: 'border-box',
      zoom: 1,
      margin: `${rowSpacing} 0`,
      selectors: {
        '&::before, &::after': {
          display: 'table',
          content: '""',
          lineHeight: '0'
        },
        '&::after': {
          clear: 'both'
        }
      }
    },
    col: {
      displayName: 'ske-Grid-col',
      position: 'relative',
      minHeight: '1px',
      paddingLeft: !noSpacing && '8px',
      paddingRight: !noSpacing && '8px',
      boxSizing: 'border-box',
      width: '100%',
      selectors: {
        '& $grid': {
          padding: '0'
        },
        "[dir='ltr'] &": {
          float: centered ? 'none' : 'left',
          margin: centered ? '0 auto' : '0 0',
          selectors: {
            '@media (min-width: 320px)': {
              width: `${(100 / 12) * sm}%`,
              left: `${(100 / 12) * smPush}%`,
              right: `${(100 / 12) * smPull}%`
            },
            '@media (min-width: 480px)': {
              width: `${(100 / 12) * md}%`,
              left: `${(100 / 12) * mdPush}%`,
              right: `${(100 / 12) * mdPull}%`
            },
            '@media (min-width: 640px)': {
              width: `${(100 / 12) * lg}%`,
              left: `${(100 / 12) * lgPush}%`,
              right: `${(100 / 12) * lgPull}%`
            },
            '@media (min-width: 1024px)': {
              width: `${(100 / 12) * xl}%`,
              left: `${(100 / 12) * xlPush}%`,
              right: `${(100 / 12) * xlPull}%`
            },
            '@media (min-width: 1366px)': {
              width: `${(100 / 12) * xxl}%`,
              left: `${(100 / 12) * xxlPush}%`,
              right: `${(100 / 12) * xxlPull}%`
            }
          }
        },
        "[dir='rtl'] &": {
          float: 'right',
          selectors: {
            '@media (min-width: 320px)': {
              width: `${(100 / 12) * sm}%`,
              right: `${(100 / 12) * smPush}%`,
              left: `${(100 / 12) * smPull}%`
            },
            '@media (min-width: 480px)': {
              width: `${(100 / 12) * md}%`,
              right: `${(100 / 12) * mdPush}%`,
              left: `${(100 / 12) * mdPull}%`
            },
            '@media (min-width: 640px)': {
              width: `${(100 / 12) * lg}%`,
              right: `${(100 / 12) * lgPush}%`,
              left: `${(100 / 12) * lgPull}%`
            },
            '@media (min-width: 1024px)': {
              width: `${(100 / 12) * xl}%`,
              right: `${(100 / 12) * xlPush}%`,
              left: `${(100 / 12) * xlPull}%`
            },
            '@media (min-width: 1366px)': {
              width: `${(100 / 12) * xxl}%`,
              right: `${(100 / 12) * smPush}%`,
              left: `${(100 / 12) * xxlPull}%`
            }
          }
        },

        // SMALL
        '@media (max-width: 479px)': {
          display:
            (hiddenSm ||
              hiddenMdDown ||
              hiddenLgDown ||
              hiddenXlDown ||
              hiddenXxlDown) &&
            'none !important'
        },

        // MEDIUM
        '@media (min-width: 480px) and (max-width: 639px)': {
          display:
            (hiddenMd ||
              hiddenMdUp ||
              hiddenMdDown ||
              hiddenLgDown ||
              hiddenXlDown ||
              hiddenXxlDown) &&
            'none !important'
        },
        // LARGE
        '@media (min-width: 640px) and (max-width: 1023px)': {
          display:
            (hiddenMdUp ||
              hiddenLg ||
              hiddenLgUp ||
              hiddenLgDown ||
              hiddenXlDown ||
              hiddenXxlDown) &&
            'none !important'
        },
        // EXTRA LARGE
        '@media (min-width: 1024px) and (max-width: 1365px)': {
          display:
            (hiddenMdUp ||
              hiddenLgUp ||
              hiddenXl ||
              hiddenXlUp ||
              hiddenXlDown ||
              hiddenXxlDown) &&
            'none !important'
        },
        // EXTRA EXTRA LARGE
        '@media (min-width: 1366px) and (max-width: 1919px)': {
          display:
            (hiddenMdUp ||
              hiddenLgUp ||
              hiddenXlUp ||
              hiddenXxl ||
              hiddenXxlUp ||
              hiddenXxlDown) &&
            'none !important'
        },
        // EXTRA EXTRA EXTRA LARGE
        '@media (min-width: 1920px)': {
          display:
            (hiddenMdUp ||
              hiddenLgUp ||
              hiddenXlUp ||
              hiddenXxlUp ||
              hiddenXxxl) &&
            'none !important',
          width: `${(100 / 12) * xxxl}%`,
          selectors: {
            "[dir='ltr'] &": {
              left: `${(100 / 12) * xxxlPush}%`,
              right: `${(100 / 12) * xxxlPull}%`
            },
            "[dir='rtl'] &": {
              right: `${(100 / 12) * xxxlPush}%`,
              left: `${(100 / 12) * xxxlPull}%`
            }
          }
        }
      }
    }
  });
};
