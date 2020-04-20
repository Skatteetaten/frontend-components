import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { SkeIcons } from '../utils/icons';
import { hex2rgba, PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  const arrowIcon = "'" + SkeIcons.icons['ArrowForward'] + "'";

  return mergeStyleSets({
    arrowLink: {
      display: 'block',
      position: 'relative',
      margin: '0 0 12px 0px'
    },
    icon: {
      /* Icon is imported and then hidden to import correct icon font */
      display: 'none'
    },
    arrowLinkList: {
      paddingInlineStart: '24px'
    },
    arrowLinkA: {
      color: palette.skeColor.blue,
      textDecoration: 'none',
      fontWeight: 700,
      borderBottom: '2px solid ' + hex2rgba(palette.skeColor.blue, 0.25),
      selectors: {
        '&::before': {
          fontFamily: SkeIcons.fontFace.fontFamily,
          display: 'inline-block',
          textRendering: 'auto',
          verticalAlign: 'bottom',
          position: 'absolute',
          content: arrowIcon,
          color: palette.skeColor.blue,
          lineHeight: 1,
          top: '12px',
          left: '-26px'
        },
        '&:hover::before, &:focus::before': {
          left: -22,
          cursor: 'pointer',
          color: palette.skeColor.darkBlue,
          transition: '0.1s'
        },
        '&:hover, &:active': {
          color: palette.skeColor.darkBlue,
          borderBottom: '2px solid ' + palette.skeColor.darkBlue
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
