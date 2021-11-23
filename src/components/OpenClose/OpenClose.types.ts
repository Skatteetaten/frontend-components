export interface OpenCloseProps {
  /** If the content aria should be open/visible */
  isOpen?: boolean;
  /** Callback when opened (not when closed) */
  onClick?: (...args: any[]) => any;
  /** Button title  */
  title?: string;
  /** If the title should be a wrapped in a heading tag, value 1-7 .*/
  headingLevel?: number;
  /** By default er ikonet for åpning til venstre. Kan overstyres med iconRight: true. */
  iconRight?: boolean;
  /** Display as a compact version with smaller font size and margins */
  compact?: boolean;
  /** Styling overrides */
  className?: string;
  /** Remove underline  */
  noBorder?: boolean;
  /** Elements that are shown/hidden.*/
  children?: JSX.Element;
}
