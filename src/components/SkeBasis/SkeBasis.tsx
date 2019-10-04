import * as React from 'react';
import { registerIcons, loadTheme, createTheme } from '@uifabric/styling';
import {
  Fabric,
  IFabricProps
} from 'office-ui-fabric-react/lib-commonjs/Fabric';

import palette from '../utils/palette';
import fonts from '../utils/fonts';
import * as icons from '../utils/icons';
//TODO FIX
interface SkeBasisProps extends IFabricProps {
  palette: object;
  fonts: object;
  icons?: {
    style: object;
    fontFace: {
      fontFamily: string;
      src: string;
    };
    icons: object;
  }[];
}

class SkeBasis extends Fabric<SkeBasisProps> {
  static PALETTE = palette;
  static FONTS = fonts;
  static ICONS = icons;

  static defaultProps = {
    palette: SkeBasis.PALETTE,
    fonts: SkeBasis.FONTS,
    icons: [SkeBasis.ICONS.SkeIcons, SkeBasis.ICONS.MdIcons]
  };
  constructor(props) {
    super(props);
    const { palette, fonts } = props;
    if (palette && fonts) {
      const theme = createTheme({ palette, fonts, isInverted: false });
      loadTheme(theme);
    }
    if (props.icons) {
      props.icons.forEach(iconFont => registerIcons(iconFont));
    }
  }
  render() {
    return super.render();
  }
}

export default SkeBasis;
