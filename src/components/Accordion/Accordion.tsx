import * as React from 'react';
import { Grid } from '../Grid';
import { getClassNames } from './Accordion.classNames';
import classnames from 'classnames';
import { AccordionItemProps } from './AccordionItem/AccordionItem.types';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** aria-label */
  ariaLabel?: string;
  children?: React.ReactNode;
  /** Custom styling */
  className?: string;
  /** Wraps the text in a heading-tag. Ie. headingLevel = 1 produces \<h1>{toggleButtonText}\</h1>.*/
  headingLevel?: number;
  /** List style with numbers or icons */
  processList?: boolean;
  stepId?: string;
}

/**
 * @visibleName Accordion _Trekkspill_
 */

export const Accordion: React.FC<AccordionProps> = (props) => {
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
  const validChildren = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  );
  const totalSteps = React.Children.count(validChildren);

  return (
    <div
      className={classnames(accordion, className)}
      aria-label={ariaLabel}
      {...htmlAttributes}
    >
      <Grid padding="0px">
        {React.Children.map(validChildren, (child, index) => {
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
