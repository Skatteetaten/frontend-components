import { getTheme } from '@uifabric/styling';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { FontSizes } from '../utils/fonts';

function getCalloutBorder(props) {
  const { palette } = getTheme();
  switch (props.color) {
    case 'white':
      return {
        border: `2px solid ${palette.skeColor.blackAlt}`
      };
    default:
      return {
        border: 'none'
      };
  }
}

export const getClassNames = props => {
  const theme = getTheme();

  return mergeStyleSets({
    main: {
      displayName: 'SkeCallout',
      boxShadow: 'none !important',
      zIndex: 1000000,
      ...getCalloutBorder(props),
      selectors: {
        '.ms-Callout-main': {
          maxWidth: 600,
          backgroundColor: theme.palette.skeColor[props.color],
          boxShadow: 'none',
          border: 'none',
          padding: '10px 20px 10px 10px',
          selectors: {
            '@media  only screen and (max-width: 479px)': {
              maxWidth: 300
            },
            '& h3': {
              padding: '10px 10px 0 10px'
            },
            '& p': {
              maxWidth: 500,
              padding: '10px 10px 0 10px'
            }
          }
        },
        '.ms-Callout-beak': {
          backgroundColor: theme.palette.skeColor[props.color]
        },
        '&& h3': {
          marginTop: '5px',
          marginBottom: '-12px',
          fontSize: FontSizes.large
        }
      }
    },
    calloutWrapper: {
      width: '100%'
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      position: 'absolute !important',
      color: `${theme.palette.skeColor.blackAlt} !important`,
      right: 0,
      top: 0,
      opacity: 1,
      selectors: {
        '&& i': {
          fontWeight: 700
        },
        '&:hover i': {
          opacity: 0.7,
          transition: 'opacity 300ms ease-out'
        },
        '&& .ms-Button-icon': {
          padding: '10px 10px 10px 10px'
        },
        '&.ms-Button': {
          border: 'none !important',
          backgroundColor: 'transparent !important'
        }
      }
    }
  });
};
