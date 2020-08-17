import { registerIcons, loadTheme, createTheme } from '@uifabric/styling';

import {
  Palette as palette,
  Fonts as fonts,
  SkeIcons,
  MdIcons,
} from '../index';
// @ts-ignore TODO
const theme = createTheme({ palette, fonts, isInverted: false });
loadTheme(theme);
// @ts-ignore TODO
registerIcons(SkeIcons);
// @ts-ignore TODO
registerIcons(MdIcons);
