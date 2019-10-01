import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

export var getClassNames = function getClassNames(props) {
  const theme = getTheme();

  return mergeStyles([
    {
      selectors: {
        '&.ms-Spinner': {
          position: 'relative'
        },
        '.ms-Spinner-circle': {
          display: 'inline-block',
          borderRadius: '50%',
          border: '4px solid',
          borderColor:
            props.spinnerColor === 'white'
              ? theme.palette.skeColor.white
              : theme.palette.skeColor.blackAlt,
          borderTop: '4px solid transparent',
          animationDuration: '1s',
          animationIterationCount: 'linear infinite',
          animationTimingFunction: 'linear'
        }
      }
    }
  ]);
};
