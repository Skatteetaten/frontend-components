import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';
import { ComboboxProps } from './ComboBox';

function getFieldTypeStyles(props: ComboboxProps) {
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

export const getClassNames = (props: ComboboxProps) => {
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
        borderColor: errorMessage
          ? palette.skeColor.error
          : palette.skeColor.blackAlt
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

export const getOptionsClassNames = (props: ComboboxProps) => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles({
    displayName: 'SkeComboBoxOptions',
    selectors: {
      '& .ms-ComboBox-option': {
        border: `2px solid ${palette.skeColor.transparent}`,
        selectors: {
          ':hover': {
            background: palette.skeColor.lightBlue,
            textDecoration: 'underline'
          }
        }
      },
      '& .ms-ComboBox-option.is-checked': {
        //border: '2px solid' + palette.skeColor.blue,
        background: palette.skeColor.lightBlue,
        textDecoration: 'underline',
        outline: 'none',
        selectors: {
          ':active': {
            background: `${palette.skeColor.lightBlue} !important`,
            border: `2px solid ${palette.skeColor.blue}`,
            textDecoration: 'none'
          }
        }
      },
      '& .ms-ComboBox-option.is-checked:after': {
        border: 'none',
        outline: 'none'
      }
    }
  });
};

export const getLabelClassNames = (props: ComboboxProps) => {
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
