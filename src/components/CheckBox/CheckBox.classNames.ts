import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { getFocusStyle } from '../utils';
import designtokenColors from '../utils/designtokens/_colors.json';
import designtokenFontSizes from '../utils/designtokens/_fontSizes.json';

export const getClassNames = function getClassNames(error) {
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
          border:
            error === true
              ? `2px solid ${designtokenColors['ske-color-status-error']}`
              : 'none',
        },
        '&.is-enabled .ms-Checkbox-checkbox': {
          borderRadius: '0px',
          content: '',
          display: 'inline-block',
          border: `2px solid ${designtokenColors['ske-color-black-100']}`,
          cursor: 'pointer',
          fontSize: designtokenFontSizes['ske-font-size-m'],
          backgroundColor: designtokenColors['ske-color-white-100'],
        },
        'span.ms-Checkbox-text': {
          fontSize: designtokenFontSizes['ske-font-size-m'],
        },
        '&.is-checked .ms-Checkbox-checkbox': {
          border: 'none',
          fontSize: designtokenFontSizes['ske-font-size-m'],
          backgroundColor: designtokenColors['ske-color-interactive'],
        },
        '&.is-disabled .ms-Checkbox-checkbox': {
          borderRadius: 0,
          paddingTop: 0,
          fontSize: designtokenFontSizes['ske-font-size-m'],
          backgroundColor: designtokenColors['ske-color-grey-10'],
          border: `2px solid ${designtokenColors['ske-color-grey-50']}`,
        },
        '&.is-disabled i.ms-Checkbox-checkmark': {
          paddingTop: 0,
          color: designtokenColors['ske-color-grey-50'],
          paddingLeft: 0,
        },
        'i.ms-Checkbox-checkmark': {
          paddingLeft: '1.5px',
          paddingTop: '1.5px',
          fontSize: designtokenFontSizes['ske-font-size-m'],
        },
        '&:hover .ms-Checkbox-checkmark': {
          opacity: 0,
        },
        '&.is-checked:hover .ms-Checkbox-checkmark': {
          opacity: 1,
        },
        '& i': {
          fontWeight: designtokenFontSizes['ske-font-weight-bold'],
        },
        '.ms-Checkbox-label:hover i': {
          opacity: 0,
        },
      },
    },
  ]);
};
