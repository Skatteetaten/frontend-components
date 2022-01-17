import {
  registerIcons,
  loadTheme,
  createTheme,
} from '@fluentui/react/lib/Styling';

import {
  Palette as palette,
  Fonts as fonts,
  SkeIcons,
  AliasIcons,
  PaletteProps,
} from '../utils/index';
// @ts-ignore TODO
const theme = createTheme({
  palette: palette as PaletteProps,
  fonts,
  isInverted: false,
});
loadTheme(theme);
// @ts-ignore TODO
registerIcons(SkeIcons);
// @ts-ignore TODO
registerIcons(AliasIcons);
