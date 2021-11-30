import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import {
  FontSizes,
  FontWeights,
  LineHeightSizes,
  IconFontSizes,
  PaletteProps,
} from '../utils';

import spacing from '../utils/designtokens/_spacing.json';
import fonts from '../utils/designtokens/_fontSizes.json';
import breakpoints from '../utils/designtokens/_breakpoints.json';
import { string } from 'prop-types';

export function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  const { compact, iconRight, underline } = props;

  return mergeStyleSets({
    toggleButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      border: 'none',
      color: palette.skeColor.blue,
      fontSize: fonts['ske-font-size-m'],
      fontWeight: fonts['ske-font-weight-bold'],
      padding: compact
        ? spacing['ske-spacing-xs'] +
          ' ' +
          spacing['ske-spacing-sm'] +
          ' ' +
          spacing['ske-spacing-xs'] +
          ' ' +
          spacing['kse-spacing-sm']
        : spacing['ske-spacing-sm'] +
          ' ' +
          spacing['ske-spacing-md'] +
          ' ' +
          spacing['ske-spacing-sm'] + //'0.375rem' +
          ' ' +
          spacing['ske-spacing-md'],
      background: 'none',
      marginLeft: -spacing['ske-spacing-md'],
      paddingLeft: spacing['ske-spacing-md'],
      marginRight: -spacing['ske-spacing-md'],
      paddingRight: spacing['ske-spacing-md'],
      cursor: 'pointer',
      borderBottom: `${spacing['ske-spacing-xs']} solid transparent`,
      selectors: {
        [`@media (min-width: ${breakpoints['ske-breakpoint-md']})`]: {
          fontSize: compact
            ? fonts['ske-font-size-m']
            : fonts['ske-font-size-l'],
        },
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue,
          borderBottom: `0.125rem solid ${palette.skeColor.interactive}`,
          span: {
            textDecoration: 'none',
          },
        },
        '&:focus': {
          outline: 'none',
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: compact ? FontSizes.small : FontSizes.largePlus,
          margin: '0',
        },
        '& i': {
          transition: '.2s',
          padding: 0,
          marginLeft: iconRight ? '0.125rem' : '-0.25rem',
          fontSize: IconFontSizes.xlarge,
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
      padding: '8px 0',
      marginLeft: compact ? '18px' : '26px',
      marginBottom: '8px',
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
      textDecoration: underline ? 'underline' : 'none',
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
