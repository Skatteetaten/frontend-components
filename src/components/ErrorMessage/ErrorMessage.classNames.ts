import { mergeStyles } from '@uifabric/merge-styles';
import {
  getTheme,
  AnimationClassNames,
  getGlobalClassNames
} from '@uifabric/styling';
import { MdIcons } from '../utils/icons/';
import { PaletteProps } from '..';

const errorIcon = "'" + MdIcons.icons.Error + "'";
export var getClassNames = function getClassNames() {
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
          fontFamily: MdIcons.fontFace.fontFamily,
          fontSize: fonts.small,
          content: errorIcon,
          marginRight: 3
        }
      }
    }
  ]);
};
