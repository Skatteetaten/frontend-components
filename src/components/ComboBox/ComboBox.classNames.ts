import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { MdIcons } from '../utils/icons/';
import { Animation } from '../utils/getAnimationStyles';
import { PaletteProps } from '..';
// @ts-ignore TODO
function getFieldTypeStyles(props) {
  const palette = getTheme().palette as PaletteProps;

  if (props.inputSize === 'large') {
    return {
      '& .ms-ComboBox': {
        borderWidth: '2px',
        borderRadius: '0px',
        height: '46px',
        padding: '5px 12px',
        borderColor: palette.skeColor.blackAlt
      },
      '& .ms-ComboBox-Input': {
        fontSize: FontSizes.large
      },
      '& button.ms-ComboBox-CaretDown-button': {
        top: '5px'
      },
      'i.ms-Button-icon': {
        fontSize: FontSizes.large
      }
    };
  } else {
    return {
      '& .ms-ComboBox-Input': {
        fontSize: FontSizes.small
      }
    };
  }
}
// @ts-ignore TODO
export const getClassNames = props => {
  const { errorMessage } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;

  return mergeStyles({
    displayName: 'SkeCombobox',
    selectors: {
      '.ms-ComboBox': errorMessage && {
        borderColor: color
      },
      '& .ms-ComboBox': {
        borderRadius: '0px',
        height: '30px',
        padding: '1px 32px 1px 12px',
        borderColor: palette.skeColor.blackAlt
      },
      '& .ms-ComboBox:active, & .ms-ComboBox:focus, & .ms-ComboBox::after, &.is-active.ms-ComboBox, .ms-ComboBox.is-open': {
        border: `2px solid ${palette.skeColor.blue}`
      },
      '& .ms-ComboBox-Input': {
        paddingBottom: '1px',
        paddingTop: '1px'
      },
      '& .ms-ComboBox-Input.is-disabled': {
        backgroundColor: palette.skeColor.whiteGrey
      },
      '& .ms-ComboBox.is-disabled': {
        borderColor: palette.skeColor.grey
      },
      '& .ms-ComboBox.is-disabled button': {
        color: palette.skeColor.grey
      },
      '.ms-ComboBox-CaretDown-button': {
        // Negative positioning to account for the 2px border
        right: '-2px',
        top: '-2px'
      },
      ...getFieldTypeStyles(props)
    }
  });
};
// @ts-ignore TODO
export const getErrorClassNames = props => {
  const { errorMessage } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;
  const errorIcon = "'" + MdIcons.icons.Error + "'";

  return mergeStyles(Animation.errorMessage, {
    displayName: 'SkeComboBoxError',
    color,
    fontSize: FontSizes.small,
    fontWeight: '400',
    paddingTop: '5px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    position: 'relative',
    selectors: {
      '&:before': {
        fontFamily: MdIcons.fontFace.fontFamily,
        fontSize: 18,
        display: 'block',
        content: errorIcon,
        marginRight: 3,
        position: 'absolute',
        top: 5,
        left: 0
      }
    }
  });
};
// @ts-ignore TODO
export const getOptionsClassNames = props => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles({
    displayName: 'SkeComboBoxOptions',
    selectors: {
      '& .ms-ComboBox-option.is-checked': {
        border: '2px solid' + palette.skeColor.blue,
        outline: 'none'
      },
      '& .ms-ComboBox-option.is-checked:after': {
        border: 'none',
        outline: 'none'
      }
    }
  });
};
// @ts-ignore TODO
export const getLabelClassNames = props => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    labelArea: {
      display: 'flex',
      alignItems: 'center'
    },
    label: {
      //flexGrow: 1,
    },
    labelText: {
      fontSize: FontSizes.small,
      color: palette.skeColor.blackAlt,
      fontWeight: FontWeights.regular
    },
    labelIconArea: {
      height: '27px',
      marginTop: '-5px'
    },
    icon: {
      color: palette.skeColor.blue,
      selectors: {
        '& i': {
          fontSize: 'large'
        },
        '&:focus&:after': {
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none'
        },
        '&:focus::after': {
          border: `2px solid ${palette.skeColor.blue}`,
          outline: 'none'
        },
        '&:hover': {
          border: palette.skeColor.blackAlt,
          outline: 'none',
          background: 'none'
        }
      }
    }
  });
};
