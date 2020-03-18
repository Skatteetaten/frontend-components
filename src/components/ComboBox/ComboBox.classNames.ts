import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';
import { ComboboxProps } from './ComboBox';

function getFieldTypeStyles(props: ComboboxProps) {
  const { errorMessage } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;

  if (props.inputSize === 'large') {
    return {
      '& .ms-ComboBox': {
        borderWidth: '2px',
        borderRadius: '0px',
        height: '46px',
        padding: '5px 12px',
        borderColor: palette.skeColor.blackAlt
      },
      '& .ms-ComboBox:after': {
        borderRadius: '0px',
        borderWidth: '2px',
        borderColor: errorMessage && color
      },
      '& .ms-ComboBox:focus': {
        borderColor: `${palette.skeColor.blue} !important`
      },
      '& .ms-ComboBox-Input': {
        fontSize: FontSizes.large
      },
      'i.ms-Button-icon': {
        fontSize: FontSizes.large
      }
    };
  } else {
    return {
      '& .ms-ComboBox-Input': {
        fontSize: FontSizes.medium
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
      '& .ms-ComboBox': {
        borderRadius: '0px',
        height: '30px',
        padding: '0px 32px 1px 8px'
      },
      '& .ms-ComboBox:after': {
        borderRadius: '0px',
        borderColor: errorMessage && color
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
        right: '0',
        top: '0'
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
      },
      '& .ms-ComboBox-optionText': {
        whiteSpace: 'normal !important'
      },
      'button.ms-ComboBox-option': {
        marginTop: '4px',
        marginBottom: '4px'
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
