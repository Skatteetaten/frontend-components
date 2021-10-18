import { mergeStyles } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';
import { FontWeights, PaletteProps } from '../utils';
import { TabProps } from './Tabs.types';

export const getClassNames = function getClassNames(props: TabProps, tag) {
  const palette = getTheme().palette as PaletteProps;

  let primaryColor = palette.skeColor.burgundy100;

  switch (tag) {
    case 'INK': {
      primaryColor = palette.skeColor.green100;
      break;
    }
    case 'LSO': {
      primaryColor = palette.skeColor.black100;
      break;
    }
    default: {
      primaryColor = palette.skeColor.burgundy100;
      break;
    }
  }

  return mergeStyles([
    {
      displayName: 'SkeTabs',
      selectors: {
        '& .ms-Pivot-link': {
          border: props.border ? '2px solid rgba(29, 29, 29, 0.62)' : 'none',
          borderBottom: 'none',
          background: palette.skeColor.neutralGrey,
          marginRight: 10,
          display: 'inline-block',
          minWidth: '10%',
          maxWidth: '100%',
          selectors: {
            ':focus': {
              outline: `2px solid ${palette.skeColor.blue} !important`,
            },
            ':hover': {
              background: palette.skeColor.lightBlue,
              color: palette.skeColor.blackAlt,
            },
            ':active': {
              background: palette.skeColor.darkBlue,
              color: palette.skeColor.white,
              border: props.border
                ? `2px solid ${palette.skeColor.darkBlue}`
                : 'none',
            },
          },
        },
        '& .ms-Pivot-linkContent span': {
          textDecoration: props.underline ? 'underline' : 'none',
        },
        '& .ms-Pivot-link .link:focus': {
          outline: 'none',
        },
        '&.ms-Pivot-text .ms-Pivot-count': {
          color: palette.skeColor.black,
        },
        '& .ms-Pivot': {
          borderBottom: `3px solid ${primaryColor}`,
          width: '100%',
          display: 'inline-block',
        },
        // TODO gjør at komponenter blir offset i tableitem
        // '& .ms-Button-flexContainer': {
        //   display: 'block',
        //   justifyContent: 'center',
        //   margin: '0 auto'
        // },
        '& .ms-Pivot-link.is-selected': {
          background: primaryColor,
          fontWeight: FontWeights.regular,
          borderBottom: 'none',
          border: props.border ? `2px solid ${primaryColor}` : 'none',
          selectors: {
            ':before': {
              borderBottom: 'none',
            },
            ':hover': {
              color: palette.skeColor.white,
            },
          },
        },
        '& .ms-Pivot-link.is-selected .ms-Pivot-linkContent span': {
          textDecoration: 'none',
        },
      },
    },
  ]);
};
