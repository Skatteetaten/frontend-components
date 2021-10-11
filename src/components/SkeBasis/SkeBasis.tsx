import {
  createTheme,
  loadTheme,
  registerIcons,
  IIconSubset,
  getIcon,
} from '@fluentui/react/lib/Styling';
import { ThemeProvider, IFabricProps } from '@fluentui/react';
import * as React from 'react';
import { Fonts, SkeIcons, AliasIcons, Palette, PaletteProps } from '../utils';

export interface SkeBasisProps extends IFabricProps {
  palette?: object;
  fonts?: object;
  icons?: Array<IIconSubset>;
  brand?: string;
}

interface SkeBasisState {
  brand: { tag: string; primaryColor: string; secondaryColor: string };
}

export const brands = {
  SKE: {
    tag: 'SKE',
    primaryColor: Palette.skeColor.burgundy100,
    secondaryColor: Palette.skeColor.burgundy30,
  },
  INK: {
    tag: 'INK',
    primaryColor: Palette.skeColor.green100,
    secondaryColor: Palette.skeColor.green30,
  },
  LSO: {
    tag: 'LSO',
    primaryColor: Palette.skeColor.black100,
    secondaryColor: Palette.skeColor.grey30,
  },
};

export const BrandContext = React.createContext(
  brands.SKE //default brand
);

/*
 * visibleName SkeBasis (Basiskomponent)
 */
export class SkeBasis extends React.PureComponent<
  SkeBasisProps,
  SkeBasisState
> {
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
    brand: 'SKE',
  };

  constructor(props: SkeBasisProps) {
    super(props);
    const { palette, fonts, brand } = props;

    switch (brand) {
      case 'INK':
        this.state = {
          brand: brands.INK,
        };
        break;
      case 'LSO':
        this.state = {
          brand: brands.LSO,
        };
        break;
      default:
        this.state = {
          brand: brands.SKE,
        };
        break;
    }

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

    return (
      /* TODO: Ok å bytte fra fabric til ThemeProvider? */
      <BrandContext.Provider value={this.state.brand}>
        <ThemeProvider {...fabricProps}>{this.props.children}</ThemeProvider>
      </BrandContext.Provider>
    );
  }
}
