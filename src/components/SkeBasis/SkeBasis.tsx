import {
  createTheme,
  loadTheme,
  registerIcons,
  IIconSubset,
  getIcon,
} from '@fluentui/react/lib/Styling';
import { Fabric, IFabricProps } from '@fluentui/react';
import * as React from 'react';
import { Fonts, SkeIcons, AliasIcons, Palette, PaletteProps } from '../utils';

export interface SkeBasisProps extends IFabricProps {
  palette?: object;
  fonts?: object;
  icons?: Array<IIconSubset>;
}

/**
 * @visibleName SkeBasis _Basiskomponent_
 */
export class SkeBasis extends React.PureComponent<SkeBasisProps> {
  static PALETTE = Palette;
  static FONTS = Fonts;
  static ICONS = {
    ske: SkeIcons,
    ali: AliasIcons,
  };

  static defaultProps = {
    palette: SkeBasis.PALETTE as PaletteProps,
    fonts: SkeBasis.FONTS,
    icons: [SkeBasis.ICONS.ske, SkeBasis.ICONS.ali],
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
