import {
  createTheme,
  loadTheme,
  registerIcons,
  IIconSubset,
  getIcon,
} from '@uifabric/styling';
import { Fabric, IFabricProps } from 'office-ui-fabric-react';
import * as React from 'react';
import { Fonts, SkeIcons, MdIcons, Palette } from '../index';

export interface SkeBasisProps extends IFabricProps {
  palette?: object;
  fonts?: object;
  icons?: Array<IIconSubset>;
}

export class SkeBasis extends React.PureComponent<SkeBasisProps> {
  static PALETTE = Palette;
  static FONTS = Fonts;
  static ICONS = {
    ske: SkeIcons,
    md: MdIcons,
  };

  static defaultProps = {
    palette: SkeBasis.PALETTE,
    fonts: SkeBasis.FONTS,
    icons: [SkeBasis.ICONS.ske, SkeBasis.ICONS.md],
  };

  constructor(props: SkeBasisProps) {
    super(props);
    const { palette, fonts } = props;

    if (palette && fonts) {
      const theme = createTheme({ palette, fonts, isInverted: false });
      loadTheme(theme);
    }
    if (props.icons) {
      if (!getIcon('AccountEnk')) {
        props.icons.forEach((iconFont) => registerIcons(iconFont));
      }
    }
  }

  render() {
    const fabricProps: IFabricProps = {
      dir: 'ltr',
      ...this.props,
    };

    return <Fabric {...fabricProps}>{this.props.children}</Fabric>;
  }
}
