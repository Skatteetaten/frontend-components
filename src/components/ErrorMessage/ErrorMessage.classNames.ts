import { mergeStyles } from '@uifabric/merge-styles';
import {
  getTheme,
  AnimationClassNames,
  getGlobalClassNames
} from '@uifabric/styling';
import { MdIcons } from '../utils/icons/';

const errorIcon = "'" + MdIcons.icons.Error + "'";
export var getClassNames = function getClassNames(props) {
  const theme = getTheme();
  const { palette, fonts } = theme;
  const classNames = getGlobalClassNames({}, theme);

  return mergeStyles([
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
