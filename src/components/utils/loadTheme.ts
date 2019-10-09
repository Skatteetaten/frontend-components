import {
  registerIcons,
  loadTheme,
  createTheme,
  IRawStyle
} from '@uifabric/styling';

import palette from './palette';
import fonts from './fonts';
import * as icons from './icons';

//TODO IRawStyle kompatibel?
const theme = createTheme({ palette, fonts, isInverted: false });
loadTheme(theme);

Object.keys(icons).forEach(key => registerIcons(icons[key]));
