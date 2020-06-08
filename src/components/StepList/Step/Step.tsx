import React from 'react';
import classnames from 'classnames';
import { ActionButton, Grid, Icon, UseScreen } from '../../index';
import { getClassNames } from '../StepList.classNames';

const NumberIcon = (props: any) => {
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

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Action Button for endre **/
  actionBtn?: {
    icon?: string;
    event?: () => void;
    text: string;
    ariaLabel?: string;
  };
  /** Overskrift for et steg */
  stepTitle?: string;
  /** Benyttes for å definere type steg som skal vises */
  stepType?: 'passive' | 'active' | 'result' | 'next';
  /** Om et steg skal være synlig eller ikke */
  showStep?: boolean;
  /**  Id som settes i aria-control på vise/skjule knapp som peker på innholdspanelet som knappen styrer */
  stepId?: string;
  /** Ikon som skal vises i resultat steg */
  resultIcon?: string;
  className?: string;
  stepNumber?: number;
  children?: React.ReactElement;
}

export const Step = (props: StepProps) => {
  const {
    stepTitle,
    stepNumber,
    children,
    stepId,
    resultIcon,
    className,
    stepType,
    actionBtn,
  } = props;
  const [styles, setStyles] = React.useState(getClassNames(props));
  const size = UseScreen();

  React.useEffect(() => {
    setStyles(
      getClassNames({
        ...props,
        showStep: typeof props.showStep === 'boolean' ? props.showStep : true,
        stepType: props.stepType || 'passive',
      })
    );
  }, [props]);

  return (
    <div key={stepNumber} className={classnames(styles.wrapperStep, className)}>
      <Grid.Row rowSpacing={Grid.SPACE_NONE}>
        <Grid.Col noSpacing={true}>
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            <Grid.Col sm={12}>
              {stepNumber && stepNumber > 1 && (
                <span className={classnames(styles.stepLineTop)} />
              )}
              <span className={classnames(styles.stepLine)} />
              <span
                className={classnames({
                  [styles.arrowLine]: stepType === 'next',
                })}
              />
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
                    <h2 className={styles.title}>
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
                  <div className={styles.stepContentInner}>
                    {children}
                    {actionBtn && (
                      <ActionButton
                        icon={actionBtn.icon}
                        className={styles.stepAction}
                        onClick={actionBtn.event}
                        ariaLabel={actionBtn.ariaLabel}
                      >
                        {actionBtn.text}
                      </ActionButton>
                    )}
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
