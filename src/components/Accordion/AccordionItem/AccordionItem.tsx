import * as React from 'react';
import classnames from 'classnames';
import { Heading } from '../../utils';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import { getClassNames } from '../Accordion.classNames';
import {
  AccordionItemProps,
  ToggleContentInterface,
} from './AccordionItem.types';
import { t } from 'i18next';

const ToggleContent: React.FC<ToggleContentInterface> = (props) => {
  const {
    toggleContent,
    isContentOpen,
    styles,
    toggleButtonText,
    onClick,
    subtitle,
    headingLevel,
    stepId,
    processList,
  } = props;

  if (!toggleContent) {
    return null;
  }
  return (
    <button
      className={
        isContentOpen
          ? classnames.default(styles.toggleButton, styles.toggleButtonOpen)
          : styles.toggleButton
      }
      aria-expanded={isContentOpen}
      onClick={onClick}
      aria-describedby={processList ? 'StepId' + stepId : undefined}
    >
      <span className={styles.toggleButtonContent}>
        <span>
          {headingLevel && toggleButtonText ? (
            <Heading text={toggleButtonText} level={headingLevel} />
          ) : (
            <span>{toggleButtonText}</span>
          )}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </span>
        <Icon iconName={'ChevronDown'} />
      </span>
    </button>
  );
};

/*
 * visibleName AccordionItem (Rad i trekkspill)
 */
export const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const toggleVisibility = () => {
    setContentOpen(!isContentOpen);
  };

  const {
    title,
    subtitle,
    toggleContent,
    toggleButtonText,
    stepNumber,
    className,
    icon,
    ariaLabel,
    children,
    totalSteps,
    stepId,
    processList,
    headingLevel,
    id,
    isOpen,
    onChange,
    onClick,
    ...htmlAttributes
  } = props;

  const clickHandler = () => {
    if (onChange) {
      onChange();
    }
    if (onClick && !isContentOpen) {
      onClick();
    }
    toggleVisibility();
  };

  const styles = getClassNames();

  return (
    <div
      key={stepNumber}
      className={classnames(styles.wrapperStep, className)}
      {...htmlAttributes}
    >
      {processList && stepNumber !== totalSteps && (
        <span className={styles.stepLine} />
      )}
      <Grid.Row rowSpacing={Grid.SPACE_NONE}>
        <Grid.Col noSpacing>
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            {processList && (
              <Grid.Col noSpacing sm={2} md={1} xl={1}>
                <div className={styles.stepNumber}>
                  <span
                    id={'StepId' + stepId}
                    aria-label={
                      ariaLabel
                        ? ariaLabel
                        : t('accordionItem.step') + ' ' + stepNumber
                    }
                  >
                    {icon ? <Icon iconName={icon} /> : stepNumber}
                  </span>
                </div>
              </Grid.Col>
            )}
            <Grid.Col
              noSpacing
              sm={processList ? 9 : 12}
              md={processList ? 10 : 12}
              xl={processList ? 11 : 12}
            >
              <hr />
              <ToggleContent
                styles={styles}
                toggleContent={toggleContent}
                toggleButtonText={toggleButtonText}
                stepId={stepId}
                isContentOpen={isContentOpen}
                subtitle={subtitle}
                onClick={clickHandler}
                headingLevel={headingLevel}
                processList={processList}
              />
              {(isContentOpen || !toggleContent) && (
                <div className={styles.content} id={stepId}>
                  {headingLevel && title ? (
                    headingLevel <= 5 ? (
                      <Heading text={title} level={headingLevel + 1} />
                    ) : (
                      { title }
                    )
                  ) : title ? (
                    <h2 className={styles.heading}>{title}</h2>
                  ) : (
                    ''
                  )}
                  {children}
                </div>
              )}
              {stepNumber === totalSteps && <hr />}
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
