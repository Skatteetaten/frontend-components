import * as React from 'react';

export enum CardColor {
  GREY = 'grey10',
  GREEN = 'green10',
  BEIGE = 'brown10',
  WHITE = 'white',
  RED = 'burgundy10',
}

export enum CardBorder {
  GREEN_BORDER = 'green50',
  RED_BORDER = 'burgundy50',
  YELLOW_BORDER = 'brown50',
  GREY_BORDER = 'grey50',
  WHITE_BORDER = 'white',
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Teksten som vises i kortet */
  title?: string;
  /** tagName for kort-tittel */
  titleTagName?: keyof JSX.IntrinsicElements;
  /** Subtittel som vises i kortet */
  subtitle?: string;
  /** Fontstørrelse på tittel */
  titlesize?: 'large' | 'x-large' | 'xx-large';
  /** Om kortet skal kunne utvides eller ikke */
  expand?: boolean;
  /** Om kortet er utvidet eller ikke */
  isExpanded?: boolean;
  /** Det finnes følgende bakgrunnfarger: grå, grønn, rød, beige eller hvit */
  color?:
    | CardColor.BEIGE
    | CardColor.GREEN
    | CardColor.WHITE
    | CardColor.RED
    | CardColor.GREY;
  /** Ramme rundt kortet */
  border?:
    | CardBorder.WHITE_BORDER
    | CardBorder.GREEN_BORDER
    | CardBorder.YELLOW_BORDER
    | CardBorder.RED_BORDER
    | CardBorder.GREY_BORDER;
  /** Avstand under kortet */
  marginbottom?: string;
  /** Luft over og under kortet */
  margin?: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
  /** Callback som kjøres når man åpner eller lukker kortet */
  onChange?: (...args: any[]) => any;
  /** Global attributt som må være unik for hele HTML dokumentet */
  className?: string;
  /** Call back som kjøres når man åpner/lukker tittel */
  id?: string;
  /** onClick */
  onClick?: () => void;
  /** aria-label */
  ariaLabel?: string;
  /** Button type (ex. submit, reset, button). Default is 'button' */
  buttonType?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export interface CardState {
  isExpandedState: boolean;
}
