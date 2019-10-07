import { keyframes, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import Card from './Card';

const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

function getDefaultBorder(props) {
  const theme = getTheme();
  switch (props.color) {
    case Card.WHITE:
      return {
        border: `3px solid ${theme.palette.skeColor.green}`
      };
    default:
      return {};
  }
}

function getCardBorder(props) {
  const theme = getTheme();
  switch (props.border) {
    case Card.YELLOW_BORDER:
      return {
        border: `3px solid ${theme.palette.skeColor.brown}`
      };
    case Card.GREEN_BORDER:
      return {
        border: `3px solid ${theme.palette.skeColor.green}`
      };
    case Card.RED_BORDER:
      return {
        border: `3px solid ${theme.palette.skeColor.pink}`
      };
    case Card.GREY_BORDER:
      return {
        border: `3px solid ${theme.palette.skeColor.grey}`
      };
    case Card.WHITE_BORDER:
      return {
        border: `3px solid ${theme.palette.skeColor.white}`
      };
    default:
      return {};
  }
}

function getMargin(props) {
  switch (props.margin) {
    case 'large':
      return {
        padding: '24px'
      };
    case 'xlarge':
      return {
        padding: '64px'
      };
    default:
      return {};
  }
}

export const getClassNames = (props, state) => {
  const theme = getTheme();
  const { isExpandedState } = state;
  const { titlesize } = props;

  return mergeStyleSets({
    root: {
      displayName: 'SkeCard',
      color: theme.semanticColors.bodyText,
      backgroundColor: theme.palette.skeColor[props.color],
      padding: '16px',
      marginBottom: props.marginbottom,
      ...getDefaultBorder(props),
      ...getCardBorder(props),
      ...getMargin(props)
    },
    expandIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
      selectors: {
        '&& .ms-Button-icon': {
          transform: isExpandedState ? 'rotate(-180deg)' : '0',
          fontSize: FontSizes.xxLarge
        }
      }
    },
    titlecontainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    header: {
      //display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    },
    title: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold
    },
    titleExpand: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold,
      selectors: {
        ':hover': {
          textDecoration: 'underline',
          cursor: 'pointer'
        }
      }
    },
    subtitle: {
      width: '100%',
      fontSize: FontSizes.large,
      fontWeight: FontWeights.regular,
      padding: '5px 0 5px 0'
    },
    body: {
      animationName: fadeIn
    }
  });
};
