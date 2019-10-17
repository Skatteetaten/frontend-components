import { FontSizes, PaletteProps } from '..';
import { getTheme } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
// @ts-ignore TODO
export const getClassNames = function getClassNames(props) {
  const { compact } = props;
  const sidebarWidth = '362px';
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    header: {
      margin: '0',
      borderRadius: '0 0 0 0',
      display: 'flex',
      overflow: 'hidden',
      background: palette.skeColor.internalLight,
      color: palette.skeColor.white,
      alignItems: 'stretch',
      selectors: {
        '@media (min-width: 640px)': {
          height: compact ? '72px' : '120px'
        }
      }
    },
    headerActionButton: {
      displayName: 'Lenkeknapp',
      marginLeft: '8px',
      selectors: {
        ':hover': {
          backgroundColor: 'rgba(255,255,255,.1)'
        },
        '&& i, &&:hover i, &&:focus i, &&:active i': {
          color: palette.skeColor.white
        },
        '& .ms-Button-flexContainer': {
          color: palette.skeColor.white
        }
      }
    },
    headerLeftContainer: {
      // @ts-ignore TODO
      width: `${sidebarWidth - 40}px`,
      background: palette.skeColor.internal,
      display: 'block',
      alignItems: 'center',
      paddingLeft: 16,
      selectors: {
        '@media (min-width: 640px)': {
          display: 'flex'
        }
      }
    },
    headerLogo: {
      selectors: {
        img: {
          margin: '16px auto 0 auto',
          height: 50,
          selectors: {
            '@media (min-width: 640px)': {
              margin: 0,
              height: compact ? 50 : 90
            }
          }
        }
      }
    },
    headerDiagonal: {
      borderRight: `40px solid ${palette.skeColor.internalLight}`,
      borderBottom: `120px solid ${palette.skeColor.internal}`
    },
    headerRightContainer: {
      background: palette.skeColor.internalLight,
      color: palette.skeColor.black,
      padding: '0 8px',
      flexGrow: '1',
      display: 'flex',
      alignItems: 'center',
      wordBreak: 'break-word',
      selectors: {
        '& h1': {
          flexGrow: 1,
          fontSize: FontSizes.large,
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: FontSizes.xLarge
            }
          }
        }
      }
    },
    headerRightButtons: {
      display: 'flex',
      alignSelf: 'flex-end'
    }
  });
};
