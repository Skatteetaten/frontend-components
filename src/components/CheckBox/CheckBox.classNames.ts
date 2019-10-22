import { mergeStyles } from '@uifabric/merge-styles';
import { FontWeights, FontSizes } from '..';

export var getClassNames = function getClassNames() {
  return mergeStyles({
    displayName: 'SkeAvkrysningsboks',
    selectors: {
      '&.ms-Checkbox': {
        padding: '4px'
      },
      '&.is-enabled .ms-Checkbox-checkbox': {
        borderRadius: '0px',
        content: '',
        display: 'inline-block',
        border: '2px solid',
        cursor: 'pointer',
        fontSize: FontSizes.medium
      },
      'span.ms-Checkbox-text': {
        fontSize: FontSizes.medium
      },
      '&.is-checked .ms-Checkbox-checkbox': {
        border: 'none',
        fontSize: FontSizes.medium
      },
      'i.ms-Checkbox-checkmark': {
        paddingLeft: '1.5px',
        paddingTop: '1.5px',
        fontSize: FontSizes.medium
      },
      '&:hover .ms-Checkbox-checkmark': {
        opacity: 0
      },
      '&.is-checked:hover .ms-Checkbox-checkmark': {
        opacity: 1
      },
      '& i': {
        fontWeight: FontWeights.bold
      },
      '.ms-Checkbox-label:hover i': {
        opacity: 0
      }
    }
  });
};
