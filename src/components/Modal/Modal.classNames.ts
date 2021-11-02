import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { PaletteProps } from '../utils';
import { ModalProps } from './Modal.types';

// TO-DO avklare størrelser med design
const getModalWidth = (props: ModalProps) => {
  if (props.size === 'small') {
    return '300px';
  }
  if (props.size === 'medium') {
    return '500px';
  }
  return '90%';
};

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
      '@media only screen and (max-width: 479px)': {
        width: getModalWidth(props),
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
