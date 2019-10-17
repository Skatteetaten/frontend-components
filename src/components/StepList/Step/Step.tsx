import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Grid from '../../Grid/Grid';
import Icon from '../../Icon';
import { getClassNames } from '../StepList.classNames';
import { UseScreen } from '../../utils/ScreenPlugin';
// @ts-ignore //TODO
const NumberIcon = props => {
  return (
    <div className={props.styles.numberWrapper}>
      <div className={props.styles.stepNumber}>
        <span>
          {props.stepType === 'result' ? (
            <Icon iconName={props.resultIcon} style={{ fontSize: '24px' }} />
          ) : (
            ''
          )}
        </span>
      </div>
    </div>
  );
};
// @ts-ignore //TODO
const Step = props => {
  const {
    stepTitle,
    stepNumber,
    children,
    stepId,
    resultIcon,
    className,
    stepType
  } = props;
  const [styles, setStyles] = React.useState(getClassNames(props));
  const size = UseScreen();

  React.useEffect(() => {
    setStyles(
      getClassNames({
        ...props,
        showStep: typeof props.showStep === 'boolean' ? props.showStep : true,
        stepType: props.stepType || 'passive'
      })
    );
  }, [props]);

  return (
    <div
      key={stepNumber}
      aria-describedby={stepNumber}
      role="region"
      className={classnames(styles.wrapperStep, className)}
    >
      <Grid.Row rowSpacing={Grid.SPACE_NONE}>
        <Grid.Col>
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col sm={12}>
              {stepNumber > 1 && (
                <span
                  className={classnames({ [styles.stepLineTop]: size.gt.sm })}
                />
              )}
              <span className={classnames({ [styles.stepLine]: size.gt.sm })} />
              {size.gt.sm && stepType !== 'next' && (
                <NumberIcon
                  styles={styles}
                  resultIcon={resultIcon}
                  stepType={stepType}
                />
              )}
              {stepType !== 'result' && (
                <hr className={classnames(styles.divider)} />
              )}

              <div id={stepId}>
                <div className={styles.stepContent}>
                  {stepTitle && (
                    <h2 className={styles.title} aria-label={stepTitle}>
                      {!size.gt.sm && stepType !== 'next' && (
                        <NumberIcon
                          styles={styles}
                          resultIcon={resultIcon}
                          stepType={stepType}
                        />
                      )}
                      <span className={classnames(styles.titleText)}>
                        {stepTitle}
                      </span>
                    </h2>
                  )}
                  <div className={styles.stepContentInner}>{children}</div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
export default Step;

Step.propTypes = {
  /** Overskrift for et steg */
  stepTitle: PropTypes.string,
  /** Benyttes for å definere type steg som skal vises */
  stepType: PropTypes.oneOf(['passive', 'active', 'result', 'next']),
  /** Om et steg skal være synlig eller ikke */
  showStep: PropTypes.bool,
  /**  Id som settes i aria-control på vise/skjule knapp som peker på innholdspanelet som knappen styrer */
  stepId: PropTypes.string,
  /** Ikon som skal vises i resultat steg */
  resultIcon: PropTypes.string,
  /** Mulighet for å legge inn egen klasse for å overstyre stiling */
  className: PropTypes.string
};
