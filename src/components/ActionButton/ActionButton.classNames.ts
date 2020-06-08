import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import {
  FontSizes,
  PaletteProps,
  getFocusStyle,
  ActionButtonProps,
} from '../index';

function getTypeColor(props: ActionButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'blue':
      return {
        color: palette.skeColor.blue,
      };
    case 'white':
      return {
        color: palette.skeColor.white,
      };
    default:
      return {
        color: palette.bodyText,
      };
  }
}

function getIconColor(props: ActionButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'black':
      return {
        color: palette.bodyText,
      };
    case 'green':
      return {
        color: palette.skeColor.green,
      };
    case 'red':
      return {
        color: palette.skeColor.pink,
      };
    case 'white':
      return {
        color: palette.skeColor.white,
      };
    default:
      return {
        color: palette.skeColor.blue,
      };
  }
}

function getHoverColor(props: ActionButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'black':
      return {
        color: palette.skeColor.blue,
      };
    case 'white':
      return {
        color: palette.skeColor.whiteGrey,
      };
    default:
      return {
        color: palette.bodyText,
      };
  }
}

export function getClassNames(props: ActionButtonProps): string {
  const palette = getTheme().palette as PaletteProps;
  const inset = -4;
  const radius = '0';
  return mergeStyles(getFocusStyle({ palette }, inset, 'relative', radius), {
    selectors: {
      '& span': {
        flexDirection: props.iconAfter ? 'row-reverse' : 'row',
      },
      '&.ms-Button.ms-Button--action, &.ms-Button--action .ms-Button-icon': {
        ...getTypeColor(props),
      },
      '&.ms-Button--action .ms-Button-icon': {
        // @ts-ignore TODO
        fontSize: FontSizes[props.iconSize],
        // @ts-ignore TODO
        ...getIconColor(props),
      },
      '&.ms-Button--action:hover .ms-Button-label': {
        textDecoration: 'underline',
        ...getHoverColor(props),
      },
      '&.ms-Button--action:hover .ms-Button-icon': {
        ...getHoverColor(props),
      },
      '&.ms-Button--action:active .ms-Button-label': {
        textDecoration: 'none',
      },
      '&.ms-Button--action:disabled, &.ms-Button--action:disabled i': {
        color: palette.skeColor.lightGrey,
      },
    },
  });
}
