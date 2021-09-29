import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, PaletteProps } from '../utils';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    buttonLink: {
      display: 'inline-block',
      borderColor: palette.skeColor.blue,
      background: palette.skeColor.blue,
      color: palette.skeColor.white,
      boxShadow: `0 8px 6px -6px ${palette.skeColor.grey30}`,
      fontSize: FontSizes.largePlus,
      borderWidth: '3px',
      borderRadius: '7px',
      borderStyle: 'solid',
      fontWeight: FontWeights.semibold,
      padding: '25px',
      maxWidth: 'calc((75*550px)/100)',
      textDecoration: 'none',
      transition: '0.2s',

      selectors: {
        '&:hover': {
          borderColor: palette.skeColor.interactiveDark,
          background: palette.skeColor.interactiveDark,
          color: palette.white,
        },
        '&:focus': {
          borderColor: palette.skeColor.interactive,
          background: palette.skeColor.interactiveDark,
          color: palette.white,
          outline: 'none',
        },
        '&:active': {
          transform: 'translateY(2px)',
          transitionTimingFunction: 'ease',
          transition: '0.15s',
          boxShadow: 'none',
        },
      },
    },
  });
};
