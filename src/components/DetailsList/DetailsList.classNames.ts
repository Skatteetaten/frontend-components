import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import {
  FontSizes,
  FontWeights,
  PaletteProps,
  DetailsListProps,
} from '../index';

function getBackgroundColor(props: DetailsListProps) {
  const palette = getTheme().palette as PaletteProps;

  if (props.background === 'white') {
    return palette.skeColor.white;
  } else {
    return 'none';
  }
}

function getHoverColor(props: DetailsListProps) {
  const palette = getTheme().palette as PaletteProps;
  return palette.skeColor.lightBlue;
}

export const getClassNames = (props: DetailsListProps) => {
  const palette = getTheme().palette as PaletteProps;
  const inset = 0;
  const position = 'relative';
  const radius = '0';
  const noHover = props.noHover && props.checkboxVisibility === 2;

  return mergeStyles({
    outline: 'transparent',
    position,
    background: palette.themePrimary,
    selectors: {
      '::-moz-focus-inner': {
        border: '0',
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-DetailsRow:focus': {
        backgroundColor: palette.themePrimary,
        color: palette.white,
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-DetailsRow:focus:after': {
        border: '2px solid ' + palette.themePrimary,
        borderRadius: radius,
        bottom: inset + 1,
        content: '""',
        left: inset + 1,
        outline: 'transparent',
        position: 'absolute',
        right: inset + 1,
        top: inset + 1,
        zIndex: 1,
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-DetailsHeader-cellTitle:focus:after': {
        border: '2px solid ' + palette.themePrimary,
        borderRadius: radius,
        bottom: inset + 1,
        content: '""',
        left: inset + 1,
        outline: 'transparent',
        position: 'absolute',
        right: inset + 1,
        top: inset + 1,
        zIndex: 1,
      },
      '.ms-GroupHeader': {
        background: getBackgroundColor(props),
      },
      '.ms-GroupHeader .ms-GroupHeader-expand': {
        width: 20,
        height: 20,
        color: palette.skeColor.blue,
        border: '2px solid ' + palette.skeColor.blue,
        borderRadius: '50%',
        position: 'relative',
        margin: 9,
      },
      '.ms-GroupHeader .ms-GroupHeader-expand i': {
        position: 'absolute',
        transformOrigin: 'center center',
        fontWeight: FontWeights.bold,
      },
      '.ms-DetailsHeader-collapseButton': {
        color: palette.skeColor.blue,
      },
      '&.ms-DetailsList': {
        background: 'none',
        fontSize: FontSizes.medium,
      },
      '.ms-GroupHeader-title': {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.semibold,
        paddingLeft: '6px',
      },
      '& .ms-DetailsHeader-cell [data-icon-name="SortDown"], & .ms-DetailsHeader-cell [data-icon-name="SortUp"]': {
        color: palette.skeColor.blue,
        fontSize: FontSizes.icon,
      },
      '& .ms-DetailsHeader-cell': {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.semibold,
        minHeight: 32,
        selectors: {
          ':hover': {
            background: noHover ? 'none' : getHoverColor(props),
          },
        },
      },
      '& .ms-DetailsHeader-cellTitle': {
        paddingLeft: '8px',
      },
      '.ms-List-cell': {
        minHeight: 32, // + 2px border
        borderBottom: '1px solid' + palette.skeColor.lightGrey,
      },
      //row
      '& .ms-FocusZone.ms-DetailsHeader': {
        paddingBottom: 0,
        borderBottom: '2px solid' + palette.skeColor.black,
        background: getBackgroundColor(props),
      },
      '& .ms-FocusZone.ms-DetailsRow': {
        minHeight: 26,
        background: getBackgroundColor(props),
        selectors: {
          ':hover': {
            background: noHover ? 'none' : getHoverColor(props),
            color: noHover ? 'rgba(55, 55, 55, 0.95)' : 'inherit',
          },
          '& .is-selected': {
            background: palette.neutralQuaternaryAlt,
          },
        },
      },
      //cell
      '& .ms-DetailsRow-cell': {
        fontSize: FontSizes.medium,
        minHeight: '32px',
        padding: '8px',
        selectors: {
          '& .ms-DetailsRow-cellCheck': {
            padding: 0,
          },
          ':hover': {
            textDecoration: noHover ? 'none' : 'underline',
          },
        },
      },
      '& .ms-DetailsRow.is-selected': {
        // @ts-ignore todo finnes ikke?
        background: palette.skeColor.neutralQuaternaryAlt,
      },
      '& .ms-FocusZone .ms-DetailsRow.is-selected': {
        // @ts-ignore todo finnes ikke?
        background: palette.skeColor.neutralQuaternaryAlt,
      },
      // hack to overrride checkbox style used in Fabric detaillist
      '& .ms-DetailsRow-check': {
        height: 32,
        width: 32,
        selectors: {
          '.ms-Check': {
            width: 20,
            height: 20,
          },
          '.ms-Check:before, .ms-Check.is-checked:before': {
            background: 'none',
            borderRadius: 0,
            width: 20,
            height: 20,
          },
          '.ms-Check.is-checked:before': {
            background: palette.skeColor.blue,
          },
          '.ms-Check-circle': {
            fontFamily: 'none',
            fontSize: 0,
            height: 20,
            width: 20,
            border: '1px solid #000',
          },
          '.ms-Check-check': {
            margin: '3px 0 0 1px',
          },
          '.ms-Check-check:hover': {
            opacity: 0,
            cursor: 'pointer',
          },
          '.ms-Check.is-checked .ms-Check-check:hover': {
            opacity: 1,
          },
        },
      },
    },
  });
};
