import { mergeStyleSets } from '@uifabric/merge-styles';
import { FontSizes } from '../utils/fonts';

export const getClassNames = () => {
  return mergeStyleSets({
    wrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    listOfLanguages: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '0',
      selectors: {
        '> button': {
          width: '100%',
          textAlign: 'left'
        }
      }
    },
    languageButton: {
      padding: '4px 16px 0 24px',
      width: '100%',
      selectors: {
        '@media (max-width: 900px)': {
          textAlign: 'left'
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
          left: 'calc(50% - 72px)',
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
