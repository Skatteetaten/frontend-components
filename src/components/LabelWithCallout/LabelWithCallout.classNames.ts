import { LabelWithCalloutProps } from './LabelWithCallout.types';
import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';

function getLabelSize(props: LabelWithCalloutProps) {
  switch (props.inputSize) {
    case 'small':
      return {
        fontSize: designtokenFontSizes['ske-font-size-xs'],
      };
    case 'large':
      return {
        fontSize: designtokenFontSizes['ske-font-size-icon-l'],
      };
    default:
      return {
        fontSize: designtokenFontSizes['ske-font-size-m'],
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
  const { calloutFloating } = props;

  return mergeStyleSets({
    calloutLabelWrapper: {
      display: 'flex',
    },
    calloutContext: {
      selectors: {
        '& .ms-Callout-container': {
          position: !calloutFloating ? 'inherit' : undefined,
          margin: !calloutFloating
            ? `${designtokenSpacing['ske-spacing-lg']} 0`
            : 0,
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
          left: `${designtokenSpacing['ske-spacing-xl']} !important`,
          top: `-${designtokenSpacing['ske-spacing-md']} !important`,
        },
        '& .ms-Callout-beakCurtain': {
          backgroundColor: 'transparent',
        },
      },
    },
    label: {
      paddingBottom: designtokenSpacing['ske-spacing-sm'],
      paddingLeft: 0,
      lineHeight: designtokenFontSizes['ske-line-height-m'],
      display: getDisplay(props),
      color: designtokenColors['ske-color-black-100'],
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      ...getLabelSize(props),
      selectors: {
        '& .ms-Label': {
          fontWeight: designtokenFontSizes['ske-font-weight-regular'],
        },
      },
    },
    labelAsLegend: {
      paddingLeft: 0,
      paddingBottom: designtokenSpacing['ske-spacing-sm'],
      display: 'inline-block',
      color: designtokenColors['ske-color-black-100'],
      fontWeight: designtokenFontSizes['ske-font-weight-regular'],
      ...getLabelSize(props),
      selectors: {
        '& .ms-Label': {
          fontWeight: designtokenFontSizes['ske-font-weight-regular'],
        },
        '@supports (display: contents)': {
          display: 'contents',
        },
      },
    },
    labelIconArea: {
      height: designtokenSpacing['ske-spacing-xl'],
      display: 'inline-block',

      selectors: {
        '& button ': {
          height: designtokenSpacing['ske-spacing-xl'],
          width: designtokenSpacing['ske-spacing-xl'],
          marginLeft: designtokenSpacing['ske-spacing-xs'],
          borderRadius: '100%',
        },
      },
    },
    icon: {
      color: designtokenColors['ske-color-interactive'],
      selectors: {
        '& i': {
          fontSize: designtokenFontSizes['ske-font-size-l'],
        },
        '&:hover': {
          background: designtokenColors['ske-color-interactive-light'],
        },
        '&:focus': {
          background: designtokenColors['ske-color-white'],
        },
        '&:focus&:after': {
          border: `2px solid ${designtokenColors['ske-color-interactive']}`,
          borderRadius: '100%',
          inset: '-1px',
          outline: 'none',
        },
      },
    },
    warningicon: {
      color: designtokenColors['ske-color-interactive'],
      selectors: {
        '& i': {
          fontSize: designtokenFontSizes['ske-font-size-l'],
        },
        '&:hover': {
          background: designtokenColors['ske-color-interactive-light'],
        },
        '&:focus': {
          background: designtokenColors['ske-color-white'],
        },
        '&:focus&:after': {
          border: `2px solid ${designtokenColors['ske-color-interactive']}`,
          borderRadius: '100%',
          inset: '-1px',
          outline: 'none',
        },
      },
    },
    errorIcon: {
      position: 'absolute',
      left: `-${designtokenSpacing['ske-spacing-xl']}`,
      bottom: designtokenSpacing['ske-spacing-xxl'],
      selectors: {
        '& i': {
          color: designtokenColors['ske-color-status-error'],
          fontSize: designtokenFontSizes['ske-font-size-l'],
        },
      },
    },
  });
};
