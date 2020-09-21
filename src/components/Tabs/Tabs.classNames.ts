import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontWeights, TabProps, PaletteProps } from '../index';

export const getClassNames = function getClassNames(props: TabProps) {
  const palette = getTheme().palette as PaletteProps;
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
          borderBottom: `3px solid ${palette.skeColor.burgundy}`,
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
          background: palette.skeColor.burgundy,
          fontWeight: FontWeights.regular,
          borderBottom: 'none',
          border: props.border
            ? `2px solid ${palette.skeColor.burgundy}`
            : 'none',
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
