import { mergeStyles } from '@fluentui/merge-styles';
import {
  getTheme,
  AnimationClassNames,
  getGlobalClassNames,
} from '@fluentui/react/lib/Styling';
import { SkeIcons, PaletteProps } from '../utils';

const errorIcon = "'" + SkeIcons.icons.Error + "'";
export const getClassNames = function getClassNames() {
  const theme = getTheme();
  const { fonts } = theme;
  const palette = theme.palette as PaletteProps;
  const classNames = getGlobalClassNames({}, theme);

  return mergeStyles([
    // @ts-ignore TODO
    classNames.error,
    AnimationClassNames.slideDownIn20,
    fonts.small,
    {
      display: 'block',
      color: palette.skeColor.error,
      fontWeight: 500,
      paddingTop: 5,
      selectors: {
        ':before': {
          fontFamily: SkeIcons.fontFace.fontFamily,
          fontSize: fonts.small,
          content: errorIcon,
          marginRight: 3,
        },
      },
    },
  ]);
};
