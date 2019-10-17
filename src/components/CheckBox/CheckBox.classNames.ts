import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { getFocusStyle } from '../utils/getFocusStyle';
import { FontWeights, FontSizes } from '../utils/fonts';
// @ts-ignore TODO
export var getClassNames = function getClassNames(props) {
  const theme = getTheme();
  const inset = -4;
  const radius = '0';
  // @ts-ignore TODO
  return mergeStyles([
    getFocusStyle(theme, inset, 'relative', radius),
    {
      displayName: 'SkeAvkrysningsboks',
      selectors: {
        '&.ms-CheckBox': {
          padding: '4px'
        },
        '&.is-enabled .ms-CheckBox-checkbox': {
          borderRadius: '0px',
          content: '',
          display: 'inline-block',
          border: '2px solid',
          cursor: 'pointer',
          fontSize: FontSizes.medium
        },
        'span.ms-CheckBox-text': {
          fontSize: FontSizes.medium
        },
        '&.is-checked .ms-CheckBox-checkbox': {
          border: 'none',
          fontSize: FontSizes.medium
        },
        'i.ms-CheckBox-checkmark': {
          paddingLeft: '1.5px',
          paddingTop: '1.5px',
          fontSize: FontSizes.medium
        },
        '&:hover .ms-CheckBox-checkmark': {
          opacity: 0
        },
        '&.is-checked:hover .ms-CheckBox-checkmark': {
          opacity: 1
        },
        '& i': {
          fontWeight: FontWeights.bold
        },
        '.ms-CheckBox-label:hover i': {
          opacity: 0
        }
      }
    }
  ]);
};
