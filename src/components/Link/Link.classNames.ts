import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, PaletteProps } from '..';

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

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
    },
    linkLookingLikeAButton: {
      display: 'inline-block',
      borderColor: palette.skeColor.blue,
      background: palette.skeColor.blue,
      color: palette.skeColor.white,
      boxShadow: `0 8px 6px -6px ${palette.skeColor.lightGrey}`,
      fontSize: FontSizes.largePlus,
      borderWidth: '3px',
      borderRadius: '7px',
      borderStyle: 'solid',
      fontWeight: FontWeights.semibold,
      padding: '25px',
      maxWidth: 'calc((75*550px)/100)',
      textDecoration: 'none',
      transition: 'background 0.3s',
      selectors: {
        '&:hover': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue,
          color: palette.skeColor.blue
        },
        '&:focus': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue,
          color: palette.skeColor.blue
        },
        '&:active': {
          borderColor: palette.skeColor.darkBlue,
          background: palette.skeColor.darkBlue,
          color: palette.skeColor.white
        }
      }
    }
  });
};
