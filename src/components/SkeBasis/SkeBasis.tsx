import {
  createTheme,
  loadTheme,
  registerIcons,
  IIconSubset
} from '@uifabric/styling';
import {
  Fabric,
  IFabricProps
} from 'office-ui-fabric-react/lib-commonjs/Fabric';
import * as React from 'react';
import fonts from '../utils/fonts';
import * as icons from '../utils/icons';
import { skeColor, skePalette } from '../utils/palette';

const palette = {
  ...skePalette,
  skeColor: skeColor
};

interface SkeBasisProps extends IFabricProps {
  palette?: object;
  fonts?: object;
  icons?: Array<IIconSubset>;
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

  constructor(props: SkeBasisProps) {
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
    const fabricProps: IFabricProps = {
      dir: 'ltr',
      ...this.props
    };

    return <Fabric {...fabricProps}>{this.props.children}</Fabric>;
  }
}

export default SkeBasis;
