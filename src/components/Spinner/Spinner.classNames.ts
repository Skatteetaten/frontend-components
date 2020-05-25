import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';
import { SpinnerProps } from './Spinner';

export const getClassNames = function getClassNames(props: SpinnerProps) {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      selectors: {
        '.ms-Spinner-label': {
          color:
            props.labelColor === 'blue'
              ? palette.skeColor.blue
              : props.labelColor
        },
        '&.ms-Spinner': {
          position: 'relative'
        },
        '.ms-Spinner-circle': {
          display: 'inline-block',
          borderRadius: '50%',
          border: '4px solid',
          borderColor:
            props.spinnerColor === 'white'
              ? palette.skeColor.white
              : palette.skeColor.blackAlt,
          borderTop: '4px solid transparent',
          animationDuration: '1s',
          animationIterationCount: 'linear infinite',
          animationTimingFunction: 'linear'
        }
      }
    }
  ]);
};
