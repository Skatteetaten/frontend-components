import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { FontSizes, LineHeightSizes, PaletteProps } from '../utils';
import { FileUploaderProps } from './FileUploader.types';

export const getClassNames = (props: FileUploaderProps) => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    },
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
        ':hover': {
          border: `2px dashed ${palette.skeColor.blue}`,
          transform: 'scale(1.02) translateY(-1px)',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 10px 6px -10px',
        },
        ':focus': {
          border: `2px solid ${palette.skeColor.blue}`,
          transform: 'scale(1.02) translateY(-1px)',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 10px 6px -10px',
        },
        ':active': {
          border: `2px solid ${palette.skeColor.blue}`,
          transform: 'scale(1) translateY(0)',
          boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0 0 0',
        },
      },
    },
    uploadAreaIcon: {
      fontSize: FontSizes.icon,
      color: palette.skeColor.blue,
    },
  });
};
