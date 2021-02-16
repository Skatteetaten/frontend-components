import * as React from 'react';
import Grid from '../Grid/Grid';
import { getClassNames } from './Accordion.classNames';
import classnames from 'classnames';
import { AccordionItemProps } from './AccordionItem';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * @visibleName Accordion (Trekkspill)
 */

const Accordion: React.FC<AccordionProps> = props => {
  const {
    processList,
    stepId,
    className,
    children,
    ariaLabel,
    headingLevel,
    ...htmlAttributes
  } = props;
  const { accordion } = getClassNames();
  const validChildren = React.Children.toArray(children).filter(child =>
    React.isValidElement(child)
  );
  const totalSteps = React.Children.count(validChildren);

  return (
    <div
      className={classnames(accordion, className)}
      aria-label={ariaLabel}
      {...htmlAttributes}
    >
      <Grid>
        {React.Children.map(validChildren, (child, index) => {
          if (React.isValidElement<AccordionItemProps>(child)) {
            return React.cloneElement(child, {
              stepNumber: index + 1,
              id: stepId && stepId + index + 1,
              totalSteps,
              processList,
              headingLevel: child.props.headingLevel
                ? child.props.headingLevel
                : headingLevel
            });
          }
        })}
      </Grid>
    </div>
  );
};

export default Accordion;
