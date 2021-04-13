import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, PaletteProps } from '../index';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    buttonLink: {
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
          color: palette.skeColor.blue,
        },
        '&:focus': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue,
          color: palette.skeColor.blue,
          outline: 'none',
        },
        '&:active': {
          borderColor: palette.skeColor.darkBlue,
          background: palette.skeColor.darkBlue,
          color: palette.skeColor.white,
        },
      },
    },
  });
};
