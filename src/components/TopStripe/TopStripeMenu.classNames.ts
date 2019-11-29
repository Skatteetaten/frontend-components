import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';
import React from 'react';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  // @ts-ignore TODO
  return mergeStyleSets({
    menu: {
      position: 'relative'
    },
    menuButton: {
      selectors: {
        '.ms-Button-label': {
          fontSize: FontSizes.small,
          color: palette.skeColor.white,
          textDecoration: 'none !important',
          padding: '1px 5px 0 5px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
          transition: 'border-bottom 0.3s'
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.white,
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none'
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none'
        }
      }
    },
    dropdownContainer: {
      position: 'absolute',
      zIndex: 1000,
      backgroundColor: 'black',
      margin: 0,
      padding: 0,
      selectors: {
        'ul, li': {
          margin: 0,
          padding: 0
        },
        'li:not(:first-child)': {
          margin: 0,
          padding: 0
        }
      }
    }
  });
};
