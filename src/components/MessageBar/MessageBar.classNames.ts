import { mergeStyles } from '@uifabric/merge-styles';
import { Animation } from '../utils/getAnimationStyles';
import { FontSizes, IconFontSizes } from '..';
import { getTheme } from '@uifabric/styling';
import { MessageBarType } from 'office-ui-fabric-react/lib-commonjs/MessageBar';
import { PaletteProps } from '..';
import { MessageBarProps } from './MessageBar';

function getBackgroundColor(props: MessageBarProps) {
  const palette = getTheme().palette as PaletteProps;

  switch (props) {
    case MessageBarType.error:
    case MessageBarType.warning:
      return {
        backgroundColor: palette.skeColor.lightPink
      };
    case MessageBarType.severeWarning:
      return {
        backgroundColor: palette.skeColor.lightPink
      };
    case MessageBarType.success:
      return {
        backgroundColor: palette.skeColor.lightGreen
      };
    case MessageBarType.info:
    default:
      return {
        backgroundColor: palette.skeColor.beige
      };
  }
}
// @ts-ignore TODO
export const getClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  const severe = props.type === MessageBarType.severeWarning;
  // @ts-ignore TODO
  const fadeOut = Animation.fadeOutNormal;
  const { size } = props;
  // @ts-ignore TODO
  return mergeStyles([
    {
      selectors: {
        '&.ms-MessageBar': {
          ...getBackgroundColor(props.type),
          color: palette.skeColor.blackAlt,
          selectors: {
            '&.fade-exit': {
              opacity: 1
            },
            '&.fade-exit-active': {
              ...fadeOut
            }
          }
        },
        '.ms-MessageBar-content': {
          border: severe ? `4px solid ${palette.skeColor.pink}` : 'none',
          padding: size === 'large' ? '25px 25px 25px 30px' : '',
          width: 'auto',
          selectors: {
            '@media (max-width: 640px)': {
              padding: size === 'large' ? '12px 12px 12px 0px' : ''
            }
          }
        },

        '.ms-MessageBar-icon i': {
          color: palette.skeColor.blackAlt,
          fontSize: size === 'large' ? IconFontSizes.mega : IconFontSizes.large,
          selectors: {
            '@media (max-width: 640px)': {
              fontSize: size === 'large' && IconFontSizes.large,
              margin: size === 'large' ? '10px 0 0 10px' : ''
            }
          }
        },
        '.ms-MessageBar-innerText': {
          fontSize: size === 'large' ? FontSizes.large : FontSizes.medium,
          color: palette.skeColor.blackAlt,
          lineHeight: size === 'large' ? '28px' : '22px',
          padding: size === 'large' ? '7px 0px 0px 30px' : '-2px 0px 0px 0px',
          selectors: {
            '@media (max-width: 640px)': {
              fontSize: size === 'large' && IconFontSizes.large,
              padding: size === 'large' ? '7px 0px 0px 8px' : '-2px 0px 0px 0px'
            }
          }
        },
        '.ms-MessageBar-dismissal': {
          marginTop: size === 'large' ? '12px ' : '4px'
        },
        '.ms-MessageBar-dismissal i': {
          fontSize:
            size === 'large' ? IconFontSizes.xlarge : IconFontSizes.large
        }
      }
    }
  ]);
};
