import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';

import { ModalProps } from './Modal.types';

import designtokenSpacing from '../utils/designtokens/_spacing.json';
import designtokenBreakpoints from '../utils/designtokens/_breakpoints.json';

import { PaletteProps } from '../utils';

export const getClassNames = (props: ModalProps, tag: string) => {
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
  return mergeStyleSets({
    wrapper: {
      display: 'flex',
      position: 'fixed',
      zIndex: 99998,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal: {
      display: 'flex',
      flexWrap: 'nowrap',
      padding: designtokenSpacing['ske-spacing-lg'],
      flexDirection: 'column',
      position: 'relative',
      height: 'auto',
      maxHeight: '90%',
      maxWidth: '90%',
      background: palette.skeColor.white,
      boxSizing: 'border-box',
      border: `4px solid ${primaryColor}`,
      zIndex: 99999,
      overflow: 'auto',
      selectors: {
        '@media (min-width: 320px)': {
          // TO-DO dette brekkpunktet her savnes
          minWidth: '40ch',
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-sm']})`]: {
          minWidth: '50ch',
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-md']})`]: {
          minWidth: '70ch',
        },
        [`@media (min-width: ${designtokenBreakpoints['ske-breakpoint-lg']})`]: {
          minWidth: '80ch',
        },
      },
    },

    overlay: {
      position: 'fixed',
      zIndex: 99998,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: 'rgba(255, 255, 255, 0.8)',
    },

    closeButton: {
      position: 'absolute',
      height: '1.875rem',
      right: '0.625rem',
      top: '0.625rem',
    },
  });
};
