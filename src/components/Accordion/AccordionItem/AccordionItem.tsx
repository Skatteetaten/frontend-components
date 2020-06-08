import * as React from 'react';
import classnames from 'classnames';
import Grid from '../../Grid/Grid';
import Icon from '../../Icon/Icon';
import { getClassNames } from '../Accordion.classNames';
import Heading from '../../utils/Heading';

export interface AccordionItemProps {
  id?: string;
  /** Valg for å kunne vise/skjule innhold til et steg med en "vise/skjule" knapp */
  toggleContent?: boolean;
  /** Teksten for vise/skjule knappen for et steg */
  toggleButtonText?: string;
  /** Om et steg skal være default åpen */
  isOpen?: boolean;
  /** Om skal vise spesifisert ikon istedet tall hvis Accordion er en processList  */
  icon?: string;
  /** Tekst som er ønskelig at leses opp for skjermleser om man spesifiserer et ikon */
  ariaLabel?: string;
  /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
  onClick?: (...args: any[]) => any;
  /**   Id som settes i aria-control på vise/skjule knapp som peker på innholdspanelet som knappen styrer */
  stepId?: string;
  /** Tittel til innholdet */
  title?: string;
  /** Om man ønsker at toggleButtonText skal være en del av heading tag-hierarkiet. Verdi 1-6.*/
  headingLevel?: number;
  /** Subtittel som vises i accordionitem */
  subtitle?: string | JSX.Element;
  /** Overstyring av stiler */
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
const ToggleContent: React.FC<ToggleContentInterface> = props => {
  const {
    toggleContent,
    isContentOpen,
    styles,
    toggleButtonText,
    onClick,
    subtitle,
    headingLevel,
    stepId,
    processList
  } = props;

  if (!toggleContent) {
    return null;
  }
  return (
    <button
      className={
        isContentOpen
          ? classnames(styles.toggleButton, styles.toggleButtonOpen)
          : styles.toggleButton
      }
      aria-expanded={isContentOpen}
      onClick={onClick}
      aria-describedby={processList ? 'StepId' + stepId : undefined}
    >
      <div className={styles.toggleButtonContent}>
        <div>
          {headingLevel && toggleButtonText ? (
            <Heading text={toggleButtonText} level={headingLevel} />
          ) : (
            toggleButtonText
          )}
          {subtitle &&
            (typeof subtitle === 'object' ? (
              <div className={styles.subtitle}>{subtitle}</div>
            ) : (
              <p className={styles.subtitle} aria-label={subtitle}>
                {subtitle}
              </p>
            ))}
        </div>
        <Icon iconName={'ChevronDown'} />
      </div>
    </button>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = props => {
  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const toggleVisibility = () => {
    setContentOpen(!isContentOpen);
  };

  const clickHandler = () => {
    const { onClick } = props;
    if (onClick && !isContentOpen) {
      onClick();
    }
    toggleVisibility();
  };

  const styles = getClassNames();
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
    headingLevel
  } = props;

  return (
    <div
      key={stepNumber}
      className={classnames(styles.wrapperStep, className)}
      aria-controls={stepId}
    >
      {processList && stepNumber !== totalSteps && (
        <span className={styles.stepLine} />
      )}
      <Grid.Row rowSpacing={Grid.SPACE_NONE}>
        <Grid.Col>
          <Grid.Row rowSpacing={Grid.SPACE_NONE}>
            {processList && (
              <Grid.Col sm={2} md={1} xl={1}>
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

export default AccordionItem;
