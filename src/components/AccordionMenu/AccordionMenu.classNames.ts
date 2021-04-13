import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps, FontSizes, IconFontSizes } from '../index';

export function getClassNames(props): any {
  const palette = getTheme().palette as PaletteProps;
  const flex = props.flex;

  return mergeStyleSets({
    accordionMenu: {
      padding: 0,
      margin: '0 !important',
      selectors: {
        li: {
          listStyle: 'none',
          margin: '0 !important',
          selectors: {
            '&:last-child': {
              borderBottom: `2px solid ${palette.skeColor.grey}`,
            },
          },
        },
      },
    },
    menuItem: {
      backgroundColor: palette.skeColor.white,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      border: 'none',
      borderTop: `2px solid ${palette.skeColor.grey}`,
      textAlign: 'left',
      padding: '0 15px',
      selectors: {
        '&:hover': {
          backgroundColor: palette.skeColor.lightBlue,
          cursor: 'pointer',
        },
        '&:focus': {
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none',
        },
        '&:active': {
          color: palette.skeColor.darkBlue,
        },
      },
    },
    menuItemIsOpen: {
      borderTop: `2px solid ${palette.skeColor.grey} !important`,
    },
    menuItemTitle: {
      display: 'flex',
      alignItems: 'center',
      flex: flex ? '1 1 auto' : undefined,
    },
    title: {
      fontSize: FontSizes.medium,
      display: flex ? 'flex' : undefined,
      flex: flex ? '1 1 auto' : undefined,
      margin: '0 15px 0 15px',
      padding: '10px 0',
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      border: `2px solid ${palette.skeColor.blackAlt}`,
      borderRadius: '50%',
      margin: '8px 0 8px 0',
      fontSize: IconFontSizes.xlarge,
    },
    toggleButton: {
      color: palette.skeColor.blue,
      selectors: {
        i: {
          fontSize: IconFontSizes.xlarge,
          paddingLeft: '1px',
        },
      },
    },
    toggleButtonOpen: {
      color: palette.skeColor.blue,
      selectors: {
        i: {
          transform: 'rotate(180deg)',
          paddingLeft: '1px',
        },
      },
    },
    content: {
      borderTop: `2px solid ${palette.skeColor.grey}`,
      padding: 15,
      background: palette.skeColor.lightBeige,
      display: 'block',
    },
  });
}
