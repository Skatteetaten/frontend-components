import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '..';
import { MdIcons } from '../utils/icons/';
import { PaletteProps } from '..';

// @ts-ignore TODO
const getStepContentPadding = stepType => {
  if (stepType === 'next') {
    return '10px 0';
  } else if (stepType === 'result') {
    return '20px 0';
  } else {
    return '0';
  }
};
// @ts-ignore TODO
const getStepContentInner = (stepType, activeStep, palette) => {
  if (stepType !== 'result') {
    return {
      display: activeStep ? 'block' : 'flex',
      width: '100%',
      margin: '0 0 15px 0',
      selectors: stepType !== 'next' && {
        button: {
          position: 'absolute',
          right: 0,
          bottom: 0
        }
      }
    };
  } else {
    return {
      selectors: {
        '@media  only screen and (max-width: 479px)': stepType === 'result' && {
          paddingBottom: '21px',
          borderBottom: `2px solid ${palette.skeColor.green}`
        }
      }
    };
  }
};
// @ts-ignore TODO
export const getClassNames = props => {
  const palette = getTheme().palette as PaletteProps;
  const arrowIcon = "'" + MdIcons.icons.Back + "'";
  // @ts-ignore TODO
  return mergeStyleSets({
    containerStep: {
      margin: '0 auto'
    },
    content: {
      backgroundColor: palette.skeColor.white,
      padding: '0 0 15px 10px'
    },
    divider: {
      margin: '0 0 0 26px',
      border: 'solid',
      borderWidth: '1px',
      color: palette.skeColor.lightGrey,
      selectors: {
        '@media  only screen and (max-width: 479px)': {
          margin: 0
        }
      }
    },
    nextStep: {
      display: 'block'
    },
    numberWrapper: {
      paddingTop: props.stepType === 'result' ? '26px' : '10px',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: -8,
      selectors: {
        '@media  only screen and (max-width: 479px)': {
          position: 'relative',
          display: 'inline',
          left: 0,
          paddingTop: '10px'
        }
      }
    },
    stepContent: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: getStepContentPadding(props.stepType),
      margin: props.stepType === 'next' ? '10px 0 0 32px' : '0 0 0 32px',
      selectors: {
        p: {
          margin: '0 0 20px 0'
        },
        '@media only screen and (max-width: 479px)': {
          float: props.stepType !== 'next' && 'left',
          marginLeft: 0,
          padding: props.stepType === 'next' ? '10px 0' : 0
        }
      }
    },
    stepContentInner: getStepContentInner(
      props.stepType,
      props.activeStep,
      palette
    ),
    stepLine: {
      float: 'right',
      width: 2,
      backgroundColor: palette.skeColor.lightGrey,
      position: 'absolute',
      top: 0,
      bottom: 0,
      marginTop: '10px',
      height:
        (props.stepType === 'next' || props.stepType === 'result') && '30px',
      selectors: {
        '&::after': props.stepType === 'next' && {
          fontFamily: MdIcons.fontFace.fontFamily,
          fontSize: FontSizes.xxLarge,
          transform: 'rotate(180deg)',
          display: 'block',
          content: arrowIcon,
          color: palette.skeColor.lightGrey,
          lineHeight: 1,
          marginLeft: '25px',
          marginTop: '28px'
        }
      }
    },
    stepLineTop: {
      float: 'right',
      width: 2,
      height: '10px',
      backgroundColor: palette.skeColor.lightGrey,
      position: 'absolute'
    },
    stepList: {
      counterReset: 'step-counter',
      position: 'relative',
      backgroundColor: palette.skeColor.white,
      marginBottom: 20
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.skeColor.white,
      border: 'solid',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      borderWidth: '2px',
      borderColor: palette.skeColor.black,
      fontSize: FontSizes.large,
      fontWeight: FontWeights.bold,
      selectors: {
        '&::after': {
          content: props.stepType !== 'result' ? 'counter(step-counter)' : '',
          color: '#000'
        },
        i: {
          marginTop: 4
        }
      }
    },
    title: {
      fontSize:
        props.stepType === 'result' ? FontSizes.medium : FontSizes.large,
      color:
        props.stepType === 'result'
          ? palette.skeColor.blackAlt
          : palette.skeColor.blue,
      margin: '8px 0 0',
      flex: '0 0 100%',
      selectors: {
        '@media only screen and (max-width: 479px)': {
          display: 'flex',
          borderTop:
            props.stepType === 'result' && `2px solid ${palette.skeColor.green}`
        }
      }
    },
    titleText: {
      selectors: {
        '@media only screen and (max-width: 479px)': {
          margin: '15px 10px'
        }
      }
    },
    wrapperStep: {
      display: props.showStep ? 'block' : ' none',
      counterIncrement: 'step-counter',
      position: 'relative',
      padding: props.stepType === 'result' ? '0 18px' : '0 20px',
      border:
        props.stepType === 'result'
          ? `2px solid ${palette.skeColor.green}`
          : 'none',
      selectors: {
        '@media  only screen and (max-width: 479px)': {
          border: 'none',
          padding: '0 2px'
        }
      }
    }
  });
};
