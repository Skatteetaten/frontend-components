export interface AccordionMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  /** aria-label */
  ariaLabel?: string;
  /** Use flex */
  flex?: boolean;
}
