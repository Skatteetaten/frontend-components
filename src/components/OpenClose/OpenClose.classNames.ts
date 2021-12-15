import { mergeStyleSets } from '@fluentui/merge-styles';

import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenFonts from '../utils/designtokens/_fontSizes.json';
import designtokenColors from '../utils/designtokens/_colors.json';

export function getClassNames(props) {
  const { compact, iconRight, underline } = props;

  return mergeStyleSets({
    toggleButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      border: 'none',
      color: designtokenColors['ske-color-interactive'],
      fontSize: compact
        ? designtokenFonts['ske-font-size-s']
        : designtokenFonts['ske-font-size-l'],
      fontWeight: designtokenFonts['ske-font-weight-bold'],
      padding: compact
        ? `${designtokenSpacing['ske-spacing-xs']} ${designtokenSpacing['ske-spacing-sm']}`
        : `${designtokenSpacing['ske-spacing-sm']} ${designtokenSpacing['ske-spacing-md']}`,
      background: 'none',
      marginLeft: `-${designtokenSpacing['ske-spacing-md']}`,
      paddingLeft: designtokenSpacing['ske-spacing-md'],
      marginRight: `-${designtokenSpacing['ske-spacing-md']}`,
      paddingRight: designtokenSpacing['ske-spacing-md'],
      cursor: 'pointer',
      borderBottom: `${designtokenSpacing['ske-spacing-xs']} solid transparent`,
      selectors: {
        '&:hover, &:focus': {
          background: designtokenColors['ske-color-interactive-light'],
          borderBottom: `${designtokenSpacing['ske-spacing-xs']} solid ${designtokenColors['ske-color-interactive']}`,
          span: {
            textDecoration: 'none',
          },
        },
        '&:focus': {
          outline: 'none',
        },
        '& h1, h2, h3, h4, h5, h6': {
          fontSize: compact
            ? designtokenFonts['ske-font-size-s']
            : designtokenFonts['ske-font-size-l'],
          margin: '0',
        },
        '& i': {
          transition: '.2s',
          padding: compact
            ? `${designtokenSpacing['ske-spacing-xs']} 0 0`
            : '0',
          marginLeft: iconRight ? designtokenSpacing['ske-spacing-sm'] : '0',
          marginTop: compact ? '0' : designtokenSpacing['ske-spacing-xs'],
          fontSize: compact
            ? designtokenFonts['ske-font-size-icon-l']
            : designtokenFonts['ske-font-size-icon-xl'],
        },
      },
    },
    content: {
      padding: designtokenSpacing['ske-spacing-md'],
      marginLeft: compact
        ? designtokenSpacing['ske-spacing-lg']
        : designtokenSpacing['ske-spacing-xl'],
      marginBottom: designtokenSpacing['ske-spacing-md'],
    },
    contentWhenIconRight: {
      padding: `${designtokenSpacing['ske-spacing-md']} 0`,
      marginLeft: compact
        ? designtokenSpacing['ske-spacing-lg']
        : designtokenSpacing['ske-spacing-xl'],
      marginBottom: designtokenSpacing['ske-spacing-md'],
    },
    heading: {
      fontSize: compact
        ? designtokenFonts['ske-font-size-s']
        : designtokenFonts['ske-font-size-l'],
      margin: '0',
    },
    toggleTitleSpan: {
      textDecoration: underline ? 'underline' : 'none',
      textDecorationColor: 'rgba(19, 98, 174, 0.4)',
      textUnderlineOffset: '0.3rem',
      textDecorationThickness: '0.125rem',
      lineHeight: designtokenFonts['ske-line-height-l'],
      textAlign: 'left',
    },
    toggleTitleLeft: {
      paddingLeft: compact
        ? designtokenSpacing['ske-spacing-sm']
        : designtokenSpacing['ske-spacing-md'],
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
