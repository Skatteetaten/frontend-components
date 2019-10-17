import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
// @ts-ignore TODO
import includes from 'lodash/includes';
import { PaletteProps } from '..';

const defaultMargin = '16px 0 4px 0';
// @ts-ignore TODO
function hideCSSProp(tag, cssProp) {
  if (typeof cssProp === 'undefined') return false;
  else if (typeof cssProp !== 'object') return false;
  else return !!includes(cssProp, tag);
}
// @ts-ignore TODO
const getTagStyle = (tag, { noMargin, noColor, noSize, noBorder }) => ({
  showMargin: !hideCSSProp(tag, noMargin),
  showColor: !hideCSSProp(tag, noColor),
  showSize: !hideCSSProp(tag, noSize),
  showBorder: !hideCSSProp(tag, noBorder)
});
// @ts-ignore TODO
const getH1Style = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('h1', props);
  return {
    fontSize: showSize && FontSizes.superLarge,
    lineHeight: '48px',
    fontWeight: FontWeights.bold,
    margin: showMargin && '40px 0 8px 0',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.xxLarge,
        margin: showMargin && '32px 0 4px 0',
        lineHeight: '40px'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.xLarge,
        margin: showMargin && '32px 0 4px 0',
        lineHeight: '40px'
      }
    }
  };
};
// @ts-ignore TODO
const getH2Style = (props, palette) => {
  const { showColor, showMargin, showSize } = getTagStyle('h2', props);
  return {
    fontSize: showSize && FontSizes.xxLarge,
    lineHeight: '32px',
    fontWeight: FontWeights.bold,
    margin: showMargin && '32px 0 8px 0',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.xLarge,
        margin: showMargin && defaultMargin,
        lineHeight: '28px'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.large,
        margin: showMargin && defaultMargin,
        lineHeight: '28px'
      }
    }
  };
};
// @ts-ignore TODO
const getH3Style = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('h3', props);
  return {
    fontSize: showSize && FontSizes.xLarge,
    fontWeight: FontWeights.bold,
    margin: showMargin && '24px 0 8px 0',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.largePlus,
        margin: showMargin && defaultMargin
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.large,
        margin: showMargin && defaultMargin
      }
    }
  };
};
// @ts-ignore TODO
const getH4Style = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('h4', props);
  return {
    fontSize: showSize && FontSizes.large,
    fontWeight: FontWeights.bold,
    margin: showMargin && '16px 0 0 0',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.mediumPlus,
        margin: showMargin && '8px 0 0 0'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.medium,
        margin: showMargin && '8px 0 0 0'
      }
    }
  };
};
// @ts-ignore TODO
const getPStyle = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('p', props);
  return {
    fontSize: showSize && FontSizes.medium,
    fontWeight: FontWeights.regular,
    lineHeight: '23px',
    margin: showMargin && '14px 0 0 0',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.smallPlus,
        lineHeight: '22px'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.small,
        lineHeight: '22px'
      }
    }
  };
};
// @ts-ignore TODO
const getUlStyle = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('ul', props);
  return {
    listStyleType: 'square',
    fontSize: showSize && FontSizes.medium,
    margin: showMargin && '16px 0 16px 0',
    lineHeight: '22px',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.smallPlus,
        lineHeight: '22px'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.small,
        lineHeight: '22px'
      }
    }
  };
};
// @ts-ignore TODO
const getOlStyle = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('ol', props);
  return {
    fontSize: showSize && FontSizes.medium,
    margin: showMargin && '16px 0 16px 0',
    lineHeight: '24px',
    color: showColor && palette.skeColor.blackAlt,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.smallPlus,
        lineHeight: '22px'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.small,
        lineHeight: '22px'
      }
    }
  };
};
// @ts-ignore TODO
const getBlockqouteStyle = (props, palette) => {
  const { showSize, showMargin, showColor } = getTagStyle('blockquote', props);
  return {
    fontSize: showSize && FontSizes.medium,
    fontWeight: FontWeights.regular,
    lineHeight: '22px',
    margin: showMargin && '16px 24px',
    padding: '8px 24px',
    color: showColor && palette.skeColor.blackAlt,
    borderLeft: `4px solid ${palette.skeColor.brown}`,
    selectors: {
      '@media (max-width: 640px)': {
        fontSize: showSize && FontSizes.smallPlus,
        lineHeight: '22px'
      },
      '@media (max-width: 480px)': {
        fontSize: showSize && FontSizes.small,
        lineHeight: '22px'
      }
    }
  };
};
// @ts-ignore TODO
const getAStyle = (props, palette) => {
  const { showColor, showBorder } = getTagStyle('a', props);
  return {
    color: showColor && palette.skeColor.blue,
    textDecoration: 'none',
    paddingBottom: '1px',
    borderBottom: showBorder && `2px solid ${palette.skeColor.blue}`,
    transition: 'border-color .5s'
  };
};
// @ts-ignore TODO
export var getClassNames = function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  // @ts-ignore TODO
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
        a: getAStyle(props, palette)
      }
    }
  ]);
};
