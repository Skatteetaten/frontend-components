import * as React from 'react';
import { Grid } from '../index';
import { getClassNames } from './Accordion.classNames';
import classnames from 'classnames';
import { AccordionItemProps } from '../index';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** aria-label */
  ariaLabel?: string;
  /** Benyttes når man skal ta brukeren gjennom en sekvens av trinnvise steg. */
  children?: React.ReactNode;
  /** Overstyring av stiler */
  className?: string;
  /** Gjør teksten (toggleButtonText-attributtet) i knappen som toggler AccordionItem til en overskrift.
   * Eg. headingLevel = 1 gir \<h1>{toggleButtonText}\</h1>.
   * Verdi 1-6.*/
  headingLevel?: number;
  processList?: boolean;
  stepId?: string;
}

/**
 * @visibleName Accordion (Ekspanderende panel)
 */

export const Accordion: React.FC<AccordionProps> = (props) => {
  const {
    processList,
    stepId,
    className,
    children,
    ariaLabel,
    headingLevel,
  } = props;
  const { accordion } = getClassNames();
  const totalSteps = React.Children.count(children);
  return (
    <div className={classnames(accordion, className)} aria-label={ariaLabel}>
      <Grid>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<AccordionItemProps>(child)) {
            return React.cloneElement(child, {
              stepNumber: index + 1,
              id: stepId && stepId + index + 1,
              totalSteps,
              processList,
              headingLevel: child.props.headingLevel
                ? child.props.headingLevel
                : headingLevel,
            });
          }
        })}
      </Grid>
    </div>
  );
};
