import { createTheme, loadTheme, registerIcons } from '@uifabric/styling';
import {
  Fabric,
  IFabricProps
} from 'office-ui-fabric-react/lib-commonjs/Fabric';
import * as React from 'react';
import fonts from '../utils/fonts';
import * as icons from '../utils/icons';
import { skePalette, skeColor } from '..';

const palette = {
  ...skePalette,
  skeColor: skeColor
};

interface SkeBasisProps extends IFabricProps {
  palette: object;
  fonts: object;
  icons?: Array<{
    style: object;
    fontFace: {
      fontFamily: string;
      src: string;
    };
    icons: object;
  }>;
}

class SkeBasis extends React.PureComponent<SkeBasisProps> {
  static PALETTE = palette;
  static FONTS = fonts;
  static ICONS = icons;

  static defaultProps = {
    palette: SkeBasis.PALETTE,
    fonts: SkeBasis.FONTS,
    icons: [SkeBasis.ICONS.SkeIcons, SkeBasis.ICONS.MdIcons]
  };

  // @ts-ignore TODOHeidi
  constructor(props) {
    super(props);
    const { palette, fonts } = props;

    if (palette && fonts) {
      const theme = createTheme({ palette, fonts, isInverted: false });
      loadTheme(theme);
    }
    if (props.icons) {
      // @ts-ignore TODO
      props.icons.forEach(iconFont => registerIcons(iconFont));
    }
  }

  render() {
    return <Fabric {...this.props}>{this.props.children}</Fabric>;
  }
}

export default SkeBasis;
