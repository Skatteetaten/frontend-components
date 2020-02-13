import { FontSizes, FontWeights, PaletteProps } from '..';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { LabelWithCalloutProps } from './LabelWithCallout';

function getLabelSize(props: LabelWithCalloutProps) {
  switch (props.inputSize) {
    case 'small':
      return {
        fontSize: FontSizes.small
      };
    case 'large':
      return {
        fontSize: FontSizes.large
      };
    default:
      return {
        fontSize: FontSizes.medium
      };
  }
}

export const getClassNames = (props: LabelWithCalloutProps) => {
  const palette = getTheme().palette as PaletteProps;
  const { calloutFloating } = props;

  // @ts-ignore //TODO merge
  return mergeStyleSets({
    calloutContext: {
      selectors: {
        '& .ms-Callout-container': {
          position: !calloutFloating && 'inherit',
          margin: !calloutFloating ? '10px 0' : 0,
          width: '100%'
        },
        '& .ms-Callout': !calloutFloating && {
          left: '0 !important',
          top: '0 !important',
          position: 'inherit'
        },
        '& .ms-Callout-main': !calloutFloating && {
          maxWidth: '100%',
          display: 'inline-block'
        },
        '& .ms-Callout-beak': !calloutFloating && {
          left: '20px !important',
          top: '-8px !important'
        }
      }
    },
    label: {
      paddingBottom: 4,
      display: 'inline-block',
      selectors: {
        color: palette.skeColor.blackAlt,
        fontWeight: FontWeights.regular,
        ...getLabelSize(props),
        '& .ms-Label': {
          fontWeight: FontWeights.regular
        }
      }
    },
    labelAsLegend: {
      paddingLeft: 0,
      paddingBottom: 2,
      display: 'inline-block',
      selectors: {
        color: palette.skeColor.blackAlt,
        fontWeight: FontWeights.regular,
        ...getLabelSize(props),
        '& .ms-Label': {
          fontWeight: FontWeights.regular
        },

        '@supports (display: contents)': {
          display: 'contents'
        }
      }
    },
    labelIconArea: {
      height: '22px',
      display: 'inline-block',

      selectors: {
        '& button ': {
          top: '-1px',
          height: '22px'
        }
      }
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
