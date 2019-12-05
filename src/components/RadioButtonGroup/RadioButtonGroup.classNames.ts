import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { isUndefined } from 'util';
import { PaletteProps } from '..';
// @ts-ignore TODO
export const getClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  const inset = -6;

  return mergeStyles({
    selectors: {
      '::-moz-focus-inner': {
        border: '0'
      },
      ' & .ms-ChoiceField-wrapper': {
        position: 'relative'
      },
      '& .ms-ChoiceField-field': {
        display: 'inline-block',
        marginTop: '8px',
        position: 'relative',
        outline: 0,
        verticalAlign: 'top'
      },
      'span.ms-ChoiceFieldLabel': {
        fontSize: FontSizes.medium,
        display: 'inline-block',
        paddingLeft: '26px'
      },
      '& .ms-ChoiceField-field::before': {
        content: '',
        display: 'inline-block',
        border: '2px solid' + palette.skeColor.black,
        position: 'absolute'
      },
      '.ms-ChoiceField-input': {
        backgroundColor: palette.skeColor.white,
        border: '2px solid' + palette.skeColor.blue
      },
      '.ms-ChoiceField-input:disabled + .ms-ChoiceField-field::before': {
        color: palette.skeColor.lightGrey,
        backgroundColor: palette.skeColor.white,
        border: '2px solid' + palette.skeColor.lightGrey
      },
      '.ms-ChoiceField-input:checked + .ms-ChoiceField-field::before': {
        backgroundColor: palette.skeColor.white,
        border: '2px solid' + palette.skeColor.blue
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-ChoiceField-wrapper.is-inFocus:after': {
        content: '""',
        position: 'absolute',
        left: inset,
        top: inset,
        bottom: inset,
        right: inset,
        outline: 'none',
        zIndex: 1
      },
      '& label.ms-Label': {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.regular
      },
      'span.ms-Label': {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.regular
      },
      '& .ms-Callout-main': !isUndefined(props.calloutFloating) &&
        !props.calloutFloating && {
          display: 'inline-block'
        }
    }
  });
};
