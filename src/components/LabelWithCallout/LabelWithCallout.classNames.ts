import { FontSizes, FontWeights, PaletteProps } from '..';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

function getLabelSize(props: any) {
  switch (props.labelSize) {
    case 'small':
      return {
        fontSize: FontSizes.small
      };
    default:
      return {
        fontSize: FontSizes.medium
      };
  }
}

export const getClassNames = (props: any) => {
  const palette = getTheme().palette as PaletteProps;
  console.log(props.boldText);
  return mergeStyleSets({
    labelArea: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      fontSize: FontSizes.small
    },
    label: {
      selectors: {
        color: palette.skeColor.blackAlt,
        ...getLabelSize(props),
        '& .ms-Label': {
          fontWeight: props.boldText ? FontWeights.bold : FontWeights.regular
        }
      }
    },
    labelIconArea: {
      height: '26px',
      marginTop: '-5px'
    },
    icon: {
      color: palette.skeColor.blue,
      selectors: {
        '& i': {
          fontSize: 'large'
        },
        '&:focus&:after': {
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none'
        }
      }
    },
    errorIcon: {
      position: 'absolute',
      left: -25,
      bottom: -30,
      selectors: {
        '& i': {
          color: palette.skeColor.pink,
          fontSize: 'large'
        }
      }
    }
  });
};
