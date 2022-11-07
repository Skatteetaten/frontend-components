import { ContentProps } from './NavigationContent';
import { ReactNode } from 'react';

export interface NavigationTileProps {
  /**
   * (to: String, content: JSXElement) => JSXElement
   */
  contents?: ContentProps[];
  /** Type av NavigationTile, default er sentrert */
  type?: 'center' | 'left';
  /** Ikon plassering, default er sentrert */
  alignIcon?: 'center' | 'right';
  /** Tittel plassering, default er sentrert  */
  alignTitle?: 'center' | 'left';
  /** Beskrivelse plassering, default er sentrert */
  alignDescription?: 'center' | 'left';
  className?: string;
  /** aria-label */
  ariaLabel?: string;
  /** Hver title som sendes inn rendres som en h2. Hvis dette ikke passer inn i din sidestruktur, kan nivå på headingen overskrives.
   * Velg _headingLevel_ 3 f.eks. om ønsker \<h3\>-tag, velg false om _title_ ikke skal få heading-tag i det hele tatt, men rendres som vanlig tekst. */
  headingLevel?: number | boolean;
  /** Hvis NavigationTile brukes til noe utover det primære bruksområde (som er navigasjon videre nedover i sidestrukturen), bør det vurderes
   * om hver tile bør rendres som en knapp. Se avsnitt om universell utforming under.*/
  useButtons?: boolean;
  children?: ReactNode;
}
