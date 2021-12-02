import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { PaletteProps } from '../utils';

import spacing from '../utils/designtokens/_spacing.json';
import fonts from '../utils/designtokens/_fontSizes.json';

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
      fontSize: compact ? fonts['ske-font-size-s'] : fonts['ske-font-size-l'],
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
          spacing['ske-spacing-sm'] +
          ' ' +
          spacing['ske-spacing-md'],
      background: 'none',
      marginLeft: `-${spacing['ske-spacing-md']}`,
      paddingLeft: spacing['ske-spacing-md'],
      marginRight: `-${spacing['ske-spacing-md']}`,
      paddingRight: spacing['ske-spacing-md'],
      cursor: 'pointer',
      borderBottom: `${spacing['ske-spacing-xs']} solid transparent`,
      selectors: {
        '&:hover, &:focus': {
          background: palette.skeColor.lightBlue,
          borderBottom: `${spacing['ske-spacing-xs']} solid ${palette.skeColor.interactive}`,
          span: {
            textDecoration: 'none',
          },
        },
        '&:focus': {
          outline: 'none',
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: compact
            ? fonts['ske-font-size-s']
            : fonts['ske-font-size-l'],
          margin: '0',
        },
        '& i': {
          transition: '.2s',
          padding: compact ? spacing['ske-spacing-xs'] + ' 0 0 0' : '0',
          marginLeft: iconRight ? spacing['ske-spacing-sm'] : '0',
          marginTop: compact
            ? spacing['ske-spacing-xs']
            : spacing['ske-spacing-sm'],
          fontSize: compact
            ? fonts['ske-font-size-icon-l']
            : fonts['ske-font-size-icon-xl'],
        },
      },
    },
    content: {
      padding: spacing['ske-spacing-md'],
      marginLeft: compact
        ? spacing['ske-spacing-lg']
        : spacing['ske-spacing-xl'],
      marginBottom: spacing['ske-spacing-md'],
    },
    contentWhenIconRight: {
      padding: `${spacing['ske-spacing-md']} 0`,
      marginLeft: compact
        ? spacing['ske-spacing-lg']
        : spacing['ske-spacing-xl'],
      marginBottom: spacing['ske-spacing-md'],
    },
    heading: {
      fontSize: compact ? fonts['ske-font-size-s'] : fonts['ske-font-size-l'],
      margin: '0',
    },
    toggleTitleSpan: {
      textDecoration: underline ? 'underline' : 'none',
      textDecorationColor: 'rgba(19, 98, 174, 0.4)',
      textUnderlineOffset: '0.3rem',
      textDecorationThickness: '0.125rem',
      lineHeight: fonts['ske-line-height-l'],
      textAlign: 'left',
    },
    toggleTitleLeft: {
      paddingLeft: compact
        ? spacing['ske-spacing-sm']
        : spacing['ske-spacing-md'],
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
