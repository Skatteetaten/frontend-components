export enum FontSizes {
  mini = '0.625rem',
  xSmall = '0.75rem',
  small = '0.875rem',
  smallPlus = '0.9375rem',
  medium = '1rem',
  mediumPlus = '1.0625rem',
  icon = '1.25rem',
  large = '1.125rem',
  largePlus = '1.25rem',
  xLarge = '1.375rem',
  xxLarge = '1.875rem',
  superLarge = '2.625rem',
  mega = '4.25rem',
}

export enum LineHeightSizes {
  mini = '1.6',
  xSmall = '1.6666',
  small = '1.8525',
  smallPlus = '1.733',
  medium = '1.625',
  mediumPlus = '1.625',
  large = '1.6666',
  largePlus = '1.25rem',
  xLarge = '1.636',
  xxLarge = '1.6',
  superLarge = '1.524',
  mega = '1.4118',
}

export type FontSizeType = keyof typeof FontSizes;

export enum FontWeights {
  light = 100,
  semilight = 300,
  regular = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
}

export enum IconFontSizes {
  xSmall = '0.625rem',
  small = '0.75rem',
  medium = '1rem',
  large = '1.25rem',
  xlarge = '1.5rem',
  xxlarge = '2rem',
  mega = '2.5rem',
}
// @ts-ignore TODO
export const createFont = (size, weight, localeCode = 'no') => {
  return {
    fontFamily:
      "'Helvetica Neue', Helvetica , Arial, 'Liberation Sans', 'Nimbus Sans L', sans-serif",
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: size,
    fontWeight: weight,
  };
};

export const Fonts = {
  tiny: createFont(FontSizes.mini, FontWeights.semibold),
  xSmall: createFont(FontSizes.xSmall, FontWeights.regular),
  small: createFont(FontSizes.small, FontWeights.regular),
  smallPlus: createFont(FontSizes.smallPlus, FontWeights.regular),
  medium: createFont(FontSizes.medium, FontWeights.regular),
  mediumPlus: createFont(FontSizes.mediumPlus, FontWeights.regular),
  large: createFont(FontSizes.large, FontWeights.semilight),
  xLarge: createFont(FontSizes.xLarge, FontWeights.light),
  xxLarge: createFont(FontSizes.xxLarge, FontWeights.light),
  superLarge: createFont(FontSizes.superLarge, FontWeights.light),
  mega: createFont(FontSizes.mega, FontWeights.light),
};
