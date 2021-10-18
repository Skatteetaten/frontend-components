import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { PaletteProps } from '../utils';
import { SpinnerProps } from './Spinner.types';

export const getClassNames = function getClassNames(props: SpinnerProps) {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      selectors: {
        '.ms-Spinner-label': {
          color: props.spinnerColor,
        },
        '&.ms-Spinner': {
          position: 'relative',
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
          animationTimingFunction: 'linear',
        },
      },
    },
  ]);
};
