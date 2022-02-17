import { FontSizes, FontWeights, PaletteProps } from '../utils';
import { CardProps, CardState, CardColor, CardBorder } from './Card.types';
//import { getTheme } from '@fluentui/react';
import { getTheme } from '@fluentui/react';
import { keyframes, mergeStyleSets } from '@fluentui/merge-styles';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

function getCardBorder(props: CardProps) {
  const palette = getTheme().palette as PaletteProps;
  switch (props.border) {
    case CardBorder.YELLOW_BORDER:
      return {
        border: `4px solid ${palette.skeColor.brown}`,
      };
    case CardBorder.GREEN_BORDER:
      return {
        border: `4px solid ${palette.skeColor.green}`,
      };
    case CardBorder.RED_BORDER:
      return {
        border: `4px solid ${palette.skeColor.pink}`,
      };
    case CardBorder.GREY_BORDER:
      return {
        border: `4px solid ${palette.skeColor.grey}`,
      };
    case CardBorder.WHITE_BORDER:
      return {
        border: `4px solid ${palette.skeColor.white}`,
      };
    default:
      return { border: 'none' };
  }
}

function getMargin(props: CardProps) {
  switch (props.margin) {
    case 'none':
      return {
        margin: '0px',
      };
    case 'small':
      return {
        margin: '4px',
      };
    case 'medium':
      return {
        margin: '12px',
      };
    case 'large':
      return {
        margin: '24px',
      };
    case 'xlarge':
      return {
        margin: '64px',
      };
    default:
      return { margin: '8px' };
  }
}

export const getClassNames = (props: CardProps, state: CardState) => {
  const theme = getTheme();
  const palette = theme.palette as PaletteProps;
  const { isExpandedState } = state;
  const { title, titlesize, expand } = props;
  return mergeStyleSets({
    root: {
      displayName: 'SkeCard',
      color: theme.semanticColors.bodyText,
      backgroundColor: palette.skeColor[props.color as CardColor],
      marginBottom: props.marginbottom,
      ...getCardBorder(props),
      padding: 0,
      display: 'flow-root',
      boxSizing: 'border-box',
      selectors: {
        ':hover': {
          cursor: expand ? 'pointer' : 'default',
        },
        ':focus': {
          outline: 'none',
        },
      },
    },
    expandIcon: {
      color: palette.skeColor.blue,
      borderTopWidth: '0px',
      border: 'none',
      height: '46px',
      width: '46px',
      borderRadius: '50%',
      marginRight: '8px',
      selectors: {
        i: {
          transform: isExpandedState ? 'rotate(-180deg)' : '0',
          fontSize: FontSizes.superLarge,
        },
        ':hover': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue,
        },
      },
    },
    titlecontainer: {
      ...getMargin(props),
      marginBottom: '2px',
      textAlign: 'left',
      outline: 'none',
      selectors: {
        ':focus': {
          textDecoration: 'underline',
        },
      },
    },
    header: {
      width: '100%',
      backgroundColor: 'inherit',
      border: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 0,
      position: 'relative',
      wordBreak: 'break-word',
      selectors: {
        ':hover': {
          cursor: expand ? 'pointer' : '',
        },
        ':active': {
          color: expand ? palette.skeColor.blue : palette.skeColor.blackAlt,
        },
        ':focus': {
          outlineColor: palette.skeColor.blue,
        },
        ':focus:not(:focus-visible)': {
          outline: 'none',
        },
        ':focus-visible': {
          outlineColor: palette.skeColor.blue,
        },
      },
    },
    title: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold,
    },
    titleExpand: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold,
      margin: 0,
      selectors: {
        ':hover': {
          textDecoration: 'underline',
        },
      },
    },
    actions: {
      fontSize: FontSizes.medium,
    },
    subtitle: {
      width: '100%',
      fontSize: FontSizes.large,
      fontWeight: FontWeights.regular,
      padding: '5px 0 5px 0',
    },
    body: {
      textAlign: 'left',
      animationName: fadeIn,
      fontSize: FontSizes.medium,
      ...getMargin(props),
      marginTop: title ? '0' : undefined,
    },
  });
};
