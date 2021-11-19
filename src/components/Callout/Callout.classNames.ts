import { getTheme } from '@fluentui/react/lib/Styling';
import { mergeStyleSets } from '@fluentui/merge-styles';
import { FontSizes, PaletteProps } from '../utils';
import { CalloutProps, CalloutColor } from './Callout.types';

function getCalloutBorder(props: CalloutProps) {
  const palette = getTheme().palette as PaletteProps;
  if (props.color === 'white' || props.border) {
    return {
      border: `2px solid ${palette.skeColor.blackAlt}`,
    };
  } else {
    return {
      border: 'none',
    };
  }
}
export const getClassNames = (props: CalloutProps, widthBtnLabel: string) => {
  const theme = getTheme();
  const palette = theme.palette as PaletteProps;

  return mergeStyleSets({
    main: {
      displayName: 'SkeCallout',
      boxShadow: 'none !important',
      zIndex: 1000000,
      ...getCalloutBorder(props),
      selectors: {
        '.ms-Callout-main': {
          width: '100%',
          backgroundColor: palette.skeColor[props.color as CalloutColor],
          boxShadow: 'none',
          'box-sizing': 'border-box',
          padding: '1rem 2.5rem 1rem 1rem',
          selectors: {
            '@media  only screen and (max-width: 479px)': {
              maxWidth: 300,
            },
            '.callout-content': {
              padding: '10px 20px 10px 10px',
            },
          },
        },
        '.ms-Callout-beak': {
          backgroundColor: palette.skeColor[props.color as CalloutColor],
          left: 'calc('.concat(widthBtnLabel, '/2) !important'),
        },
        '& p': {
          margin: '0 ',
        },
        '&& h3': {
          marginTop: '0',
          fontSize: FontSizes.large,
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
      color: `${palette.skeColor.blackAlt} !important`,
      right: '1px',
      top: '1px',
      opacity: 1,
      selectors: {
        '&& i': {
          fontWeight: 700,
        },
        '&:hover i': {
          transition: 'opacity 300ms ease-out',
        },
      },
    },
  });
};
