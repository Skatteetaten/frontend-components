import { ButtonProps } from '../Button';
import { ReactNode } from 'react';

export interface ActionButtonProps extends ButtonProps {
  /** Ikon som skal vises foran lenketeksten */
  icon?: string;
  /** Ikon størrelse, to tilgjengelige størrelser */
  iconSize?: any;
  /** Fire forhåndsdefinerte farger, se eksempler */
  color?: 'blue' | 'black' | 'red' | 'green' | 'white';
  /**  true hvis ikonet skal plasseres etter tekst, ellers rendres det foran. */
  iconAfter?: boolean;
  /** Om knappen skal ha strek under */
  border?: boolean;
  ariaLabel?: string;
  children?: ReactNode;
}
