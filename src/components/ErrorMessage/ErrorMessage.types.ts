export interface ErrorMessageProps {
  /** Overstyring av stiler */
  className?: string;
  /** Dersom feilmeldingen skal vises eller ikke */
  showError?: boolean;
  /** Feilmelding */
  children: JSX.Element | string;
}
