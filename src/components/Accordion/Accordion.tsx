import * as React from 'react';
import Grid from '../Grid/Grid';
import { getClassNames } from './Accordion.classNames';
import { AccordionItemProps } from './AccordionItem';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Benyttes når man skal ta brukeren gjennom en sekvens av trinnvise steg. */
  children?: React.ReactNode;
  processList?: boolean;
  stepId?: string;
  /** aria-label */
  ariaLabel?: string;
  /** Gjør teksten (toggleButtonText-attributtet) i knappen som toggler AccordionItem til en overskrift.
   * Eg. headingLevel = 1 gir \<h1>{toggleButtonText}\</h1>.
   * Verdi 1-6.*/
  headingLevel?: number;
}

/**
 * @visibleName Accordion (Ekspanderende panel)
 */

const Accordion: React.FC<AccordionProps> = props => {
  const { processList, stepId, children, ariaLabel, headingLevel} = props;
  const { accordion } = getClassNames();
  const totalSteps = React.Children.count(children);
  return (
    <div className={accordion} aria-label={ariaLabel}>
      <Grid>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<AccordionItemProps>(child)) {
            return React.cloneElement(child, {
              stepNumber: index + 1,
              id: stepId && stepId + index + 1,
              totalSteps,
              processList,
              headingLevel: child.props.headingLevel ? child.props.headingLevel : headingLevel
            });
          }
        })}
      </Grid>
    </div>
  );
};

export default Accordion;
