export enum FontSizes {
  mini = '10px',
  xSmall = '12px',
  small = '14px',
  smallPlus = '15px',
  medium = '16px',
  mediumPlus = '17px',
  icon = '20px',
  large = '18px',
  largePlus = '20px',
  xLarge = '22px',
  xxLarge = '28px',
  superLarge = '42px',
  mega = '72px'
}

export enum FontWeights {
  light = 100,
  semilight = 300,
  regular = 400,
  semibold = 600,
  bold = 700
}

export enum IconFontSizes {
  xSmall = '10px',
  small = '12px',
  medium = '16px',
  large = '20px',
  xlarge = '24px',
  xxlarge = '32px',
  mega = '40px'
}
// @ts-ignore TODO
export const createFont = (size, weight, localeCode = 'no') => {
  return {
    fontFamily: "'Helvetica Neue', Helvetica , Arial, sans-serif",
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: size,
    fontWeight: weight
  };
};

export default {
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
  mega: createFont(FontSizes.mega, FontWeights.light)
};
