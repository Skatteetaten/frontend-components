export interface AccordionMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  /** aria-label */
  ariaLabel?: string;
  /** Use flex */
  flex?: boolean;
  children?: React.ReactNode;
}
