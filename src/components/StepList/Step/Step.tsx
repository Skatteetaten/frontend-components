import React from 'react';
import classnames from 'classnames';
import { UseScreen } from '../../utils';
import { ActionButton } from '../../ActionButton';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import { getClassNames } from '../StepList.classNames';
import { Heading } from '../../utils';

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
/*
 * visibleName Step (Enkeltsteg)
 */
export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Change-button for step **/
  actionBtn?: {
    icon?: string;
    event?: () => void;
    text: string;
    ariaLabel?: string;
  };
  /** Title displayed in the step  */
  stepTitle?: string;
  /** Type of step */
  stepType?: 'passive' | 'active' | 'result' | 'next';
  /** If the step is visible or not */
  showStep?: boolean;
  /**  Id uses in aria-controls on show/hide button that points to content panel */
  stepId?: string;
  /** Icon in the result step */
  resultIcon?: string;
  className?: string;
  stepNumber?: number;
  children?: React.ReactElement;
  /** If the step should have an outer grid for alignment to surrounding elements */
  gridSpacing?: boolean;
  /** Set title heading tag-hierarchy. Value 1-6.*/
  headingLevel?: number;
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
    gridSpacing,
    headingLevel = 2,
  } = props;
  const [styles, setStyles] = React.useState(getClassNames(props));
  const size = UseScreen();
  const headingId = stepId ? stepId + '-heading' : undefined;

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
            {gridSpacing && (
              <Grid.Col noSpacing sm={0} lg={1} xxxl={2}></Grid.Col>
            )}

            <Grid.Col
              sm={12}
              lg={gridSpacing ? 10 : undefined}
              xxxl={gridSpacing ? 8 : undefined}
            >
              {stepNumber && stepNumber > 1 && (
                <span className={classnames(styles.stepLineTop)} />
              )}
              <span className={classnames(styles.stepLine)} />
              <span
                className={classnames({
                  [styles.arrowLine]: stepType === 'next',
                })}
              />
              {stepType !== 'next' && (
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
                    <Heading
                      id={headingId}
                      text={stepTitle}
                      level={headingLevel}
                      tabIndex={stepId ? -1 : undefined}
                      className={styles.title}
                    >
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
                    </Heading>
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
            {gridSpacing && (
              <Grid.Col noSpacing sm={0} lg={1} xxxl={2}></Grid.Col>
            )}
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
