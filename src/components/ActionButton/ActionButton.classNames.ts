import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '..';
import { getFocusStyle } from '..';
import { PaletteProps } from '..';
// @ts-ignore TODO
function getTypeColor(props): string {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'blue':
      // @ts-ignore TODO
      return {
        color: palette.skeColor.blue
      };
    case 'white':
      // @ts-ignore TODO
      return {
        color: palette.skeColor.white
      };
    default:
      // @ts-ignore TODO
      return {
        color: palette.bodyText
      };
  }
}
// @ts-ignore TODO
function getIconColor(props): string {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'black':
      // @ts-ignore TODO
      return {
        color: palette.bodyText
      };
    case 'green':
      // @ts-ignore TODO
      return {
        color: palette.skeColor.green
      };
    case 'red':
      // @ts-ignore TODO
      return {
        color: palette.skeColor.pink
      };
    case 'white':
      // @ts-ignore TODO
      return {
        color: palette.skeColor.white
      };
    default:
      // @ts-ignore TODO
      return {
        color: palette.skeColor.blue
      };
  }
}
// @ts-ignore TODO
function getHoverColor(props): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'black':
      return {
        color: palette.skeColor.blue
      };
    case 'white':
      return {
        color: palette.skeColor.whiteGrey
      };
    default:
      return {
        color: palette.bodyText
      };
  }
}
// @ts-ignore TODO
export function getClassNames(props): string {
  const palette = getTheme().palette as PaletteProps;
  const inset = -4;
  const radius = 0;

  return mergeStyles([
    // @ts-ignore TODO
    getFocusStyle({ palette }, inset, 'relative', radius),
    {
      selectors: {
        '&.ms-Button.ms-Button--action, &.ms-Button--action .ms-Button-icon': {
          // @ts-ignore TODO
          ...getTypeColor(props)
        },
        '&.ms-Button--action .ms-Button-icon': {
          // @ts-ignore TODO
          fontSize: FontSizes[props.iconSize],
          // @ts-ignore TODO
          ...getIconColor(props)
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          textDecoration: 'underline',
          ...getHoverColor(props)
        },
        '&.ms-Button--action:hover .ms-Button-icon': {
          ...getHoverColor(props)
        },
        '&.ms-Button--action:active .ms-Button-label': {
          textDecoration: 'none'
        },
        '&.ms-Button--action:disabled, &.ms-Button--action:disabled i': {
          color: palette.skeColor.lightGrey
        }
      }
    }
  ]);
}
