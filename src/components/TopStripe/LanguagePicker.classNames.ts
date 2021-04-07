import { mergeStyleSets } from '@uifabric/merge-styles';
import { FontSizes } from '../utils/fonts';

export const getClassNames = () => {
  return mergeStyleSets({
    languageButton: {
      padding: '4px 16px 0 24px',
      width: '100%',
      selectors: {
        '@media (max-width: 900px)': {
          paddingLeft: 'calc(50% - 48px)'
        }
      }
    },
    checkIcon: {
      display: 'inline',
      position: 'absolute',
      padding: '0 4px',
      marginLeft: '-24px',
      selectors: {
        '@media (max-width: 900px)': {
          left: 'calc(50% - 84px)',
          width: '14px',
          margin: '0 8px',
          fontSize: FontSizes.medium + ' !important'
        }
      }
    },
    flag: {
      marginRight: '4px',
      verticalAlign: 'middle'
    },
    text: {
      selectors: {
        '@media (max-width: 900px)': {
          marginLeft: '4px',
          textDecoration: 'underline'
        }
      }
    }
  });
};
