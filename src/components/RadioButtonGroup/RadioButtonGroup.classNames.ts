import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import {
  FontSizes,
  FontWeights,
  LineHeightSizes,
  PaletteProps,
} from '../utils';

export const getClassNames = (props) => {
  const palette = getTheme().palette as PaletteProps;
  const inset = -6;
  const { errorMessage, horizontal } = props;

  // @ts-ignore //TODO
  return mergeStyleSets({
    fieldset: {
      border: 'none',
      padding: 0,
      margin: 0,
      width: '100%',
    },
    radioButtons: {
      selectors: {
        '::-moz-focus-inner': {
          border: '0',
        },
        '& .ms-ChoiceField-wrapper': {
          position: 'relative',
        },
        '& .ms-ChoiceField-field': {
          display: 'inline-block',
          marginTop: '4px',
          marginBottom: '4px',
          marginRight: horizontal ? '10px' : '0',
          position: 'relative',
          outline: 0,
          verticalAlign: 'middle',
        },
        '& .ms-ChoiceFieldGroup-flexContainer': {
          display: horizontal ? 'flex' : 'inline-block',
        },
        'span.ms-ChoiceFieldLabel': {
          fontSize: FontSizes.medium,
          display: 'inline-block',
          paddingLeft: '26px',
          lineHeight: '1.5',
          marginTop: '-0.125rem',
        },
        'span.descriptionLabel': {
          fontSize: FontSizes.smallPlus,
          color: palette.skeColor.darkGrey,
          lineHeight: LineHeightSizes.xSmall,
          marginTop: '0',
        },
        '& .ms-ChoiceField-field::before': {
          content: '',
          display: 'inline-block',
          border: '2px solid' + palette.skeColor.black,
          position: 'absolute',
          boxShadow: `inset 0 0 0 8px ${palette.skeColor.white} , inset 0 0 0 12px transparent`,
          transition: 'box-shadow 80ms ease-out',
        },
        '& .ms-ChoiceField-field:hover::before': {
          boxShadow: `inset 0 0 0 3px ${palette.skeColor.white} , inset 0 0 0 12px ${palette.skeColor.black}`,
        },
        '& .ms-ChoiceField-field:hover::after': {
          border: 'none',
        },
        '.ms-ChoiceField-input': {
          backgroundColor: palette.skeColor.white,
          border: '2px solid' + palette.skeColor.blue,
        },
        '.ms-ChoiceField-input:disabled + .ms-ChoiceField-field:hover::before': {
          boxShadow: `inset 0 0 0 3px ${palette.skeColor.white} , inset 0 0 0 12px ${palette.skeColor.grey30}`,
        },
        '.ms-ChoiceField-input:disabled + .ms-ChoiceField-field::before': {
          color: palette.skeColor.lightGrey,
          backgroundColor: palette.skeColor.white,
          border: '2px solid' + palette.skeColor.lightGrey,
        },
        '.ms-ChoiceField-input:checked + .ms-ChoiceField-field::before': {
          backgroundColor: palette.skeColor.white,
          border: '2px solid' + palette.skeColor.blue,
          boxShadow: `inset 0 0 0 3px ${palette.skeColor.white} , inset 0 0 0 12px ${palette.skeColor.blue}`,
        },
        '.ms-ChoiceField-input:checked + .ms-ChoiceField-field::after': {
          border: 'none',
        },
        '& .ms-ChoiceField-wrapper.is-inFocus:after': {
          content: '""',
          position: 'absolute',
          left: inset,
          top: inset,
          bottom: inset,
          right: inset,
          outline: 'none',
          zIndex: 1,
          border: '2px solid' + palette.skeColor.blue,
        },
        '& .ms-Label': {
          fontSize: FontSizes.small,
          fontWeight: FontWeights.regular,
        },
        'span.ms-Label': {
          fontSize: FontSizes.medium,
          fontWeight: FontWeights.regular,
        },
        '.ms-ChoiceFieldGroup-flexContainer': errorMessage && {
          border: '2px solid ' + palette.skeColor.error,
          padding: '0em 1em 0.75em 0.5em',
          marginTop: '8px',
        },
        '.ms-ChoiceField-field::before': errorMessage && {
          content: '',
          display: 'inline-block',
          border: '2px solid' + palette.skeColor.error,
          position: 'absolute',
        },
        '& .ms-Callout-main': props.calloutFloating !== undefined &&
          !props.calloutFloating && {
            display: 'inline-block',
          },
      },
    },
  });
};
