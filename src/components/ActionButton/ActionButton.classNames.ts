import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, PaletteProps, getFocusStyle } from '../utils';
import { ActionButtonProps } from './ActionButton.types';

function getTypeColor(props: ActionButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'blue':
      return {
        color: palette.skeColor.interactive,
      };
    case 'red':
      return {
        color: palette.skeColor.statusError,
      };
    case 'green':
      return {
        color: palette.skeColor.green100,
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
        color: palette.skeColor.black100,
      };
    case 'green':
      return {
        color: palette.skeColor.statusOk,
      };
    case 'red':
      return {
        color: palette.skeColor.statusError,
      };
    case 'white':
      return {
        color: palette.skeColor.white,
      };
    default:
      return {
        color: palette.skeColor.interactive,
      };
  }
}

function getBorder(props: ActionButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  const { border } = props;
  switch (props.color) {
    case 'black':
      return {
        borderBottom: border
          ? `2px solid ${palette.skeColor.grey70}`
          : `2px solid ${palette.skeColor.transparent}`,
      };
    case 'red':
      return {
        borderBottom: border
          ? `2px solid ${palette.skeColor.burgundy70}`
          : `2px solid ${palette.skeColor.transparent}`,
      };
    case 'green':
      return {
        borderBottom: border
          ? `2px solid ${palette.skeColor.green70}`
          : `2px solid ${palette.skeColor.transparent}`,
      };
    case 'white':
      return {
        borderBottom: border
          ? `2px solid ${palette.skeColor.white}`
          : `2px solid ${palette.skeColor.transparent}`,
      };
    default:
      return {
        borderBottom: border
          ? `2px solid ${palette.skeColor.interactive}`
          : `2px solid ${palette.skeColor.transparent}`,
      };
  }
}

export function getClassNames(props: ActionButtonProps): string {
  const palette = getTheme().palette as PaletteProps;
  const border = props.border;

  const inset = -4;
  const radius = '0';
  return mergeStyles(getFocusStyle({ palette }, inset, 'relative', radius), {
    selectors: {
      '&.ms-Button.ms-Button--action': {
        height: 'auto',
        minHeight: '32px',
        padding: border ? '3px 6px 3px 4px' : '3px 4px',
        textAlign: props.iconAfter ? 'right' : 'left',
        ...getTypeColor(props),
        ...getBorder(props),
      },
      '.ms-Fabric--isFocusVisible &:focus:after': {
        content: '""',
        outline: 'transparent',
        zIndex: 1,
      },
      '& span': {
        flexDirection: props.iconAfter ? 'row-reverse' : 'row',
      },
      '&.ms-Button.ms-Button--action, &.ms-Button--action .ms-Button-icon': {
        fontWeight: FontWeights['medium'],
        ...getTypeColor(props),
      },
      '& .ms-Button-flexContainer': {
        alignItems: 'baseline',
      },
      '&.ms-Button--action .ms-Button-icon': {
        // @ts-ignore TODO
        fontSize: FontSizes[props.iconSize],
        marginLeft: '0',
        transform: 'translateY(1px)',

        // @ts-ignore TODO
        ...getIconColor(props),
      },
      '&.ms-Button--action .ms-Button-label': {
        lineHeight: '1.5',
      },
      '&.ms-Button--action:hover ': {
        backgroundColor: palette.skeColor.interactiveLight,
        transition: 'background 0.3s',
      },

      '&.ms-Button--action:active ': {
        transition: '0.15s',
        transform: 'translateY(2px)',
        transitionTimingFunction: 'ease',
      },
      '&.ms-Button--action:focus ': {
        backgroundColor: palette.skeColor.lightBlue,
        outline: 'transparent',
        boxShadow: 'none',
      },
      '&.ms-Button--action:focus::after': {
        outline: '0px solid transparent !important',
        border: 'none',
      },
      '&.ms-Button--action:active .ms-Button-label': {
        textAlign: props.iconAfter ? 'right' : 'left',
        textDecoration: 'none',
      },
      '&.ms-Button--action:disabled, &.ms-Button--action:disabled i': {
        color: palette.skeColor.lightGrey,
      },
    },
  });
}
