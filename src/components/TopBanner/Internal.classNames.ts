import { FontSizes, PaletteProps } from '..';
import { getTheme } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
// @ts-ignore TODO
export const getClassNames = function getClassNames(props) {
  const { compact } = props;
  const sidebarWidth = props.slantedAreaWidth ? props.slantedAreaWidth : 252;
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
      height: compact ? '72px' : '120px',

      selectors: {
        '@media (max-width: 640px)': {
          height: '72px'
        }
      }
    },
    headerLink: {
      flexGrow: 1,
      textAlign: 'center',
      color: palette.skeColor.white
    },
    headerActionButton: {
      displayName: 'Lenkeknapp',
      marginLeft: '8px',
      fontWeight: '600',
      selectors: {
        ':hover i, :hover span': {
          backgroundColor: palette.skeColor.white,
          color: `${palette.skeColor.blackAlt} !important`,
          borderRadius: 0
        }
      }
    },
    headerLeftContainer: {
      // @ts-ignore TODO
      width: props.slantedAreaWidth ? sidebarWidth : 'auto',
      background: palette.skeColor.internal,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 16
    },
    headerLogo: {
      height: compact ? '50px' : '90px',
      selectors: {
        img: {
          margin: '16px auto 0 auto',
          height: compact ? '50px' : '90px',

          selectors: {
            '@media (min-width: 640px)': {
              margin: 0
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
