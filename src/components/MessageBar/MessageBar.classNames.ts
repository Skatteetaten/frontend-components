import { mergeStyles } from '@fluentui/merge-styles';
import { FontSizes, IconFontSizes, PaletteProps } from '../utils';
import { MessageBarProps } from './MessageBar.types';
import { getTheme } from '@fluentui/react/lib/Styling';
import { MessageBarType } from '@fluentui/react';

function getBackgroundColor(props: MessageBarProps['type']) {
  const palette = getTheme().palette as PaletteProps;

  switch (props) {
    case MessageBarType.error:
    case MessageBarType.warning:
    case MessageBarType.severeWarning:
      return {
        backgroundColor: palette.skeColor.burgundy10,
      };
    case MessageBarType.success:
      return {
        backgroundColor: palette.skeColor.lightGreen,
      };
    case MessageBarType.info:
    default:
      return {
        backgroundColor: palette.skeColor.brown10,
      };
  }
}

function getIconColor(props: MessageBarProps['type']) {
  const palette = getTheme().palette as PaletteProps;

  switch (props) {
    case MessageBarType.error:
    case MessageBarType.warning:
      return {
        color: palette.skeColor.statusError,
      };
    case MessageBarType.severeWarning:
      return {
        color: palette.skeColor.white,
      };
    case MessageBarType.success:
      return {
        color: palette.skeColor.statusOk,
      };
    case MessageBarType.info:
    default:
      return {
        color: palette.skeColor.statusWarning,
      };
  }
}

function getBorderColor(props: MessageBarProps['type']) {
  const palette = getTheme().palette as PaletteProps;

  switch (props) {
    case MessageBarType.error:
    case MessageBarType.warning:
      return {
        borderLeft: `3px solid ${palette.skeColor.statusError}`,
      };
    case MessageBarType.severeWarning:
      return {
        border: `2px solid ${palette.skeColor.statusError}`,
      };
    case MessageBarType.success:
      return {
        borderLeft: `3px solid ${palette.skeColor.statusOk}`,
      };
    case MessageBarType.info:
    default:
      return {
        borderLeft: `3px solid ${palette.skeColor.statusWarning}`,
      };
  }
}

export const getClassNames = (props: MessageBarProps) => {
  const palette = getTheme().palette as PaletteProps;
  const severe = props.type === MessageBarType.severeWarning;
  const { size } = props;
  return mergeStyles([
    {
      selectors: {
        '&.ms-MessageBar': {
          ...getBackgroundColor(props.type),
          ...getBorderColor(props.type),
          color: palette.skeColor.blackAlt,

          selectors: {
            '&.fade-exit': {
              opacity: 1,
            },
          },
        },
        '.ms-MessageBar-content': {
          border: severe ? `2px solid ${palette.skeColor.statusError}` : 'none',
          padding: size === 'large' ? '25px 25px 25px 30px' : '',
          width: 'auto',
          selectors: {
            '@media (max-width: 640px)': {
              padding: size === 'large' ? '12px 12px 12px 0px' : '',
            },
          },
        },
        '& .ms-MessageBar-icon': {
          backgroundColor: severe ? palette.skeColor.statusError : 'none',
          margin: 0,
          padding: '8px 8px 8px 8px',
        },
        '.ms-MessageBar-icon i': {
          ...getIconColor(props.type),

          fontSize: size === 'large' ? IconFontSizes.mega : IconFontSizes.large,
          selectors: {
            '@media (max-width: 640px)': {
              fontSize: size === 'large' ? IconFontSizes.xlarge : undefined,
              margin: size === 'large' ? '10px 0 0 10px' : '',
            },
          },
        },
        '.ms-MessageBar-innerText': {
          fontSize: size === 'large' ? FontSizes.large : FontSizes.medium,
          color: palette.skeColor.blackAlt,
          lineHeight: size === 'large' ? '28px' : '22px',
          padding: size === 'large' ? '7px 0px 0px 30px' : '-2px 0px 0px 0px',
          selectors: {
            '@media (max-width: 640px)': {
              padding:
                size === 'large' ? '7px 0px 0px 8px' : '-2px 0px 0px 0px',
            },
          },
        },
        '.ms-MessageBar-dismissal': {
          marginTop: size === 'large' ? '12px ' : '4px',
        },
        '.ms-MessageBar-dismissal i': {
          fontSize:
            size === 'large' ? IconFontSizes.xlarge : IconFontSizes.large,
        },
      },
    },
  ]);
};
