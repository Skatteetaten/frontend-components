export interface ErrorSummaryProps {
  /** Overstyring av stiler */
  className?: string;
  /** Feil */
  errors: { id: string; error: string }[];
  /** Id */
  id?: string;
  /** Egendefinert funksjon som kjører istedenfor scrollToId */
  onClick?: (id: string) => void;
  /** Tittel */
  title: string;
  /** Tag name for title i.e h2, h3 */
  titleTagName?: keyof JSX.IntrinsicElements;
}
