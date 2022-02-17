import { IPalette } from '@fluentui/react';

import colors from './designtokens/_colors.json';

export interface SkeColorProp {
  //New
  burgundy100: string;
  burgundy70: string;
  burgundy50: string;
  burgundy30: string;
  burgundy10: string;
  burgundy5: string;
  green100: string;
  green70: string;
  green50: string;
  green30: string;
  green10: string;
  green5: string;
  brown100: string;
  brown70: string;
  brown50: string;
  brown30: string;
  brown10: string;
  brown5: string;
  blue100: string;
  blue70: string;
  blue50: string;
  blue30: string;
  blue10: string;
  blue5: string;
  black100: string;
  grey70: string;
  grey50: string;
  grey30: string;
  grey10: string;
  grey5: string;

  statusError: string;
  statusWarning: string;
  statusOk: string;
  interactiveDark: string;
  interactive: string;
  interactiveLight: string;

  //NEW ALIASES
  backgroundHoverColor: string;
  backgroundFocusColor: string;

  //OLD
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
  error: string;
  transparent: string;
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

export const skeColor = {
  burgundy100: colors['ske-color-burgundy-100'],
  burgundy70: colors['ske-color-burgundy-70'],
  burgundy50: colors['ske-color-burgundy-50'],
  burgundy30: colors['ske-color-burgundy-30'],
  burgundy10: colors['ske-color-burgundy-10'],
  burgundy5: colors['ske-color-burgundy-5'],

  green100: colors['ske-color-green-100'],
  green70: colors['ske-color-green-70'],
  green50: colors['ske-color-green-50'],
  green30: colors['ske-color-green-30'],
  green10: colors['ske-color-green-10'],
  green5: colors['ske-color-green-5'],

  brown100: colors['ske-color-brown-100'],
  brown70: colors['ske-color-brown-70'],
  brown50: colors['ske-color-brown-50'],
  brown30: colors['ske-color-brown-30'],
  brown10: colors['ske-color-brown-10'],
  brown5: colors['ske-color-brown-5'],

  blue100: colors['ske-color-blue-100'],
  blue70: colors['ske-color-blue-70'],
  blue50: colors['ske-color-blue-50'],
  blue30: colors['ske-color-blue-30'],
  blue10: colors['ske-color-blue-10'],
  blue5: colors['ske-color-blue-5'],

  black100: colors['ske-color-black-100'],
  grey70: colors['ske-color-grey-70'],
  grey50: colors['ske-color-grey-50'],
  grey30: colors['ske-color-grey-30'],
  grey10: colors['ske-color-grey-10'],
  grey5: colors['ske-color-grey-5'],

  statusError: colors['ske-color-status-error'],
  statusWarning: colors['ske-color-status-warning'],
  statusOk: colors['ske-color-status-ok'],
  interactiveDark: colors['ske-color-interactive-dark'],
  interactive: colors['ske-color-interactive'],
  interactiveLight: colors['ske-color-interactive-light'],

  //ALIASES

  backgroundHoverColor: colors['ske-color-blue-10'],
  backgroundFocusColor: colors['ske-color-blue-10'],
  internal: colors['ske-color-burgundy-100'],
  internalLight: colors['ske-color-burgundy-5'],
  black: '#000000',
  blackAlt: colors['ske-color-black-100'],
  darkGrey: colors['ske-color-grey-70'],
  grey: colors['ske-color-grey-50'],
  lightGrey: colors['ske-color-grey-30'],
  neutralGrey: colors['ske-color-grey-5'],
  whiteGrey: colors['ske-color-grey-10'],
  white: '#ffffff',
  burgundy: colors['ske-color-burgundy-100'],
  burgundyLight: colors['ske-color-burgundy-70'],

  pink: '#df4661' /** UTGÅR */,
  lightPink: '#f7d1d7' /** UTGÅR */,

  brown: colors['ske-color-brown-50'],
  lightBrown: colors['ske-color-brown-30'] /** Sjekk */,

  beige: colors['ske-color-brown-10'],
  lightBeige: colors['ske-color-brown-5'],
  darkBeige: colors['ske-color-brown-30'],

  green: colors['ske-color-green-50'],
  lightGreen: colors['ske-color-green-10'],

  darkBlue: colors['ske-color-interactive-dark'],
  blue: colors['ske-color-interactive'],
  lightBlue: colors['ske-color-interactive-light'],
  error: colors['ske-color-status-error'],
  transparent: 'transparent',
};

export const skePalette = {
  //Sets up fluentUI baseline
  themePrimary: colors['ske-color-interactive'],
  themeLighterAlt: '#ebf4fd',
  themeLighter: '#cce3f9',
  themeLight: '#82bcf1',
  themeTertiary: '#288be7',
  themeSecondary: '#146aba',
  themeDarkAlt: '#11599c',
  themeDark: '#0c3f6f',
  themeDarker: '#0a365f',
  neutralLighterAlt: '#f8f8f8',
  neutralLighter: colors['ske-color-grey-5'],
  neutralLight: '#eaeaea',
  neutralQuaternaryAlt: '#dadada',
  neutralQuaternary: '#d0d0d0',
  neutralTertiaryAlt: '#c8c8c8',
  neutralTertiary: 'rgba(89, 89, 89, 0.95)',
  neutralSecondary: 'rgba(55, 55, 55, 0.95)',
  neutralPrimaryAlt: 'rgba(47, 47, 47, 0.95)',
  neutralPrimary: 'rgba(0, 0, 0, 0.95)',
  neutralDark: 'rgba(21, 21, 21, 0.95)',
  black: colors['ske-color-black-100'],
  white: '#ffffff',
  primaryBackground: '#ffffff',
  primaryText: colors['ske-color-black-100'],
  bodyBackground: '#ffffff',
  bodyText: 'rgba(0, 0, 0, 0.95)',
  disabledBackground: colors['ske-color-grey-5'],
  disabledText: colors['ske-color-grey-50'],
};

//@ts-ignore
export const DefaultPalette: PaletteProps = Object.assign(skePalette, {
  // Egendefinerte farger fra Skatteetatens designmal
  skeColor: skeColor,
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
});
