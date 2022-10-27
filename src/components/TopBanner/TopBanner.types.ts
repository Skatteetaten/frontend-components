import { ReactNode } from 'react';

export interface TopBannerTypes {
  /** Tittelen på banneren */
  title?: string | JSX.Element;
  /** Teksten som vises ved siden av home-knapp */
  homeText?: string;
  /** URLen på homeknappen */
  homeUrl?: string;
  /** Ikon på intern toppbanner */
  icon?: string;
  /** Om banneren er ment for en intern eller ekstern løsning */
  external?: boolean;
  /** Om banneren skal ta mindre plass vertikalt  */
  compact?: boolean;
  /** Overstyring av stiler */
  className?: string;
  /** Mulighet til å sette bredde på skrått område i toppen (kun intern) */
  slantedAreaWidth?: number | string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Om logoen skal lenke til skatteetaten.no eller ikke (kun ekstern) */
  logoLink?: boolean;
  /** Lenken når man klikker på logoen */
  logoLinkUrl?: string;
  /** OnClick event som trigges av klikk på hjemlink */
  onClick?: () => void;
  /** Språk på logoen */
  language?: 'nb' | 'nn' | 'en' | 'se';
  /** Topstripe */
  topStripe?: JSX.Element;
  slantedAreaClassName?: string;
  children?: ReactNode;
}
