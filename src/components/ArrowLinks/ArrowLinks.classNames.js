import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { MdIcons } from '../utils/icons';

export const getClassNames = () => {
  const { palette } = getTheme();
  const arrowIcon = "'" + MdIcons.icons.Back + "'";

  return mergeStyleSets({
    arrowLink: {
      display: 'block',
      position: 'relative',
      margin: '0 0 12px 26px',
      selectors: {
        '&::before': {
          fontFamily: MdIcons.fontFace.fontFamily,
          transform: 'rotate(180deg)',
          display: 'inline-block',
          position: 'absolute',
          content: arrowIcon,
          color: palette.skeColor.blue,
          lineHeight: 1,
          top: '9px',
          left: '-26px'
        },
        '&:hover::before': {
          left: -21,
          cursor: 'pointer'
        },
        '&:hover a': {
          textDecoration: 'underline',
          textDecorationColor: palette.skeColor.blue,
          color: palette.skeColor.darkBlue
        }
      }
    },
    arrowLinkA: {
      color: palette.skeColor.blue,
      textDecoration: 'none',
      fontWeight: 700,
      selectors: {
        '&:hover, &:active': {
          textDecoration: 'underline',
          textDecorationColor: palette.skeColor.blue,
          color: palette.skeColor.darkBlue
        }
      }
    }
  });
};
