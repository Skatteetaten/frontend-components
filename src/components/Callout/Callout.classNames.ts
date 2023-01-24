import { mergeStyleSets } from '@fluentui/merge-styles';
import { CalloutProps, CalloutColor } from './Callout.types';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';
import designtokenSpacing from '../utils/designtokens/_spacing.json';

function getCalloutBorder(props: CalloutProps) {
  if (props.color === 'ske-color-white-100' || props.border) {
    return {
      border: `2px solid ${designtokenColors['ske-color-black-100']}`,
    };
  } else {
    return {
      border: 'none',
    };
  }
}
export const getClassNames = (props: CalloutProps, widthBtnLabel: string) => {
  return mergeStyleSets({
    main: {
      displayName: 'SkeCallout',
      boxShadow: 'none !important',
      zIndex: 1000000,
      ...getCalloutBorder(props),
      selectors: {
        '.ms-Callout-main': {
          width: '100%',
          backgroundColor: designtokenColors[props.color as CalloutColor],
          boxShadow: 'none',
          'box-sizing': 'border-box',
          padding: `${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-xxl']} ${designtokenSpacing['ske-spacing-lg']} ${designtokenSpacing['ske-spacing-lg']}`, //'1rem 2.5rem 1rem 1rem',
        },
        '.ms-Callout-beak': {
          backgroundColor: designtokenColors[props.color as CalloutColor],
          left: 'calc('.concat(widthBtnLabel, '/2) !important'),
        },
        '& p': {
          margin: '0 ',
        },
        '&& h3': {
          marginTop: '0',
          fontSize: designtokenFontSizes['ske-font-size-m'],
        },
      },
    },
    calloutWrapper: {
      width: '100%',
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      position: 'absolute',
      color: `${designtokenColors['ske-color-black-100']} !important`,
      right: '1px',
      top: '1px',
      opacity: 1,
      selectors: {
        '&& i': {
          fontWeight: designtokenFontSizes['ske-font-weight-bold'],
        },
        '&:hover i': {
          transition: 'opacity 300ms ease-out',
        },
      },
    },
  });
};
