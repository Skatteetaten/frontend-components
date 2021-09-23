import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontSizes, FontWeights, PaletteProps, getFocusStyle } from '../utils';
import { ActionButtonProps } from './ActionButton.types';

function getTypeColor(props: ActionButtonProps): object {
  const palette = getTheme().palette as PaletteProps;
  switch (props.color) {
    case 'blue':
      return {
        color: palette.skeColor.interactiveDark,
      };
    case 'red':
      return {
        color: palette.skeColor.statusError,
      };
    case 'green':
      return {
        color: palette.skeColor.statusOk,
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
        border: border ? `1px solid ${palette.skeColor.black100}` : 'none',
      };
    case 'red':
      return {
        border: border ? `1px solid ${palette.skeColor.statusError}` : 'none',
      };
    case 'green':
      return {
        border: border ? `1px solid ${palette.skeColor.statusOk}` : 'none',
      };
    case 'white':
      return {
        border: border ? `1px solid ${palette.skeColor.white}` : 'none',
      };
    default:
      return {
        border: border ? `1px solid ${palette.skeColor.interactive}` : 'none',
      };
  }
}

export function getClassNames(props: ActionButtonProps): string {
  const palette = getTheme().palette as PaletteProps;
  const { border } = props;

  const inset = -4;
  const radius = '0';
  return mergeStyles(getFocusStyle({ palette }, inset, 'relative', radius), {
    selectors: {
      '&.ms-Button.ms-Button--action': {
        height: 'auto',
        minHeight: '32px',
        padding: border ? '6px 16px' : '6px 8px',
        borderRadius: '4px',
        marginLeft: border ? '0px' : '-8px',
        marginRight: '8px',
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
        borderRadius: '5px',
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
        backgroundColor: palette.skeColor.lightBlue,
      },
      '&.ms-Button--action:active ': {
        position: 'relative',
        top: '2px',
        transition: '0.15s',
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
