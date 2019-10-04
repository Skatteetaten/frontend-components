import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';

function getBackgroundColor(props) {
  const { palette } = getTheme();

  if (props.background === 'white') {
    return palette.skeColor.white;
  } else {
    return 'none';
  }
}

function getBorderColor(props) {
  const { palette } = getTheme();

  if (props.background === 'white') {
    return palette.skeColor.white;
  } else {
    return palette.skeColor.lightGrey;
  }
}

function getHoverColor(props) {
  const { palette } = getTheme();

  if (props.background === 'white') {
    return palette.skeColor.neutralGrey;
  } else {
    return palette.skeColor.lightGrey;
  }
}

export const getClassNames = (props, col) => {
  const { palette } = getTheme();
  const inset = 0;
  const position = 'relative';
  const radius = '0';

  return mergeStyles({
    outline: 'transparent',
    position,
    background: palette.themePrimary,
    selectors: {
      '::-moz-focus-inner': {
        border: '0'
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-DetailsRow:focus': {
        backgroundColor: palette.themePrimary,
        color: palette.white
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-DetailsRow:focus:after': {
        content: '""',
        position: 'absolute',
        left: inset + 1,
        top: inset + 1,
        bottom: inset + 1,
        right: inset + 1,
        border: '2px solid ' + palette.themePrimary,
        borderRadius: radius,
        outline: 'transparent',
        zIndex: 1
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible & .ms-DetailsHeader-cellTitle:focus:after': {
        content: '""',
        position: 'absolute',
        left: inset + 1,
        top: inset + 1,
        bottom: inset + 1,
        right: inset + 1,
        border: '2px solid ' + palette.themePrimary,
        borderRadius: radius,
        outline: 'transparent',
        zIndex: 1
      },
      '.ms-GroupHeader': {
        background: getBackgroundColor(props),
        selectors: {
          ':hover': {
            background: getHoverColor(props)
          }
        }
      },
      '.ms-GroupHeader .ms-GroupHeader-expand': {
        width: 20,
        height: 20,
        color: palette.blue,
        border: '1px solid ' + palette.blue,
        borderRadius: '50%',
        position: 'relative'
      },
      '.ms-GroupHeader .ms-GroupHeader-expand i': {
        position: 'absolute',
        transformOrigin: 'center center'
      },
      '.ms-DetailsHeader-collapseButton': {
        color: palette.skeColor.blue
      },
      '&.ms-DetailsList': {
        fontSize: FontSizes.medium,
        background: 'none'
      },
      '.ms-GroupHeader-title': {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.semibold
      },
      '& .ms-DetailsHeader-cell [data-icon-name="SortDown"], & .ms-DetailsHeader-cell [data-icon-name="SortUp"]': {
        fontSize: FontSizes.icon,
        color: palette.skeColor.blue
      },
      '& .ms-DetailsHeader-cell': {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.semibold,
        minHeight: 32,
        selectors: {
          ':hover': {
            background: getHoverColor(props)
          }
        }
      },
      '.ms-List-cell': {
        minHeight: 32 // + 2px border
      },
      //row
      '& .ms-FocusZone.ms-DetailsHeader': {
        paddingBottom: 0,
        borderBottom: '2px solid' + getBorderColor(props),
        background: getBackgroundColor(props)
      },
      '& .ms-FocusZone.ms-DetailsRow': {
        minHeight: 26,
        borderBottom: '2px solid' + getBorderColor(props),
        background: getBackgroundColor(props),
        selectors: {
          ':hover': {
            background: getHoverColor(props)
          },
          '& .is-selected': {
            background: palette.neutralQuaternaryAlt
          }
        }
      },
      //cell
      '& .ms-DetailsRow-cell': {
        fontSize: FontSizes.medium,
        padding: '8px',
        minHeight: '32px',
        selectors: {
          '& .ms-DetailsRow-cellCheck': {
            padding: 0
          }
        }
      },
      '& .ms-DetailsRow.is-selected': {
        background: palette.skeColor.neutralQuaternaryAlt
      },
      '& .ms-FocusZone .ms-DetailsRow.is-selected': {
        background: palette.skeColor.neutralQuaternaryAlt
      },
      // hack to overrride checkbox style used in Fabric detaillist
      '& .ms-DetailsRow-check': {
        height: 32,
        width: 32,
        selectors: {
          '.ms-Check': {
            width: 20,
            height: 20
          },
          '.ms-Check:before, .ms-Check.is-checked:before': {
            background: 'none',
            borderRadius: 0,
            width: 20,
            height: 20
          },
          '.ms-Check.is-checked:before': {
            background: palette.blue
          },
          '.ms-Check-circle': {
            fontFamily: 'none',
            fontSize: 0,
            height: 20,
            width: 20,
            border: '1px solid #000'
          },
          '.ms-Check-check': {
            margin: '3px 0 0 1px'
          },
          '.ms-Check-check:hover': {
            opacity: 0,
            cursor: 'pointer'
          },
          '.ms-Check.is-checked .ms-Check-check:hover': {
            opacity: 1
          }
        }
      }
    }
  });
};
