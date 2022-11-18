import { ReactNode } from 'react';

export interface TypographyProps {
  /** Mulighet for egen overstyring av css */
  className?: string;
  /** Tar bort definisjon av marg for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
  noMargin?: string[];
  /** Tar bort definisjon av farge for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
  noColor?: string[];
  /** Tar bort definisjon av fontstørrelse for spesifikke tagger
   * ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote')
   */
  noSize?: string[];
  /** Tar bort definisjon av ramme for spesifikke tagger ('a') */
  noBorder?: string[];
  children?: ReactNode;
}
