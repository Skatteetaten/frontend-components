import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { FontSizes, PaletteProps } from '../utils';
import { SearchFieldProps } from './SearchField.types';

export const getClassNames = (props: SearchFieldProps) => {
  const palette = getTheme().palette as PaletteProps;
  const { border, searchFieldSize, onSearchIcon } = props;
  const largeSize = searchFieldSize === 'large';
  const standardSize = searchFieldSize === 'standard';

  return mergeStyleSets({
    //@ts-ignore
    blackAlt: {
      color: `${palette.skeColor.blackAlt} !important`,
    },
    hiddenUl: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      whiteSpace: 'nowrap',
      border: 0,
    },
    searchList: {
      listStyleType: 'none !important',
      padding: '0px',
      marginTop: '0px',
      marginBottom: '11px',
      border: `1px solid ${palette.skeColor.black}`,
    },
    searchListDropdown: {
      top: '-1px',
      borderTop: 0,
      position: 'relative',
      selectors: {
        ul: {
          margin: 0,
          position: 'absolute',
          left: 0,
          top: '100%',
          width: '99.5%',
          zIndex: 10,
        },
        li: {
          background: palette.skeColor.white,
          cursor: 'pointer',
          color: palette.skeColor.blackAlt,
          padding: '3px 9px 3px 9px',
          selectors: {
            ':hover': {
              background: palette.skeColor.lightBlue,
              textDecoration: 'underline',
            },
            ':active': {
              background: palette.skeColor.lightBlue,
              textDecoration: 'none',
            },
            ':focus': {
              background: palette.skeColor.lightBlue,
              textDecoration: 'underline',
            },
          },
        },
      },
    },
    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      whiteSpace: 'nowrap',
      border: 0,
    },
    main: {
      displayName: 'SkeSearchField',
      selectors: {
        '&.ms-SearchBox': {
          borderRadius: '0px',
          height: largeSize ? 48 : 32,
          border:
            border === 'slim'
              ? `1px solid ${palette.skeColor.black}`
              : `2px solid ${palette.skeColor.black}`,
          position: 'relative',
          fontSize: largeSize ? FontSizes.large : FontSizes.medium,
        },
        '&.is-disabled.ms-SearchBox': {
          borderColor: palette.skeColor.lightGrey,
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: palette.skeColor.neutralGrey,
        },
        '&.is-active.ms-SearchBox': {
          border: `1px solid ${palette.skeColor.blue}`,
          outline: 'none',
          boxSizing: 'border-box',
          selectors: {
            '.ms-SearchBox-field': {
              padding:
                border === 'slim' ? '5px 25px 5px 5px' : '5px 25px 5px 6px',
            },
            '.ms-SearchBox-iconContainer': {
              right: standardSize ? 0 : 1,
              top: standardSize ? 7 : 6,
            },
          },
        },
        '& .ms-SearchBox-field': {
          outline: 'none',
          fontWeight: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          padding: '5px 30px 5px 5px',
        },
        '& .ms-SearchBox-iconContainer': {
          position: 'absolute',
          right: 0,
          top: largeSize ? 5 : 7,
        },
        '& .ms-SearchBox-iconContainer:hover': {
          border: 'none',
        },
        '&.is-disabled.ms-SearchBox i': {
          color: palette.skeColor.darkGrey,
        },
        '&.is-disabled.ms-SearchBox input': {
          cursor: 'not-allowed',
          color: palette.skeColor.blackAlt,
        },

        '& .ms-SearchBox-icon': {
          position: 'absolute',
          color: onSearchIcon
            ? palette.skeColor.blue
            : palette.skeColor.blackAlt,
          right: 10,
          top: largeSize ? 5 : 0,
          border: 'none',
          boxSizing: 'border-box',
          fontSize: largeSize ? FontSizes.xLarge : FontSizes.medium,
          opacity: 1,
          outline: 'none',
          cursor: onSearchIcon ? 'pointer' : 'default',
          selectors: {
            ':hover': {
              background: onSearchIcon && palette.skeColor.lightBlue,
            },
          },
        },
        '& .ms-SearchBox-clearButton': {
          display: 'none',
        },
        '& .ms-Button': {
          display: 'none',
        },
        'input[type=search]': {
          WebkitAppearance: 'textfield',
        },
        'input[type=search]::-webkit-search-cancel-button': {
          WebkitAppearance: 'none',
        },
        'input[type="search"]::-webkit-search-decoration': {
          WebkitAppearance: 'none',
        },
        'input[type=search]::-ms-clear': {
          display: 'none',
          width: 0,
          height: 0,
        },
      },
    },
  });
};
