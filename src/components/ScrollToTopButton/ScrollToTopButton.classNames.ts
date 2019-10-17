import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  const whiteBackground = palette.skeColor.white;
  const hoverBackground = palette.skeColor.lightBlue;
  const color = palette.skeColor.blue;
  const hoverColor = palette.skeColor.blackAlt;

  // @ts-ignore TODO
  return mergeStyleSets({
    topcontainer: {
      width: '100%',
      marginTop: '40px',
      zIndex: 2,
      visibility: 'hidden',
      selectors: {
        '@media (min-width: 1170px)': {
          position: 'fixed',
          top: 0,
          right: 0
        }
      }
    },
    container: {
      position: 'relative !important',
      margin: '0 auto',
      opacity: 0,
      transition: '0.2s',
      selectors: {
        '@media (min-width: 900px)': {
          maxWidth: '878px'
        },
        '@media (min-width: 1170px)': {
          maxWidth: '1151.9px'
        }
      }
    },
    box: {
      marginTop: 0,
      selectors: {
        '@media (min-width: 1170px)': {
          top: '80vh',
          position: 'absolute',
          right: 0
        }
      }
    },
    actionButton: {
      display: 'block',
      textDecoration: 'none !important',
      textAlign: 'center',
      margin: '24px auto',
      selectors: {
        '.ms-Button-flexContainer': {
          flexDirection: 'column'
        },
        ':hover .ms-Button-flexContainer > div': {
          backgroundColor: hoverBackground,
          color: hoverColor
        }
      }
    },
    icon: {
      fontSize: '40px',
      color: color,
      display: 'inline'
    },
    iconFixateContainer: {
      background: whiteBackground,
      borderRadius: '50%',
      height: '30px',
      width: '30px',
      position: 'absolute'
    },
    iconFixate: {
      position: 'absolute',
      top: '-0.5em',
      left: '-0.2em'
    },
    label: {
      fontSize: '13px',
      fontWeight: 700,
      textAlign: 'center',
      marginTop: '40px',
      backgroundColor: 'white !important',
      borderRadius: '10px',
      color: color,
      padding: '2px 15px'
    },
    vis: {
      visibility: 'visible',
      opacity: '1 !important',
      transform: 'translateY(-15px)'
    }
  });
};
