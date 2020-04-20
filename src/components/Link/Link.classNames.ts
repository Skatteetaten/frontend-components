import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { hex2rgba, PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    icon: {
      color: palette.skeColor.blue,
      fontSize: '18px',
      verticalAlign: 'middle',
      paddingLeft: '4px',
      paddingRight: '4px',
      borderBottom: 'none'
    },
    linkContainer: {
      margin: '0px'
    },
    iconLink: {
      color: palette.skeColor.blue,
      textDecoration: 'none',
      fontWeight: 700,
      borderBottom: '2px solid ' + hex2rgba(palette.skeColor.blue, 0.25),
      selectors: {
        '&:hover': {
          color: palette.skeColor.darkBlue,
          borderBottom: '2px solid ' + palette.skeColor.darkBlue,
          transition: 'border-bottom 0.3s'
        },
        '&:focus': {
          color: palette.skeColor.darkBlue,
          borderBottom: '2px solid ' + palette.skeColor.darkBlue,
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none'
        }
      }
    }
  });
};
