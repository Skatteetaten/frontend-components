export interface ScrollToTopButtonProps {
  /** Tekst som vises sammen med icon som kan trykkes på for å scrolle til toppen */
  label?: string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Overstyring av stiler */
  customClassNames?: {
    topContainer: string;
    container: string;
    box: string;
    button: string;
    label: string;
    icon: string;
    iconContainer: string;
  };
  /** Overstyring av bredde/plassering for store skjermbredder*/
  containerMaxWidth?: string;
}

export interface ScrollToTopButtonState {
  skjult: boolean;
}
