import { IPalette } from '@uifabric/styling';
export interface SkeColorProp {
  internal: string;
  internalLight: string;
  black: string;
  blackAlt: string;
  darkGrey: string;
  grey: string;
  lightGrey: string;
  neutralGrey: string;
  whiteGrey: string;
  white: string;
  burgundy: string;
  burgundyLight: string;
  pink: string;
  lightPink: string;
  lightBrown: string;
  brown: string;
  lightBeige: string;
  beige: string;
  darkBeige: string;
  green: string;
  lightGreen: string;
  darkBlue: string;
  blue: string;
  lightBlue: string;
  mediumBlue: string;
  error: string;
}
export interface PaletteProps extends IPalette {
  skeColor: SkeColorProp;
  themePrimary: string;
  themeLighterAlt: string;
  themeLighter: string;
  themeLight: string;
  themeTertiary: string;
  themeSecondary: string;
  themeDarkAlt: string;
  themeDark: string;
  themeDarker: string;
  neutralLighterAlt: string;
  neutralLighter: string;
  neutralLight: string;
  neutralQuaternaryAlt: string;
  neutralQuaternary: string;
  neutralTertiaryAlt: string;
  neutralTertiary: string;
  neutralSecondary: string;
  neutralPrimaryAlt: string;
  neutralPrimary: string;
  neutralDark: string;
  black: string;
  white: string;
  primaryBackground: string;
  primaryText: string;
  bodyBackground: string;
  bodyText: string;
  disabledBackground: string;
  disabledText: string;
}

export enum skeColor {
  // LAGET MED GENEREATOR: https://developer.microsoft.com/en-us/fabric#/styles/themegenerator
  internal = '#6F2C3F',
  internalLight = '#ECE6E8',
  black = '#000000',
  blackAlt = '#1d1d1d',
  darkGrey = '#666666',
  grey = '#999999',
  lightGrey = '#bbbbbb',
  neutralGrey = '#f4f4f4',
  whiteGrey = '#e8e8e8',
  white = '#ffffff',
  burgundy = '#6f2c3f',
  burgundyLight = '#b07c83',
  pink = '#df4661',
  lightPink = '#f7d1d7',
  lightBrown = '#ecc7a3',
  brown = '#e7b78a',
  lightBeige = '#fcf6f0',
  beige = '#f9ede2',
  darkBeige = '#f3dbc4',
  green = '#91d6ac',
  lightGreen = '#e3f5ea',
  darkBlue = '#093e61',
  blue = '#1362ae',
  lightBlue = '#cde1f9',
  mediumBlue = '#8accff',
  error = '#b25c62'
}

export enum skePalette {
  themePrimary = '#1362ae',
  themeLighterAlt = '#ebf4fd',
  themeLighter = '#cce3f9',
  themeLight = '#82bcf1',
  themeTertiary = '#288be7',
  themeSecondary = '#146aba',
  themeDarkAlt = '#11599c',
  themeDark = '#0c3f6f',
  themeDarker = '#0a365f',
  neutralLighterAlt = '#f8f8f8',
  neutralLighter = '#f4f4f4',
  neutralLight = '#eaeaea',
  neutralQuaternaryAlt = '#dadada',
  neutralQuaternary = '#d0d0d0',
  neutralTertiaryAlt = '#c8c8c8',
  neutralTertiary = 'rgba(89, 89, 89, 0.95)',
  neutralSecondary = 'rgba(55, 55, 55, 0.95)',
  neutralPrimaryAlt = 'rgba(47, 47, 47, 0.95)',
  neutralPrimary = 'rgba(0, 0, 0, 0.95)',
  neutralDark = 'rgba(21, 21, 21, 0.95)',
  black = 'rgba(11, 11, 11, 0.95)',
  white = '#ffffff',
  primaryBackground = '#ffffff',
  primaryText = 'rgba(0, 0, 0, 0.95)',
  bodyBackground = '#ffffff',
  bodyText = 'rgba(0, 0, 0, 0.95)',
  disabledBackground = '#f4f4f4',
  disabledText = '#c8c8c8'
}

export default {
  ...skePalette,
  // Egendefinerte farger fra Skatteetatens designmal
  skeColor: skeColor

  /* OPPRINNELIG LISTE
  themeDarker: '#004578',
  themeDark: '#005a9e',
  themeDarkAlt: '#106ebe',
  themePrimary: '#1362AE',
  themeSecondary: '#2b88d8',
  themeTertiary: '#71afe5',
  themeLight: '#c7e0f4',
  themeLighter: '#deecf9',
  themeLighterAlt: '#eff6fc',
  black: '#000000',
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralDark: '#212121',
  neutralPrimary: '#333333',
  neutralPrimaryAlt: '#3c3c3c',
  neutralSecondary: '#666666',
  neutralTertiary: '#a6a6a6',
  neutralTertiaryAlt: '#c8c8c8',
  neutralQuaternary: '#d0d0d0',
  neutralQuaternaryAlt: '#dadada',
  neutralLight: '#eaeaea',
  neutralLighter: '#f4f4f4',
  neutralLighterAlt: '#f8f8f8',
  accent: '#0078d7',
  white: '#ffffff',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#B70202',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d7',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a',*/
};
