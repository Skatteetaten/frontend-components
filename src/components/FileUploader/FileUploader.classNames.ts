import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, LineHeightSizes, PaletteProps } from '../utils';
import { FileUploaderProps } from './FileUploader.types';

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
      marginTop: 4,
      fontSize: '20px',
    },
    fileIcon: {
      fontSize: '20px',
    },
    fileName: {
      float: 'left',
      width: '90%',
      display: 'inline',
      lineHeight: '1.4',
      selectors: {
        i: {
          float: 'left',
          marginRight: '8px',
          color: palette.skeColor.grey,
        },
        span: {
          display: 'flex',
          marginTop: '3px',
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
      transition: 'all 80ms ease-in-out 0s',
      selectors: {
        ':focus': {
          border: `2px solid ${palette.skeColor.blue}`,
          backgroundImage: `repeating-linear-gradient(22.5deg, ${palette.skeColor.lightBlue}, ${palette.skeColor.lightBlue} 4px, ${palette.skeColor.white} 4px, ${palette.skeColor.white} 8px)`,
          transform: 'scale(101%)',
        },
      },
    },
    uploadAreaIcon: {
      fontSize: FontSizes.icon,
      color: palette.skeColor.blue,
    },
  });
};
