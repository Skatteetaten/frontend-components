import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { getFocusStyle, FontWeights, FontSizes, skeColor } from '../utils';

export const getClassNames = function getClassNames() {
  const theme = getTheme();
  const inset = -4;
  const radius = '0';
  return mergeStyles([
    getFocusStyle(theme, inset, 'relative', radius),
    {
      displayName: 'SkeAvkrysningsboks',
      selectors: {
        '&.ms-Checkbox': {
          padding: '4px',
        },
        '&.is-enabled .ms-Checkbox-checkbox': {
          borderRadius: '0px',
          content: '',
          display: 'inline-block',
          border: '2px solid',
          cursor: 'pointer',
          fontSize: FontSizes.medium,
          backgroundColor: skeColor.white,
        },
        'span.ms-Checkbox-text': {
          fontSize: FontSizes.medium,
        },
        '&.is-checked .ms-Checkbox-checkbox': {
          border: 'none',
          fontSize: FontSizes.medium,
          backgroundColor: skeColor.blue,
        },
        '&.is-disabled .ms-Checkbox-checkbox': {
          borderRadius: 0,
          paddingTop: 0,
          fontSize: FontSizes.medium,
          backgroundColor: skeColor.grey10,
          border: '2px solid ' + skeColor.grey50,
        },
        '&.is-disabled i.ms-Checkbox-checkmark': {
          paddingTop: 0,
          color: skeColor.grey50,
          paddingLeft: 0,
        },
        'i.ms-Checkbox-checkmark': {
          paddingLeft: '1.5px',
          paddingTop: '1.5px',
          fontSize: FontSizes.medium,
        },
        '&:hover .ms-Checkbox-checkmark': {
          opacity: 0,
        },
        '&.is-checked:hover .ms-Checkbox-checkmark': {
          opacity: 1,
        },
        '& i': {
          fontWeight: FontWeights.bold,
        },
        '.ms-Checkbox-label:hover i': {
          opacity: 0,
        },
      },
    },
  ]);
};
