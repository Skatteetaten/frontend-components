import * as React from 'react';

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

export interface ToggleContentInterface extends AccordionItemProps {
  isContentOpen: boolean;
  styles: any;
}
