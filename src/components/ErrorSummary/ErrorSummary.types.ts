import { ReactNode } from 'react';

export interface ErrorSummaryProps {
  /** Id */
  id?: string;
  /** Mulighet til å angi egenspesifisert element utenfor Document som ErrorSummary skal peke til*/
  shadowRootNode?: Document | ShadowRoot;
  /** Tittel */
  title: string;
  /** Tag name for title i.e h2, h3 */
  titleTagName?: keyof JSX.IntrinsicElements;
  /** Overstyring av stiler */
  className?: string;
  /** Feil */
  errors?: { id: string; error: string }[];
  /** Egendefinert funksjon som kjører istedenfor scrollToId */
  onClick?: (id: string) => void;
  children?: ReactNode;
}
