import { FontSizes, FontWeights, PaletteProps } from '../utils';
import { LabelWithCalloutProps } from './LabelWithCallout.types';
import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';

function getLabelSize(props: LabelWithCalloutProps) {
  switch (props.inputSize) {
    case 'small':
      return {
        fontSize: FontSizes.small,
      };
    case 'large':
      return {
        fontSize: FontSizes.large,
      };
    default:
      return {
        fontSize: FontSizes.medium,
      };
  }
}

function getDisplay(props: LabelWithCalloutProps) {
  const { help, warning } = props;
  return help !== undefined || warning !== undefined
    ? 'initial'
    : 'inline-block';
}

export const getClassNames = (props: LabelWithCalloutProps) => {
  const palette = getTheme().palette as PaletteProps;
  const { calloutFloating } = props;

  return mergeStyleSets({
    calloutContext: {
      selectors: {
        '& .ms-Callout-container': {
          position: !calloutFloating ? 'inherit' : undefined,
          margin: !calloutFloating ? '10px 0' : 0,
          width: '100%',
        },
        '& .ms-Callout': !calloutFloating && {
          left: '0 !important',
          top: '0 !important',
          position: 'inherit',
        },
        '& .ms-Callout-main': !calloutFloating && {
          maxWidth: '100%',
          display: 'inline-block',
          overflow: 'initial',
        },
        '& .ms-Callout-beak': !calloutFloating && {
          left: '20px !important',
          top: '-8px !important',
        },
        '& .ms-Callout-beakCurtain': {
          backgroundColor: 'transparent',
        },
      },
    },
    label: {
      paddingBottom: 4,
      paddingLeft: 0,
      display: getDisplay(props),
      color: palette.skeColor.blackAlt,
      fontWeight: FontWeights.regular,
      ...getLabelSize(props),
      selectors: {
        '& .ms-Label': {
          fontWeight: FontWeights.regular,
        },
      },
    },
    labelAsLegend: {
      paddingLeft: 0,
      paddingBottom: 4,
      display: 'inline-block',
      color: palette.skeColor.blackAlt,
      fontWeight: FontWeights.regular,
      ...getLabelSize(props),
      selectors: {
        '& .ms-Label': {
          fontWeight: FontWeights.regular,
        },
        '@supports (display: contents)': {
          display: 'contents',
        },
      },
    },
    labelIconArea: {
      height: '22px',
      display: 'inline-block',

      selectors: {
        '& button ': {
          height: '22px',
          marginTop: '-2px',
        },
      },
    },
    icon: {
      color: palette.skeColor.blue,
      selectors: {
        '& i': {
          fontSize: 'large',
        },
        '&:focus&:after': {
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none',
        },
      },
    },
    warningicon: {
      color: palette.skeColor.blue,
      selectors: {
        '& i': {
          fontSize: 'large',
        },
        '&:focus&:after': {
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none',
        },
      },
    },
    errorIcon: {
      position: 'absolute',
      left: -25,
      bottom: -30,
      selectors: {
        '& i': {
          color: palette.skeColor.pink,
          fontSize: 'large',
        },
      },
    },
  });
};
