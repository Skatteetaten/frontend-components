import { mergeStyleSets, IRawStyle } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, PaletteProps, NavigationTileProps } from '../index';

function getType(props: NavigationTileProps): IRawStyle {
  if (props.type === 'left') {
    return {
      display: 'block',
    };
  } else {
    return {};
  }
}

function getIcon(props: NavigationTileProps): IRawStyle {
  if (props.alignIcon === 'right') {
    return {
      fontSize: '1.75rem',
      float: 'right',
    };
  }
  return {
    fontSize: FontSizes.superLarge,
    display: 'inherit',
    margin: `16px 0`,
    textAlign: 'center',
    color: 'black',
  };
}

function getTitle(props: NavigationTileProps): IRawStyle {
  const palette = getTheme().palette as PaletteProps;
  if (props.alignTitle === 'left') {
    return {
      textAlign: 'left',
      margin: 0,
      marginBottom: '8px',
      color: palette.skeColor.blue,
    };
  } else {
    return {};
  }
}

function getDescription(props: NavigationTileProps): IRawStyle {
  const palette = getTheme().palette as PaletteProps;
  if (props.alignDescription === 'left') {
    return {
      margin: 0,
      textAlign: 'left',
      lineHeight: '25px',
      color: palette.skeColor.blackAlt,
    };
  } else {
    return {};
  }
}

export const getClassNames = (props: NavigationTileProps) => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    content: {
      selectors: {
        '& i': {
          ...getIcon(props),
        },
        '& p': {
          margin: 0,
          textAlign: 'center',
          lineHeight: '25px',
          color: palette.skeColor.blackAlt,
          ...getDescription(props),
        },
        '& h2, h3, h4, h5, h6': {
          textAlign: 'center',
          margin: 0,
          marginBottom: '8px',
          fontSize: '1.5rem',
          color: palette.skeColor.blue,
          ...getTitle(props),
        },

        '&:active, &:focus, &:hover': {
          selectors: {
            h2: {
              color: palette.skeColor.darkBlue,
            },
          },
        },
      },
    },
    nav: {
      selectors: {
        '& a, & button': {
          border: '0',
          margin: 'auto',
        },
        '& button': {
          backgroundColor: 'inherit',
          ...getTitle(props),
        },
        '& ul': {
          display: 'flex',
          flexWrap: 'wrap',
          padding: 0,
          justifyContent: 'space-between',
          ...getType(props),
        },
        '& ul li': {
          borderBottom: `3px solid ${palette.skeColor.darkBlue}`,
          position: 'relative',
          textDecoration: 'none',
          listStyle: 'none',
          display: 'flex',
          marginBottom: '32px',
          flexBasis: '46%',
        },
        '& ul li > a, & ul li > button': {
          color: palette.skeColor.darkBlue,
          textDecoration: 'none',
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          margin: '0 !important',
          width: '100%',
          transition: 'all 0.2s ease',
        },
        '& ul li > a:active, & ul li > a:focus, & ul li > a:hover, & ul li > button:active, & ul li > button:focus, & ul li > button:hover': {
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none',
          transition: 'background-color .2s',
        },
        '& ul li > a::after, & ul li > button::after': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          left: 0,
          bottom: 0,
          backgroundColor: palette.skeColor.darkBlue,
          transition: 'height 0.1s',
          width: '100%',
          height: 0,
        },
        '& ul li > a:focus:after, & ul li > a:hover:after, & ul li > button:focus:after, & ul li > button:hover:after': {
          height: 2,
        },
        '@media (max-width: 1023px)': {
          selectors: {
            'ul li': {
              flexBasis: '100%',
            },
          },
        },
      },
    },
  });
};
