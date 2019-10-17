import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, IconFontSizes } from '../utils/fonts';
import { PaletteProps } from '..';

export function getClassNames(): string {
  const palette = getTheme().palette as PaletteProps;
  // @ts-ignore TODO
  return mergeStyleSets({
    containerStep: {
      margin: '0 auto'
    },
    wrapperStep: {
      position: 'relative'
    },
    accordion: {
      position: 'relative',
      backgroundColor: palette.skeColor.white,
      marginBottom: 20,
      selectors: {
        '& hr': {
          margin: 0,
          border: 'solid',
          borderWidth: '1px',
          color: palette.skeColor.lightGrey
        }
      }
    },
    content: {
      backgroundColor: palette.skeColor.white,
      padding: '0px 0 15px 10px',
      selectors: {
        '&:focus': {
          background: palette.skeColor.lightBlue
        }
      }
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.skeColor.white,
      border: 'solid',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      borderWidth: '2px',
      borderColor: palette.skeColor.black,
      fontSize: FontSizes.large,
      fontWeight: FontWeights.bold,
      zIndex: 10,
      marginTop: 20
    },
    stepLine: {
      display: 'block',
      position: 'absolute',
      width: 2,
      backgroundColor: palette.skeColor.lightGrey,
      top: 50,
      left: 32,
      height: '100%'
    },
    toggleButton: {
      width: '100%',
      border: 'none',
      textAlign: 'left',
      color: palette.skeColor.blue,
      fontSize: FontSizes.medium,
      fontWeight: FontWeights.bold,
      padding: '20px 24px 16px 8px',
      background: 'none',
      position: 'relative',
      cursor: 'pointer',
      marginTop: '0px',
      marginBottom: '0px',

      selectors: {
        '@media (min-width: 640px)': {
          fontSize: FontSizes.largePlus
        },
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue
        },
        '&:focus': {
          outline: 'none'
        },
        '& p': {
          color: palette.skeColor.blackAlt,
          width: '100%',
          border: 'none',
          textAlign: 'left',
          fontSize: FontSizes.large,
          fontWeight: FontWeights.regular,
          margin: 0,
          padding: '5px 5px 5px 0px'
        },
        '& i': {
          position: 'absolute',
          right: 14,
          top: 14,
          transition: '.2s',
          fontSize: IconFontSizes.xlarge,
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: IconFontSizes.xxlarge
            }
          }
        }
      }
    },
    toggleButtonOpen: {
      selectors: {
        '& i': {
          transform: 'rotate(180deg)'
        }
      }
    }
  });
}
