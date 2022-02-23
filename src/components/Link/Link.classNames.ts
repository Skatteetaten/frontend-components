import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { PaletteProps, FontSizes, FontWeights } from '../utils';
import { LinkProps } from './Link.types';

export const getClassNames = (props: LinkProps) => {
  const palette = getTheme().palette as PaletteProps;
  const { linkGroup } = props;

  return mergeStyleSets({
    icon: {
      color: palette.skeColor.blue,
      fontSize: linkGroup ? FontSizes.medium : FontSizes.large,
      fontWeight: linkGroup ? FontWeights.bold : 'inherit',
      verticalAlign: linkGroup ? 'bottom' : 'middle',
      paddingLeft: linkGroup ? '0px' : '4px',
      paddingRight: linkGroup ? '10px' : '4px',
      borderBottom: 'none',
    },
    linkContainer: {
      margin: '0px',
      selectors: {
        ':hover>i': {
          color: linkGroup ? palette.skeColor.darkBlue : '',
          paddingLeft: '4px',
          paddingRight: linkGroup ? '6px' : '4px',
          transition: linkGroup ? '0.1s' : '',
        },
        ':hover>a': {
          backgroundColor: palette.skeColor.lightBlue,
        },
      },
    },
    skipLink: {
      left: '-999px',
      position: 'absolute',
      top: 'auto',
      opacity: 0,
      overflow: 'hidden',
      selectors: {
        '&:focus, &:active': {
          display: 'block',
          color: palette.skeColor.blackAlt,
          backgroundColor: '#fff',
          position: 'relative',
          left: 'auto',
          top: 'auto',
          height: 'auto',
          overflow: 'auto',
          textAlign: 'center',
          opacity: 1,
          padding: '12px 8px',
          outline: 'none',
        },
      },
    },
    iconLink: {
      color: palette.skeColor.blue,
      textDecoration: 'none',
      fontWeight: linkGroup ? FontWeights.bold : FontWeights.medium,
      borderBottom: `1px solid ${palette.skeColor.blue}`,
      selectors: {
        '&:hover': {
          color: palette.skeColor.darkBlue,
          borderBottom: '2px solid ' + palette.skeColor.darkBlue,
          backgroundColor: palette.skeColor.lightBlue,
        },
        '&:focus': {
          color: palette.skeColor.darkBlue,
          borderBottom: '2px solid ' + palette.skeColor.darkBlue,
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none',
        },
      },
    },
  });
};
