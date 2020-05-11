import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '../../../lib';
import { mergeStyleSets } from '@uifabric/merge-styles';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    activePage: {
      color: `${palette.skeColor.darkGrey} !important`,
      borderBottom: 'none !important',
      paddingTop: '3px !important'
    },
    linkIcons: {
      fontSize: '22px',
      verticalAlign: 'middle'
    },
    pageNumber: {
      borderBottom: `2px solid ${palette.skeColor.lightBlue} !important`,
      paddingTop: '3px !important'
    },
    paginationContainer: {
      fontSize: '16px',
      selectors: {
        button: {
          border: 'none',
          background: 'transparent',
          fontSize: '16px'
        },
        nav: {
          float: 'right',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              margin: '0 auto',
              float: 'none'
            }
          }
        },
        p: {
          marginTop: '7px',
          float: 'left',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              margin: '0 auto',
              float: 'none'
            }
          }
        },
        ul: {
          listStyle: 'none',
          display: 'inline-flex',
          paddingLeft: '0',
          margin: 0
        },
        li: {
          display: 'inline',
          selectors: {
            button: {
              color: palette.skeColor.blue,
              fontWeight: 'bold',
              padding: '0',
              margin: '4px',
              cursor: 'pointer'
            }
          }
        },
        '@media only screen and (max-width: 479px)': {
          display: 'grid'
        }
      }
    }
  });
};
