import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { MdIcons } from '../utils/icons';

export const getClassNames = props => {
  const { palette } = getTheme();
  const icon = "'" + MdIcons.icons[props.icon] + "'";

  return mergeStyleSets({
    iconLink: {
      display: 'block',
      position: 'relative',
      margin: '0 0 12px 26px',
      selectors: {
        '&::before': {
          fontWeight: 700,
          fontFamily: MdIcons.fontFace.fontFamily,
          display: 'inline-block',
          position: 'absolute',
          content: icon,
          color: palette.skeColor.blue,
          lineHeight: 1,
          top: '12px',
          left: '-26px',
          cursor: 'pointer'
        },
        '&:hover a': {
          borderBottom: '2px solid ' + palette.skeColor.blue
        }
      }
    },
    iconLinkA: {
      color: palette.skeColor.blue,
      textDecoration: 'none',
      fontWeight: 700
    }
  });
};
