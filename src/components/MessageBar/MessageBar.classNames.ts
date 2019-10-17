import { mergeStyles } from '@uifabric/merge-styles';
import { Animation } from '../utils/getAnimationStyles';
import { FontSizes, IconFontSizes } from '..';
import { getTheme } from '@uifabric/styling';
import { MessageBarType } from 'office-ui-fabric-react/lib-commonjs/MessageBar';
import { PaletteProps } from '..';

//import { transitionKeysAreEqual } from 'office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey';
// @ts-ignore TODO
function getBackgroundColor(props) {
  const palette = getTheme().palette as PaletteProps;

  switch (props) {
    case MessageBarType.error:
    case MessageBarType.warning:
      return {
        backgroundColor: palette.skeColor.lightPink
      };
    case MessageBarType.severeWarning:
      return {
        backgroundColor: palette.skeColor.pink
      };
    case MessageBarType.info:
      return {
        backgroundColor: palette.skeColor.beige
      };
    case MessageBarType.success:
      return {
        backgroundColor: palette.skeColor.lightGreen
      };
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
  //const largeSize = size === 'large';
  //const defaultSize = size === 'default';
  // @ts-ignore TODO
  return mergeStyles([
    {
      //opacity: props.hideMessageBar ? 0 : 1,
      selectors: {
        '&.ms-MessageBar': {
          ...getBackgroundColor(props.type),
          border: 'none',
          padding: size === 'large' ? '25px 25px 25px 30px' : '',
          selectors: {
            '&.fade-exit': {
              opacity: 1
            },
            '&.fade-exit-active': {
              ...fadeOut
            }
          }
        },
        '.ms-MessageBar-icon i': {
          color: severe ? palette.skeColor.white : palette.skeColor.blackAlt,
          fontSize: size === 'large' ? IconFontSizes.mega : IconFontSizes.large
        },
        '.ms-MessageBar-innerText': {
          fontSize: size === 'large' ? FontSizes.large : FontSizes.medium,
          color: severe ? palette.skeColor.white : palette.skeColor.blackAlt,
          lineHeight: size === 'large' ? '40px' : '22px',
          padding: size === 'large' ? '-2px 0px 0px 30px' : '-2px 0px 0px 0px'
        },
        '.ms-MessageBar-dismissal i': {
          marginTop: size === 'large' ? '' : '6px',
          position: size === 'large' ? 'absolute' : '',
          top: size === 'large' ? '-8px' : '',
          right: size === 'large' ? '-15px' : '',
          fontSize:
            size === 'large' ? IconFontSizes.xlarge : IconFontSizes.large,
          color: severe ? palette.skeColor.white : palette.skeColor.blackAlt
        }
      }
    }
  ]);
};
