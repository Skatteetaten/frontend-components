import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
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
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      selectors: {
        '&:focus, &:active': {
          color: palette.skeColor.blue,
          backgroundColor: '#fff',
          position: 'relative',
          left: 'auto',
          top: 'auto',
          width: '100px',
          height: 'auto',
          overflow: 'auto',
          padding: '5px',
          border: `4px solid ${palette.skeColor.pink}`,
          textAlign: 'center',
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
