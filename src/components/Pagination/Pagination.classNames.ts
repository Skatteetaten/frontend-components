import { getTheme } from '@fluentui/react';
import { mergeStyleSets } from '@fluentui/merge-styles';
import { FontSizes, PaletteProps } from '../utils';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    activePage: {
      color: `${palette.skeColor.darkGrey} !important`,
      borderBottom: 'none !important',
      paddingTop: '3px !important',
      paddingBottom: '6px !important',
    },
    linkIcons: {
      fontSize: FontSizes.xLarge,
      verticalAlign: 'middle',
    },
    pageNumber: {
      borderBottom: `2px solid ${palette.skeColor.lightBlue} !important`,
      paddingTop: '3px !important',
    },
    paginationContainer: {
      paddingTop: '24px',
      fontSize: FontSizes.medium,
      selectors: {
        button: {
          border: 'none',
          background: 'transparent',
          fontSize: FontSizes.medium,
        },
        nav: {
          float: 'right',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              margin: '0 auto',
              float: 'none',
            },
          },
        },
        p: {
          marginTop: '7px',
          float: 'left',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              margin: '0 auto',
              float: 'none',
            },
          },
        },
        ul: {
          listStyle: 'none',
          display: 'inline-flex',
          paddingLeft: '0',
          margin: 0,
        },
        li: {
          display: 'inline',
          selectors: {
            button: {
              color: palette.skeColor.blue,
              fontWeight: 'bold',
              padding: '3px 1px 3px 1px',
              margin: '4px 6px ',
              cursor: 'pointer',
              verticalAlign: 'middle',
            },
            'button:focus': {
              color: palette.skeColor.darkBlue,
              backgroundColor: palette.skeColor.lightBlue,
              outline: 'none',
            },
            'button:hover': {
              color: palette.skeColor.darkBlue,
              backgroundColor: palette.skeColor.lightBlue,
            },
          },
        },
        '@media only screen and (max-width: 479px)': {
          display: 'grid',
        },
      },
    },
  });
};
