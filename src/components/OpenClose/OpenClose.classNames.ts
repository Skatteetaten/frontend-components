import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import {
  FontSizes,
  FontWeights,
  LineHeightSizes,
  IconFontSizes,
  PaletteProps,
} from '../utils';

export function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  const { compact, iconRight, noBorder } = props;

  return mergeStyleSets({
    toggleButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      border: 'none',
      color: palette.skeColor.blue,
      fontSize: FontSizes.medium,
      fontWeight: FontWeights.bold,
      padding: compact
        ? '0.125rem 0.25rem 0.125rem 0.25rem'
        : '0.25rem 0.5rem 0.375rem 0.5rem',
      background: 'none',
      marginLeft: '-0.5rem',
      paddingLeft: '0.5rem',
      marginRight: '-0.5rem',
      paddingRight: '0.5rem',
      cursor: 'pointer',
      borderBottom: `0.125rem solid transparent`,
      selectors: {
        '@media (min-width: 640px)': {
          fontSize: compact ? FontSizes.medium : FontSizes.largePlus,
        },
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue,
          borderBottom: `0.125rem solid ${palette.skeColor.blue}`,
          span: {
            textDecoration: 'none',
          },
        },
        '&:focus': {
          outline: 'none',
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: compact ? FontSizes.medium : FontSizes.largePlus,
          margin: '0',
        },
        '& i': {
          transition: '.2s',
          padding: 0,
          marginLeft: iconRight ? '0.125rem' : '-0.25rem',

          fontSize: IconFontSizes.xlarge,
          fontWeight: FontWeights.bold,
          selectors: {
            '@media (min-width: 640px)': {
              fontSize: compact ? IconFontSizes.large : IconFontSizes.xxlarge,
              padding: compact ? '0.125rem 0 0 0' : '0',
            },
          },
        },
      },
    },
    content: {
      padding: '0.5rem 0',
      marginLeft: compact ? '1.125rem' : '1.75rem',
      marginBottom: '0.5rem',
      selectors: {
        '@media (min-width: 640px)': {
          marginLeft: compact ? '1.125rem' : '2.25rem',
        },
      },
    },
    contentWhenIconRight: {
      padding: '0.5rem 0',
      marginLeft: compact ? '1.125rem' : '1rem',
      marginBottom: '0.5rem',
    },
    heading: {
      fontSize: compact ? FontSizes.medium : FontSizes.largePlus,
      margin: '0',
    },
    toggleTitleSpan: {
      textDecoration: noBorder ? 'none' : 'underline',
      textDecorationColor: 'rgba(19, 98, 174, 0.4)',
      textUnderlineOffset: '0.3rem',
      textDecorationThickness: '0.125rem',
      lineHeight: LineHeightSizes.large,
      textAlign: 'left',
    },
    toggleTitleLeft: {
      paddingLeft: compact ? '0.25rem' : '0.5rem',
    },
    toggleButtonOpen: {
      selectors: {
        '& i': {
          transform: 'rotate(180deg)',
        },
      },
    },
  });
}
