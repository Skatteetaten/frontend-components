import * as React from 'react';
import classnames from 'classnames';
import { Grid, Icon, Heading } from '../../index';
import { getClassNames } from '../Accordion.classNames';

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  /** Option to enable show/hide the content of a step with a show/hide button */
  toggleContent?: boolean;
  /** Text on the how/hide button for a step */
  toggleButtonText?: string;
  /** If a step should be open by default */
  isOpen?: boolean;
  /** Option to display a specified icon instead of numbers if Accordion is a processList  */
  icon?: string;
  /** Text on a specified Icon */
  ariaLabel?: string;
  /** Provide further action when the user opens or closes the AccordionItem  */
  onChange?: (...args: any[]) => any;
  /** Provide further action when a user opens the step. Only callable when the step is being opened, not on close */
  onClick?: (...args: any[]) => any;
  /** ID applied to the show/hide button that points to the cotent panel that the button controls */
  stepId?: string;
  /** Content title */
  title?: string;
  /** Adds toggleButtonText to the heading tag-hierarchy. Value 1-6.*/
  headingLevel?: number;
  /** Subtitle shown in accordionitem */
  subtitle?: string | JSX.Element;
  /** Override styles */
  className?: string;
  stepNumber?: number;
  totalSteps?: number;
  processList?: boolean;
  children?: JSX.Element;
}

interface ToggleContentInterface extends AccordionItemProps {
  isContentOpen: boolean;
  styles: any;
}

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
          {subtitle &&
            (typeof subtitle === 'object' ? (
              <span className={styles.subtitle}>{subtitle}</span>
            ) : (
              <span className={styles.subtitle} aria-label={subtitle}>
                {subtitle}
              </span>
            ))}
        </span>
        <Icon iconName={'ChevronDown'} />
      </span>
    </button>
  );
};

/**
 * @visibleName AccordionItem (Rad i trekkspill)
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
                    aria-label={ariaLabel ? ariaLabel : 'Steg ' + stepNumber}
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
