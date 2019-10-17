import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  const colorBackground = palette.skeColor.blackAlt;
  const colorForeground = palette.skeColor.white;
  // @ts-ignore TODO
  return mergeStyleSets({
    overlay: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 150,
      minHeight: '200px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transition: '0.3s ease-out',
      display: 'none'
    },
    overlayShow: {
      display: 'block'
    },
    container: {
      backgroundColor: colorBackground,
      height: '30px',
      fontSize: FontSizes.mini,
      justifyContent: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingRight: '16px',
      zIndex: 200,
      lineHeight: 1,
      fontFamily:
        'Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      fontWeight: FontWeights.regular,
      selectors: {
        '@media (min-width: 900px)': {
          height: '40px',
          fontSize: FontSizes.small
        }
      }
    },
    nav: {
      width: '100%',
      selectors: {
        '.ms-Button-label': {
          fontSize: FontSizes.xSmall,
          selectors: {
            '@media (min-width: 900px)': {
              fontSize: FontSizes.small
            }
          }
        },
        a: {
          fontSize: FontSizes.xSmall,
          lineHeight: '100%',
          paddingBottom: 0,
          selectors: {
            '@media (min-width: 900px)': {
              fontSize: FontSizes.small
            }
          }
        },
        '@media (min-width: 900px)': {
          maxWidth: '878px'
        },
        '@media (min-width: 1170px)': {
          maxWidth: '1151.9px',
          lineHeight: '1.5'
        }
      }
    },
    navMenu: {
      selectors: {
        'ul&': {
          margin: 0,
          listStyleType: 'none',
          padding: 0,
          textAlign: 'right'
        }
      }
    },
    navMenuchoice: {
      color: colorForeground,
      display: 'inline-block',
      marginLeft: '32px'
    },
    navMenuchoiceNotSmallDevice: {
      display: 'none',
      selectors: {
        '@media (min-width: 900px)': {
          display: 'inline-block'
        }
      }
    },
    navMenuchoiceActive: {
      backgroundColor: colorForeground,
      selectors: {
        '> .ms-Button--action .ms-Button-label': {
          color: colorBackground
        },
        '> button.ms-Button--action:hover .ms-Button-label': {
          color: colorBackground
        },
        '> button.ms-Button--action > .ms-Button-flexContainer > i': {
          color: colorBackground,
          transition: 'none'
        },
        '> button.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: colorBackground,
          transition: 'none'
        }
      }
    },
    navMenuchoiceLink: {
      color: colorForeground,
      textDecoration: 'none',
      padding: 0,
      margin: 0
    },
    navMenuchoiceButton: {
      padding: 0,
      border: 0,
      selectors: {
        '.ms-Button-label': {
          color: colorForeground,
          textDecoration: 'none !important',
          padding: '1px 5px 0 5px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
          transition: 'border-bottom 0.3s'
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: colorForeground,
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: colorForeground,
          transition: 'none'
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: colorForeground,
          transition: 'none'
        }
      }
    },
    hiddenText: {
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute'
    },
    dropdownContainer: {
      fontSize: FontSizes.xSmall,
      left: '0!important',
      borderLeft: `36px solid ${colorBackground}`,
      background: colorBackground,
      marginTop: 0,
      width: '100%!important',
      alignContent: 'center',
      position: 'absolute',
      willChange: 'transform',
      right: 'auto',
      display: 'none',
      top: '26px !important',
      border: 'none',
      justifyContent: 'center',
      textAlign: 'center',
      bottom: 'auto',
      zIndex: 1000,
      float: 'left',
      listStyle: 'none',
      selectors: {
        '@media (min-width: 900px)': {
          fontSize: FontSizes.small,
          left: 'auto !important',
          paddingRight: '10px',
          top: '32px !important',
          marginTop: '7px',
          width: 'auto !important',
          minWidth: '200px'
        }
      }
    },
    dropdownContainerRight: {
      right: '0 !important'
    },
    dropdownContainerList: {
      right: 'auto'
    },
    dropdownShow: {
      display: 'block !important'
    },
    dropdownList: {
      display: 'inline-block',
      paddingInlineStart: 0,
      selectors: {
        'ul&': {
          listStyleType: 'none',
          margin: 0,
          lineHeight: '50px',
          width: 'auto',
          selectors: {
            '@media (min-width: 900px)': {
              width: '100%'
            }
          }
        }
      }
    },
    dropdownMenuchoice: {
      display: 'list-item',
      textAlign: 'left',
      marginLeft: '10px',
      borderBottom: 'none'
    },
    dropdownMenuchoiceActive: {
      selectors: {
        '.ms-Button-label': {
          textDecoration: 'none !important'
        },
        '.ms-Button--action:hover .ms-Button-label': {
          borderBottom: 'none'
        }
      }
    },
    dropdownMenuchoiceButton: {
      selectors: {
        '&.ms-Button': {
          width: '100%',
          justifyContent: 'space-around',
          marginTop: '25.9px',
          display: 'block',
          clear: 'both',
          whiteSpace: 'nowrap',
          padding: '9.5px 5px'
        },
        '&.ms-Button.ms-Button--action': {
          transition: 'none'
        },
        ':hover': {
          backgroundColor: colorForeground,
          color: colorBackground
        },
        '&.ms-Button.ms-Button--action:hover .ms-Button-label': {
          borderBottom: 'none',
          color: colorBackground
        },
        '&.ms-Button.ms-Button--action .ms-Button-label': {
          color: colorForeground,
          justifyContent: 'space-around',
          display: 'block',
          width: '100%',
          clear: 'both',
          whiteSpace: 'nowrap',
          transition: 'none',
          padding: '9.5px 5px',
          textDecoration: 'none !important'
        },
        '&.ms-Button.ms-Button--action > .ms-Button-flexContainer i': {
          color: colorForeground,
          transition: 'none'
        },
        '&.ms-Button.ms-Button--action:hover > .ms-Button-flexContainer i': {
          color: colorBackground
        },
        '&.ms-Button.ms-Button--action:hover > .ms-Button-flexContainer a': {
          color: colorBackground
        }
      }
    },
    dropdownMenuchoiceLink: {
      margin: 0,
      padding: 0,
      selectors: {
        ':hover': {
          textDecoration: 'none'
        },
        ':active:hover': {
          textDecoration: 'none'
        }
      }
    },
    dropdownMenuchoiceButtonEmptyIcon: {
      selectors: {
        '&.ms-Button.ms-Button--action .ms-Button-label': {
          marginLeft: '23px'
        },
        '&.ms-Button.ms-Button--action a': {
          marginLeft: '40px'
        }
      }
    },
    dropdownMenuchoiceButtonActive: {
      selectors: {
        '&.ms-Button.ms-Button--action': {
          transition: 'none'
        }
      }
    },
    dropdownMenuchoiceClose: {
      display: 'list-item',
      textAlign: 'center',
      marginLeft: '10px',
      padding: '0.7rem',
      marginTop: '0.7rem',
      selectors: {
        button: {
          padding: '5px 9.5px'
        },
        'button:hover': {
          backgroundColor: colorForeground
        },
        'button:hover i.ms-Button-icon': {
          color: `${colorBackground} !important`
        },
        'i.ms-Button-icon': {
          color: `${colorForeground} !important`
        },
        'i.ms-Button-icon:hover': {
          color: `${colorBackground} !important`
        }
      }
    },
    info: {
      color: colorForeground,
      fontSize: FontSizes.xxLarge,
      maxWidth: '800px',
      padding: '32px',
      lineHeight: '40px'
    },
    infoClose: {
      padding: '0.7rem',
      selectors: {
        button: {
          padding: '5px 9.5px'
        },
        'button:hover': {
          backgroundColor: colorForeground
        },
        'button:hover i.ms-Button-icon': {
          color: `${colorBackground} !important`
        },
        i: {
          color: `${colorForeground} !important`
        },
        'i:hover': {
          color: `${colorBackground} !important`
        }
      }
    }
  });
};
