import { registerIcons, loadTheme, createTheme } from '@uifabric/styling';

import palette from './palette';
import { Fonts, SkeIcons, MdIcons } from '../index';
// @ts-ignore TODO
const theme = createTheme({ palette, Fonts, isInverted: false });
loadTheme(theme);
// @ts-ignore TODO
registerIcons(SkeIcons);
// @ts-ignore TODO
registerIcons(MdIcons);
