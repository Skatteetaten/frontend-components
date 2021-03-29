import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, IconFontSizes } from '..';
import { PaletteProps } from '..';

export function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  const { compact, iconRight } = props;

  return mergeStyleSets({
    toggleButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: 'none',
      color: palette.skeColor.blue,
      fontSize: props.compact ? FontSizes.medium : FontSizes.smallPlus,
      padding: 0,
      fontWeight: FontWeights.bold,
      background: 'none',
      cursor: 'pointer',
      selectors: {
        '@media (min-width: 640px)': {
          fontSize: compact ? FontSizes.medium : FontSizes.largePlus
        },
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue
        },
        '&:focus': {
          outline: 'none'
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: compact ? FontSizes.medium : FontSizes.largePlus,
          margin: '0'
        },
        '& i': {
          transition: '.2s',
          padding: 0,
          marginLeft: compact
            ? iconRight
              ? '0px'
              : '-4px'
            : iconRight
            ? '0px'
            : '-8px',
          fontSize: compact ? IconFontSizes.small : IconFontSizes.xxlarge,
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: compact ? IconFontSizes.large : IconFontSizes.xxlarge
            }
          }
        }
      }
    },
    content: {
      padding: '8px 0',
      marginLeft: compact ? '18px' : '26px',
      marginBottom: '8px'
    },
    contentWhenIconRight: {
      padding: '8px 0',
      marginLeft: compact ? '18px' : '16px',
      marginBottom: '8px'
    },
    heading: {
      fontSize: compact ? FontSizes.medium : FontSizes.largePlus,
      margin: '0'
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
