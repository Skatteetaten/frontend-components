import { registerIcons, loadTheme, createTheme } from '@uifabric/styling';

import palette from './palette';
import fonts from './fonts';
import * as icons from './icons';
// @ts-ignore TODO
const theme = createTheme({ palette, fonts, isInverted: false });
loadTheme(theme);
// @ts-ignore TODO
Object.keys(icons).forEach(key => registerIcons(icons[key]));
