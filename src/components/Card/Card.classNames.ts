import {
  CardColor,
  CardBorder,
  CardProps,
  CardState,
  FontSizes,
  FontWeights,
  PaletteProps,
} from '../index';
import { getTheme } from '@uifabric/styling';
import { keyframes, mergeStyleSets } from '@uifabric/merge-styles';

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
    case 'large':
      return {
        padding: '24px',
      };
    case 'xlarge':
      return {
        padding: '64px',
      };
    default:
      return {};
  }
}

export const getClassNames = (props: CardProps, state: CardState) => {
  const theme = getTheme();
  const palette = theme.palette as PaletteProps;
  const { isExpandedState } = state;
  const { titlesize } = props;
  return mergeStyleSets({
    root: {
      displayName: 'SkeCard',
      color: theme.semanticColors.bodyText,
      backgroundColor: palette.skeColor[props.color as CardColor],
      padding: '8px 16px',
      marginBottom: props.marginbottom,
      ...getCardBorder(props),
      ...getMargin(props),
      width: '100%',
      selectors: {
        ':hover': {
          cursor: 'pointer',
        },
        ':focus': {
          outline: 'none',
        },
      },
    },
    expandIcon: {
      alignSelf: 'flex-start',
      selectors: {
        i: {
          transform: isExpandedState ? 'rotate(-180deg)' : '0',
          fontSize: FontSizes.xxLarge,
        },
        ':hover': {
          borderColor: palette.skeColor.blue,
          background: palette.skeColor.lightBlue,
        },
      },
    },
    titlecontainer: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      outline: 'none',
      selectors: {
        ':focus': {
          textDecoration: 'underline',
        },
      },
    },
    header: {
      display: 'flex',
      marginTop: '5px',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      wordBreak: 'break-word',
    },
    title: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold,
      margin: 0,
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
    },
  });
};
