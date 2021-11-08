import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { PaletteProps } from '../utils';
import { ModalProps } from './Modal.types';

// TO-DO avklare størrelser med design
/*const getModalWidth = (props: ModalProps) => {
  
  if (props.size === 'small') {
    return '50ch';
  }
  if (props.size === 'medium') {
    return '60ch';
  }
  if (props.size === 'large') {
    return '60ch';
  }
  return '50ch';
};*/

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
      padding: '16px',
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
          width: '40ch',
        },
        '@media (min-width: 479px)': {
          width: '50ch',
        },
        '@media (min-width: 640px)': {
          width: '70ch',
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
      background: 'rgba(0, 0, 0, 0.4)',
    },

    closeButton: {
      position: 'absolute',
      height: '30px',
      right: '10px',
      top: '10px',
    },
  });
};
