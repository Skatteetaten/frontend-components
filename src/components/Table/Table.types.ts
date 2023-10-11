import React from 'react';
import { RowCustomClassNames } from './TableRow';
import { Language } from '../utils/Language';

export interface RowData {
  hideExpand?: boolean;
  hideEdit?: boolean;
  hideSeparator?: boolean;
  customClassNames?: RowCustomClassNames;
}

export interface TableProps<P> extends React.HTMLAttributes<HTMLDivElement> {
  /** Global attribute which must be unique for the whole HTML document*/
  id?: string;
  /** Custom classNames for å overskrive styling */
  customClassNames?: {
    wrapper?: string;
    table?: string;
    caption?: string;
    tabellThead?: string;
    tabellTheadRow?: string;
  };
  /** Content elements in the table */
  data: P[];
  /**  Allows you to edit rows in the table.
   *  Use a boolean for if all the rows should be editable.
   *  If only a subset of the rows should be editable, use an array of indexes of the rows. NOTE: not compatiable with sorting
   * */
  editableRows?: boolean | Array<number>;
  /** Placement of expansion button in the table, the default is 'after' */
  expandIconPlacement?: 'after' | 'before';
  /** Allows you to expand a row */
  expandableRows?: boolean;
  /**  Index for the row that is to be expanded in edit mode */
  openExpandableRowIndex?: number;
  /** Called when opening or closing a row, if you want to control the 'openExpandableRowIndex' state from the outside.
   * In the case of 'undefined', the component controls this itself.
   */
  setOpenExpandableRowIndex?: (index?: number) => void;
  /** Whether the table should be in full width (100%) or not */
  fullWidth?: boolean;
  /**  Index for the row that is to be opened in edit mode */
  openEditableRowIndex?: number;
  /** Open edit mode by clicking anywhere on the row */
  openEditableOnRowClick?: boolean;
  /** Called when opening or closing a row, if you want to control the 'openEditableRowIndex' state from the outside.
   * In the case of 'undefined', the component controls this itself.
   */
  setOpenEditableRowIndex?: (index?: number) => void;
  /**  Content to be displayed when a row is in edit mode */
  editableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  /** Content to be displayed when a row is in expansion mode */
  expandableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  /**  Configuration for column name and order*/
  columns?: {
    /** Column name */
    name: string | JSX.Element;
    /** Object key */
    fieldName: string;
    /** Override the left alignment inside the cell: 'right' or 'center'. */
    alignment?: 'right' | 'center';
    /** User can sort the coumln alphabetically and by numbers (but not by numbers that are strings) */
    sortable?: boolean;
    /** Do not show the column on mobile (breakpoint at 640px) */
    hideOnMobile?: boolean;
    /** Override the sort function */
    sortingFunction?: (...args: any[]) => any;
    /** Override the format function */
    formatFunction?: (content: any) => string | JSX.Element;
    /** Show the sorting icon only at hover on column (it is always displayed for mobile) Default true,
     * set false if you want the sorting icon to always be displayed
     */
    autohideSorting?: boolean;
    /** Read column name only for screen reader */
    srOnly?: boolean;
  }[];
  /** Language selection for what the screen reader reads out. Default is Norwegian Bokmål */
  language?: Language;
  /** Show separators between rows
   *  Use a boolean for if all the rows should have seperators.
   *  If only a subset of the rows should have seperators, use an array of indexes of the rows. NOTE: not compatiable with sorting
   * */
  showRowSeparators?: boolean;
  /** Reduce font size and height on rows for a more compact table */
  compactTable?: boolean;
  /** Table caption */
  caption: React.ReactNode;
  /** Ability to hide caption visually, but still being detectable for screen readers */
  hideCaption?: boolean;
  /** Show sum at the end of the Table. Colspan signifies the rows of columns the sum should take up. */
  sum?: { text: string; colspan: number; total: number | string };
}
