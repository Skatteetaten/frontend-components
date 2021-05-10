export interface ErrorMessageProps {
  /** Feilmelding */
  children: JSX.Element | string;
  showError?: boolean;
  /** Overstyring av stiler */
  className?: string;
}
