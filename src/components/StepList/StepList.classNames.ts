import { mergeStyleSets, IStyle } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react';
import { FontSizes, FontWeights, PaletteProps } from '../utils';

const getStepContentPadding = (stepType: string): string => {
  if (stepType === 'next') {
    return '10px 0';
  } else if (stepType === 'result') {
    return '20px 0';
  } else {
    return '0';
  }
};

const getStepContentInner = (
  stepType: string,
  activeStep: boolean,
  palette: PaletteProps
): IStyle => {
  if (stepType !== 'result') {
    return {
      display: activeStep || stepType === 'next' ? 'block' : 'flex',
      width: '100%',
      margin: '0 0 8px 0',
      selectors:
        stepType !== 'next'
          ? {
              button: {
                right: 0,
                bottom: 0,
              },
            }
          : {},
    };
  } else {
    return {
      selectors: {
        '@media  only screen and (max-width: 479px)': stepType === 'result' && {
          paddingBottom: '21px',
          borderBottom: 'none',
          borderTop: 'none',
        },
      },
    };
  }
};

export const getClassNames = (props) => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyleSets({
    arrowLine: {
      float: 'right',
      width: '21px',
      height: '2px',
      backgroundColor: palette.skeColor.lightGrey,
      position: 'absolute',
      bottom: 34,
      selectors: {
        '@media only screen and (max-width: 479px)': {
          top: 35,
          height: '1px',
        },
      },
    },
    containerStep: {
      margin: '0 auto',
    },
    content: {
      backgroundColor: palette.skeColor.white,
      padding: '0 0 15px 10px',
    },
    divider: {
      margin: '0 0 0 26px',
      border: 'solid',
      borderWidth: '1px',
      color: palette.skeColor.lightGrey,
      selectors: {
        '@media  only screen and (max-width: 479px)': {
          margin: '0 0 0 20px',
        },
      },
    },
    nextStep: {
      display: 'block',
    },
    numberWrapper: {
      paddingTop: props.stepType === 'result' ? '26px' : '10px',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: -8,
      selectors: {
        '@media only screen and (max-width: 479px)': {
          left: -4,
          paddingTop: '10px',
        },
      },
    },
    stepAction: {
      marginLeft: 'auto',
      height: 'calc(100% - 21px)',
      selectors: {
        '@media only screen and (max-width: 479px)': {
          position: 'absolute',
          height: 'auto',
          marginBottom: '12px',
        },
      },
    },
    stepContent: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: getStepContentPadding(props.stepType),
      margin: props.stepType === 'next' ? '10px 0 0 32px' : '0 0 0 32px',
      position: 'relative',
      selectors: {
        p: {
          margin: '0 0 20px 0',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              margin: '0',
            },
          },
        },
        button: props.stepType !== 'next' &&
          props.stepType !== 'result' && {
            selectors: {
              '@media only screen and (max-width: 479px)': {
                fontSize: FontSizes.smallPlus,
              },
              i: {
                selectors: {
                  '@media only screen and (max-width: 479px)': {
                    fontSize: 'inherit !important',
                  },
                },
              },
            },
          },
        '@media only screen and (max-width: 479px)': {
          margin: props.stepType === 'next' ? '10px 0 0 26px' : '0 0 0 20px',
          padding: props.stepType === 'result' ? 0 : '0 0 20px 0',
          position: 'initial',
        },
      },
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
      bottom: props.stepType === 'next' ? 34 : 0,
      left: props.stepType === 'result' ? '7px' : undefined,
      marginTop: '10px',
      height: props.stepType === 'result' ? '30px' : undefined,
      selectors: {
        '&::after': props.stepType === 'next' && {
          border: 'solid ' + palette.skeColor.lightGrey,
          borderWidth: '0 2px 2px 0',
          display: 'inline-block',
          padding: '3px',
          transform: 'rotate(-45deg)',
          width: '4px',
          height: '4px',
          content: '""',
          position: 'absolute',
          bottom: '-5px',
          left: '7px',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              borderWidth: '0 1px 1px 0',
              margin: '20px 0 0 10px',
            },
          },
        },
        '@media only screen and (max-width: 479px)': {
          width: '1px',
          height:
            props.stepType === 'next' || props.stepType === 'result'
              ? '25px'
              : undefined,
        },
      },
    },
    stepLineTop: {
      float: 'right',
      width: 2,
      left: props.stepType === 'result' ? '7px' : undefined,
      height: '10px',
      backgroundColor: palette.skeColor.lightGrey,
      position: 'absolute',
      selectors: {
        '@media only screen and (max-width: 479px)': {
          width: 1,
          left: props.stepType === 'result' ? '8px' : undefined,
        },
      },
    },
    stepList: {
      counterReset: 'step-counter',
      position: 'relative',
      backgroundColor: 'transparent',
      marginBottom: 20,
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
          color: '#000',
          selectors: {
            '@media only screen and (max-width: 479px)': {
              fontSize: '0.875rem !important',
            },
          },
        },
        i: {
          marginTop: 1,
          selectors: {
            '@media only screen and (max-width: 479px)': {
              fontSize: '1.25rem !important',
            },
          },
        },
        '@media only screen and (max-width: 479px)': {
          width: '20px',
          height: '20px',
          fontSize: FontSizes.medium,
          marginTop: 1,
        },
      },
    },
    title: {
      fontSize: FontSizes.large,
      color:
        props.stepType === 'result'
          ? palette.skeColor.blackAlt
          : palette.skeColor.blue,
      margin: '0 0',
      marginTop: '8px !important',
      flex: '0 0 100%',
      selectors: {
        '@media only screen and (max-width: 479px)': {
          display: 'flex',
          fontSize: FontSizes.medium,
          margin: props.stepType === 'result' ? 0 : undefined,
          paddingTop: props.stepType === 'result' ? '8px' : '0',
        },
      },
    },
    titleText: {
      selectors: {
        '@media only screen and (max-width: 479px)': {
          fontSize: FontSizes.medium,
          paddingTop: props.stepType === 'result' ? '8px' : '0',
        },
      },
    },
    wrapperStep: {
      display: props.showStep ? 'block' : 'none',
      counterIncrement: 'step-counter',
      position: 'relative',
      padding: props.stepType === 'result' ? '0 17px' : '0 20px',
      border:
        props.stepType === 'result'
          ? `4px solid ${palette.skeColor.green}`
          : 'none',
      selectors: {
        '@media  only screen and (max-width: 479px)': {
          border: '0 none',
          outline:
            props.stepType === 'result'
              ? `4px solid ${palette.skeColor.green}`
              : 'none',
          outlineOffset: props.stepType === 'result' ? '0.75rem' : 'none',
          padding: '0 2px',
        },
      },
    },
  });
};
