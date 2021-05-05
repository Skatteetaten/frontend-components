import { IDetailsListProps, IColumn as FabricIColumn } from '@fluentui/react';

export interface DetailsListProps extends IDetailsListProps {
  background?: 'white' | 'transparent';
  /**  Konfigurasjon for kolonnenavn og rekkefølge */
  columns?: Array<IColumn>;
  isSorted?: boolean;
  isSortedDescending?: boolean;
  /** Mulighet for å skru av hover-effekt dersom listeelement ikke er klikkbar. Kan ikke kombineres med checkbox */
  noHover?: boolean;
  onSortUpdate?: (...args: any[]) => any;
}

export interface IColumn extends FabricIColumn {
  sortItems?: any;
}
