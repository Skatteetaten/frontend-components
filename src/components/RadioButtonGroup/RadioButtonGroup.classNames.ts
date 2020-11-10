import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, LineHeightSizes } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  const inset = -6;
  const { errorMessage, horizontal } = props;

  // @ts-ignore //TODO
  return mergeStyleSets({
    fieldset: {
      border: 'none',
      padding: 0,
      margin: 0,
      width: '100%'
    },
    radioButtons: {
      selectors: {
        '::-moz-focus-inner': {
          border: '0'
        },
        '& .ms-ChoiceField-wrapper': {
          position: 'relative'
        },
        '& .ms-ChoiceField-field': {
          display: 'inline-block',
          marginTop: '4px',
          marginBottom: '4px',
          marginRight: horizontal ? '10px' : '0',
          position: 'relative',
          outline: 0,
          verticalAlign: 'middle'
        },
        '& .ms-ChoiceFieldGroup-flexContainer': {
          display: horizontal ? 'flex' : 'inline-block'
        },
        'span.ms-ChoiceFieldLabel': {
          fontSize: FontSizes.medium,
          display: 'inline-block',
          paddingLeft: '26px',
          lineHeight: LineHeightSizes.medium
        },
        'span.descriptionLabel': {
          fontSize: FontSizes.smallPlus,
          color: palette.skeColor.darkGrey,
          lineHeight: LineHeightSizes.smallPlus
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
          zIndex: 1,
          border: '2px solid' + palette.skeColor.blue
        },
        '& .ms-Label': {
          fontSize: FontSizes.small,
          fontWeight: FontWeights.regular
        },
        'span.ms-Label': {
          fontSize: FontSizes.medium,
          fontWeight: FontWeights.regular
        },
        '.ms-ChoiceFieldGroup-flexContainer': errorMessage && {
          //padding: '0 7px 3px 7px',
          border: '2px solid ' + palette.skeColor.error,
          padding: '0em 1em 0.75em 0.5em',
          marginTop: '8px'
        },
        '.ms-ChoiceField-field::before': errorMessage && {
          content: '',
          display: 'inline-block',
          border: '2px solid' + palette.skeColor.error,
          position: 'absolute'
        },
        '& .ms-Callout-main': props.calloutFloating !== undefined &&
          !props.calloutFloating && {
            display: 'inline-block'
          }
      }
    }
  });
};
