import { registerIcons, loadTheme, createTheme } from '@uifabric/styling';

import { Palette, Fonts, SkeIcons, MdIcons } from '../index';
// @ts-ignore TODO
const theme = createTheme({ Palette, Fonts, isInverted: false });
loadTheme(theme);
// @ts-ignore TODO
registerIcons(SkeIcons);
// @ts-ignore TODO
registerIcons(MdIcons);
