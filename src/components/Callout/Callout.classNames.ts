import { getTheme } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
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
          maxWidth: 600,
          width: '100%',
          backgroundColor: palette.skeColor[props.color as CalloutColor],
          boxShadow: 'none',
          selectors: {
            '@media  only screen and (max-width: 479px)': {
              maxWidth: 300,
            },
            '& h3': {
              padding: '10px 10px 0 10px',
            },
            '& p': {
              padding: '10px 10px 0 10px',
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
        '&& h3': {
          marginTop: '5px',
          marginBottom: '-12px',
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
      right: 0,
      top: 0,
      opacity: 1,
      selectors: {
        '&& i': {
          fontWeight: 700,
        },
        '&:hover i': {
          transition: 'opacity 300ms ease-out',
          backgroundColor: palette.skeColor.lightBlue,
        },
        '&:focus i': {
          backgroundColor: palette.skeColor.lightBlue,
          borderRadius: 0,
        },
        '&& .ms-Button-icon': {
          padding: '4px 4px 4px 4px',
        },
        '&.ms-Button': {
          border: 'none !important',
          backgroundColor: 'transparent !important',
        },
      },
    },
  });
};