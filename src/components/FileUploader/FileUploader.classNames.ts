import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import {
  FontSizes,
  LineHeightSizes,
  PaletteProps,
  FileUploaderProps,
} from '../index';

export const getClassNames = (props: FileUploaderProps) => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    acceptedFileFormats: {
      fontWeight: 'bold',
    },
    informationWrapper: {
      marginTop: '8px',
      fontSize: FontSizes.xSmall,
      lineHeight: LineHeightSizes.xSmall,
      color: palette.skeColor.darkGrey,
    },
    errorColor: {
      color: `${palette.skeColor.error} !important`,
    },
    fileList: {
      listStyle: 'none !important',
      padding: 0,
      selectors: {
        i: {
          color: palette.skeColor.blue,
          float: 'right',
        },
        li: {
          wordBreak: 'break-all',
          display: 'block',
        },
      },
    },
    fileListWrapper: {
      display: 'grid',
    },
    fileListCancelBtn: {
      backgroundColor: 'transparent',
      float: 'right',
      padding: 0,
      border: 0,
      borderStyle: 'none',
      cursor: 'pointer',
      marginTop: 5,
    },
    fileIcon: {
      fontSize: '20px',
    },
    fileName: {
      float: 'left',
      width: '90%',
      display: 'inline',
      selectors: {
        i: {
          float: 'left',
          marginRight: '8px',
          color: palette.skeColor.grey,
        },
        span: {
          display: 'flex',
        },
      },
    },
    fileUploadInput: {
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1,
    },
    main: {},
    uploadArea: {
      border: `2px dashed ${palette.skeColor.blue}`,
      backgroundColor: palette.skeColor.lightBlue,
      padding: '16px',
      textAlign: 'center',
      marginTop: '8px',
      marginBottom: '8px',
      cursor: 'pointer',
    },
    uploadAreaIcon: {
      fontSize: '20px',
      color: palette.skeColor.blue,
    },
  });
};
