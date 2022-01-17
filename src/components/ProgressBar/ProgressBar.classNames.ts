import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, PaletteProps } from '../utils';

export const getClassNames = function getClassNames(tag) {
  const palette = getTheme().palette as PaletteProps;
  let primaryColor;

  switch (tag) {
    case 'INK': {
      primaryColor = palette.skeColor.green100;
      break;
    }
    case 'LSO': {
      primaryColor = palette.skeColor.black100;
      break;
    }
    default: {
      primaryColor = palette.skeColor.burgundy100;
      break;
    }
  }

  return mergeStyles([
    {
      displayName: 'SkeProgressBar',
      selectors: {
        '& .ms-ProgressIndicator-progressBar': {
          background: primaryColor,
          height: '16px',
        },
        '& .ms-ProgressIndicator-itemProgress': {
          height: '16px',
          padding: '0',
          border: `1px solid ${palette.skeColor.blackAlt}`,
          marginTop: '8px',
          marginBottom: '8px',
        },
        '& .ms-ProgressIndicator-progressTrack': {
          background: palette.skeColor.whiteGrey,
          height: '16px',
        },
        '& .ms-ProgressIndicator-itemDescription': {
          fontSize: FontSizes.small,
        },
      },
    },
  ]);
};
