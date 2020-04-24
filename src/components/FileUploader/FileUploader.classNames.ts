import { mergeStyleSets } from '@uifabric/merge-styles';
import { FileUploaderProps } from './FileUploader';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export const getClassNames = (props: FileUploaderProps) => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    acceptedFileFormats: {
      fontWeight: 'bold'
    },
    acceptedFileTypesWrapper: {
      fontSize: '12px',
      color: palette.skeColor.darkGrey
    },
    errorColor: {
      color: `${palette.skeColor.error} !important`
    },
    fileList: {
      listStyle: 'none',
      padding: 0,
      selectors: {
        i: {
          color: palette.skeColor.blue,
          float: 'right'
        },
        li: {
          wordBreak: 'break-all'
        }
      }
    },
    fileListCancelBtn: {
      backgroundColor: 'transparent',
      float: 'right',
      padding: 0,
      border: 0,
      borderStyle: 'none',
      cursor: 'pointer'
    },
    fileUploadInput: {
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    },
    main: {},
    uploadArea: {
      border: `2px dashed ${palette.skeColor.blue}`,
      backgroundColor: palette.skeColor.lightBlue,
      padding: '16px',
      textAlign: 'center',
      marginTop: '8px',
      marginBottom: '8px',
      cursor: 'pointer'
    },
    uploadAreaIcon: {
      fontSize: '20px',
      color: palette.skeColor.blue
    }
  });
};
