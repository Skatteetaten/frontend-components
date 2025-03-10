import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { FontSizes, PaletteProps } from '../utils';
import { TopBannerTypes } from './TopBanner.types';
import separatorSKE from './assets/separatorSKE.svg';
import separatorLSO from './assets/separatorLSO.svg';
import separatorINK from './assets/separatorINK.svg';

export function getClassNames(props: TopBannerTypes, tag) {
  const { compact } = props;
  const palette = getTheme().palette as PaletteProps;

  let dekor;

  switch (tag) {
    case 'SKE':
      dekor = separatorSKE;
      break;
    case 'INK':
      dekor = separatorINK;
      break;
    case 'LSO':
      dekor = separatorLSO;
      break;
    default:
      dekor = separatorSKE;
      break;
  }

  // @ts-ignore TODO
  return mergeStyleSets({
    header: {
      selectors: {
        '&::after': {
          display: 'block',
          content: '""',
          width: '100%',
          height: compact ? '12px' : '20px',
          backgroundColor: '#fff',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${dekor})`,
        },
      },
    },
    headerMain: {
      width: 'auto',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 'auto',
      height: 'auto',
      padding: compact ? '8px' : '16px 16px 4px 16px',
      display: 'flex',
      background: palette.skeColor.white,
      maxWidth: '1100px',
      selectors: {
        '@media (min-width: 640px)': {
          width: 'auto',
          minWidth: compact ? 'auto' : '500px',
          flexDirection: 'row',
        },
      },
    },
    logo: {
      selectors: {
        'a:focus div': {
          boxShadow: `0 0 0 3px ${palette.skeColor.interactive}`,
        },
      },
    },
    contentWrapper: {
      flexGrow: 3,
      flexDirection: 'colum',
      textAlign: 'left',
      width: '100%',
      paddingLeft: '16px',
      selectors: {
        '@media (min-width: 480px)': {
          paddingLeft: '32px',
        },
      },
    },
    title: {
      marginTop: compact ? '12px' : '4px',
      fontSize: `${FontSizes.large} !important`,
      selectors: {
        '@media (min-width: 640px)': {
          fontSize: `${FontSizes.xLarge} !important`,
        },
      },
    },
    separator: {
      width: '100%',
      height: '20px',
      backgroundColor: '#fff',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${dekor})`,
    },
    linkButton: {
      displayName: 'SkeActionButton',
      marginTop: '-12px',
      marginLeft: '-8px',
      selectors: {
        '& .ms-Button-textContainer': {
          color: palette.skeColor.blue,
          fontSize: FontSizes.xSmall,
          fontWeight: 'bold',
        },
        '& .ms-Button-icon': {
          fontSize: `${FontSizes.medium} !important`,
        },
      },
    },
  });
}
