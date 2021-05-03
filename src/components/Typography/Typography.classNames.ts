import { mergeStyles, IStyle } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights, PaletteProps, takeIf } from '../utils';

/**
 * Each property contains a list of tags which should have their
 * corresponding css style (margin, color, size, border) removed.
 */
interface TagStyleOptions {
  noMargin?: string[];
  noColor?: string[];
  noSize?: string[];
  noBorder?: string[];
}

interface TagStyle {
  showMargin: boolean;
  showColor: boolean;
  showSize: boolean;
  showBorder: boolean;
}

const defaultMargin = '16px 0 4px 0';

export const hex2rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) ?? [];
  return `rgba(${r},${g},${b},${alpha})`;
};

function containsTag(tag: string, tags?: string[]): boolean {
  if (Array.isArray(tags) && tags !== undefined) {
    return tags.indexOf(tag) > -1;
  }
  return false;
}

const getTagStyle = (
  tag: string,
  { noMargin, noColor, noSize, noBorder }: TagStyleOptions
): TagStyle => ({
  showMargin: !containsTag(tag, noMargin),
  showColor: !containsTag(tag, noColor),
  showSize: !containsTag(tag, noSize),
  showBorder: !containsTag(tag, noBorder),
});

const getH1Style = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle('h1', options);
  return {
    fontSize: takeIf(showSize, FontSizes.superLarge),
    lineHeight: '48px',
    fontWeight: FontWeights.bold,
    margin: takeIf(showMargin, '40px 0 8px 0'),
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.xxLarge),
        margin: takeIf(showMargin, '32px 0 4px 0'),
        lineHeight: '40px',
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.xLarge),
        margin: takeIf(showMargin, '32px 0 4px 0'),
        lineHeight: '40px',
      },
    },
  };
};

const getH2Style = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showColor, showMargin, showSize } = getTagStyle('h2', options);
  return {
    fontSize: takeIf(showSize, FontSizes.xxLarge),
    lineHeight: '32px',
    fontWeight: FontWeights.bold,
    margin: takeIf(showMargin, '32px 0 8px 0'),
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.xLarge),
        margin: takeIf(showMargin, defaultMargin),
        lineHeight: '28px',
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.large),
        margin: takeIf(showMargin, defaultMargin),
        lineHeight: '28px',
      },
    },
  };
};

const getH3Style = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle('h3', options);
  return {
    fontSize: takeIf(showSize, FontSizes.xLarge),
    fontWeight: FontWeights.bold,
    margin: takeIf(showMargin, '24px 0 8px 0'),
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.largePlus),
        margin: takeIf(showMargin, defaultMargin),
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.large),
        margin: takeIf(showMargin, defaultMargin),
      },
    },
  };
};

const getH4Style = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle('h4', options);
  return {
    fontSize: takeIf(showSize, FontSizes.large),
    fontWeight: FontWeights.bold,
    margin: takeIf(showMargin, '16px 0 0 0'),
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.mediumPlus),
        margin: takeIf(showMargin, '8px 0 0 0'),
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.medium),
        margin: takeIf(showMargin, '8px 0 0 0'),
      },
    },
  };
};

const getPStyle = (options: TagStyleOptions, palette: PaletteProps): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle('p', options);
  return {
    fontSize: takeIf(showSize, FontSizes.medium),
    fontWeight: FontWeights.regular,
    lineHeight: '23px',
    margin: takeIf(showMargin, '14px 0 0 0'),
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.smallPlus),
        lineHeight: '22px',
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.small),
        lineHeight: '22px',
      },
    },
  };
};

const getUlStyle = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle('ul', options);
  return {
    listStyleType: 'square',
    fontSize: takeIf(showSize, FontSizes.medium),
    margin: takeIf(showMargin, '16px 0 16px 0'),
    lineHeight: '22px',
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.smallPlus),
        lineHeight: '22px',
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.small),
        lineHeight: '22px',
      },
    },
  };
};

const getOlStyle = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle('ol', options);
  return {
    fontSize: takeIf(showSize, FontSizes.medium),
    margin: takeIf(showMargin, '16px 0 16px 0'),
    lineHeight: '24px',
    color: takeIf(showColor, palette.skeColor.blackAlt),
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.smallPlus),
        lineHeight: '22px',
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.small),
        lineHeight: '22px',
      },
    },
  };
};

const getBlockqouteStyle = (
  options: TagStyleOptions,
  palette: PaletteProps
): IStyle => {
  const { showSize, showMargin, showColor } = getTagStyle(
    'blockquote',
    options
  );
  return {
    fontSize: takeIf(showSize, FontSizes.medium),
    fontWeight: FontWeights.regular,
    lineHeight: '22px',
    margin: takeIf(showMargin, '16px 24px'),
    padding: '8px 24px',
    color: takeIf(showColor, palette.skeColor.blackAlt),
    borderLeft: `4px solid ${palette.skeColor.brown}`,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: takeIf(showSize, FontSizes.smallPlus),
        lineHeight: '22px',
      },
      '@media (max-width: 480px)': {
        fontSize: takeIf(showSize, FontSizes.small),
        lineHeight: '22px',
      },
    },
  };
};

const getAStyle = (options: TagStyleOptions, palette: PaletteProps): IStyle => {
  const { showColor, showBorder } = getTagStyle('a', options);
  return {
    color: takeIf(showColor, palette.skeColor.blue),
    textDecoration: 'none',
    paddingBottom: '1px',
    borderBottom: takeIf(
      showBorder,
      `2px solid ${hex2rgba(palette.skeColor.blue, 0.25)}`
    ),
    transition: 'border-color .5s',
    selectors: {
      ':hover': {
        color: palette.skeColor.darkBlue,
        borderBottom: '2px solid ' + palette.skeColor.darkBlue,
      },
      ':focus': {
        color: palette.skeColor.darkBlue,
        borderBottom: '2px solid ' + palette.skeColor.darkBlue,
        backgroundColor: palette.skeColor.lightBlue,
        outline: 'none',
      },
    },
  };
};

export const getClassNames = function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyles([
    {
      displayName: 'SkeTypography',
      selectors: {
        h1: getH1Style(props, palette),
        h2: getH2Style(props, palette),
        h3: getH3Style(props, palette),
        h4: getH4Style(props, palette),
        p: getPStyle(props, palette),
        ul: getUlStyle(props, palette),
        ol: getOlStyle(props, palette),
        blockquote: getBlockqouteStyle(props, palette),
        a: getAStyle(props, palette),
      },
    },
  ]);
};
