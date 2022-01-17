import { ButtonProps } from '../Button';

export interface IconButtonProps extends ButtonProps {
  /** Om sirkel skal vises eller ikke. Sirkel vil typisk benyttes når ikon fra material-design ikke har egen sirkel  */
  circle?: boolean;
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
  /** Beskrivelse av hva knappen gjør (f.eks. til skjermlesere) */
  title?: string;
  /** Gjør knappen til hovedknapp med fylt farge */
  buttonSize?: 'default' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  /**
   * Fjerne Prop
   * @ignore
   */
  buttonStyle?: ButtonProps['buttonStyle'];
}
