import { ButtonProps } from '../Button';

export interface ActionButtonProps extends ButtonProps {
  /** Ikon som skal vises foran lenketeksten */
  icon?: string;
  /** Ikon størrelse, to tilgjengelige størrelser */
  iconSize?: any;
  /** Fire forhåndsdefinerte farger, se eksempler */
  color?: 'blue' | 'black' | 'red' | 'green' | 'white';
  /**  true hvis ikonet skal plasseres etter tekst, ellers rendres det foran. */
  iconAfter?: boolean;
  /** Om strek under knappen skal skjules */
  hideBorder?: boolean;
  ariaLabel?: string;
}
