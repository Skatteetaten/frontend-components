export interface PaginationProps {
  /** Aria-label */
  ariaLabel?: string;
  /** Aria-label for sidelinker */
  ariaLabelNavigationLink?: string;
  /** Aria-label for aktiv sidelink */
  ariaLabelNavigationLinkActive?: string;
  /** CSS class */
  className?: string;
  /** Nåværende sidenummer */
  currentPage: number;
  /** Tekst neste-knapp */
  nextLabel?: string;
  /** Funksjon som trigges på sideendring */
  onPageChange: (page: number) => void;
  /** Antall sidetall som vises samtidig. Default er 3. */
  pagesDisplayed?: number;
  /** Total antall objekter i liste */
  total: number;
  /** Ant objekter som vises per side */
  pageSize: number;
  /** Tekst forrige-knapp */
  previousLabel?: string;
}
