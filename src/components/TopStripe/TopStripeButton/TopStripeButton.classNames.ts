import { mergeStyleSets } from '@fluentui/merge-styles';
import designtokenFontSizes from '../../utils/designtokens/_fontSizes.json';
import designtokenColors from '../../utils/designtokens/_colors.json';

export const getClassNames = () => {
  return mergeStyleSets({
    topStripeButton: {
      fontFamily: 'inherit',
      fontSize: designtokenFontSizes['ske-font-size-s'],
      background: 'inherit',
      border: 'none',
      color: designtokenColors['ske-color-white-100'],
      transition: 'none',
      textDecoration: 'underline',
      textAlign: 'left',
      padding: '12px 8px',
      margin: 0,
      whiteSpace: 'nowrap',
      selectors: {
        ':hover, :focus': {
          backgroundColor: designtokenColors['ske-color-white-100'],
          color: designtokenColors['ske-color-black-100'],
          transition: 'none',
          outline: 'none',
        },
      },
    },
  });
};
