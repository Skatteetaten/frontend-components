import classnames from 'classnames';
import React from 'react';
import Icon from '../Icon/Icon';
import { getClassNames } from './Table.classNames';
import TableRow from './TableRow';
import { t } from '../utils/i18n/i18n';
import { useId } from '@reach/auto-id';

export enum Language {
  en = 'en',
  nb = 'nb',
  nn = 'nn'
}

interface TableProps<P> extends React.HTMLAttributes<HTMLDivElement> {
  /** Possibility to enter your own class to override styling */
  className?: string;
  /** Global attribute which must be unique for the whole HTML document*/
  id?: string;
  /** Content elements in the table */
  data: P[];
  /**  Allows you ti edut rows in the table */
  editableRows?: boolean;
  /** Placement of expansion button in the table, the default is 'after' */
  expandIconPlacement?: 'after' | 'before';
  /** Allows you to expand a row */
  expandableRows?: boolean;
  /** Whether the table should be in full width (100%) or not */
  fullWidth?: boolean;
  /**  Index for the row that is to be opened in edit mode */
  openEditableRowIndex?: number;
  /** Open edit mode by clicking anywhere on the row */
  openEditableOnRowClick?: boolean;
  /** Called when opening or closinmg a row, if you want to control the 'openEditableRowIndex' state from the outside.
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
    name: string;
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
    /** Show the sorting icon only at hover on column (it is always displayed for mobile) Default true,
     * set false if you want the sorting icon to always be displayed
     */
    autohideSorting?: boolean;
  }[];
  /** Language selection for what the screen reader reads out. Default is Norwegian Bokmål */
  language?: Language;
  /** Show separators between rows */
  showRowSeparators?: boolean;
  /** Reduce font size and height on rows for a more compact table */
  compactTable?: boolean;
  /** Table caption */
  caption?: React.ReactNode;
}

export const setScrollBarState = (
  wrapperWidth: number | null,
  tableWidth: number | null,
  setTableIsScrollable: (value: boolean) => void
) => {
  if (tableWidth && wrapperWidth && tableWidth > wrapperWidth) {
    setTableIsScrollable(true);
  } else {
    setTableIsScrollable(false);
  }
};

export const getHeader = (
  columns: TableProps<any>['columns'],
  language: Language | undefined,
  sort: { ascending: boolean; columnFieldName: string },
  setSort: (sort: { ascending: boolean; columnFieldName: string }) => void
) => {
  const setSortingState = (columnFieldName: string) =>
    setSort({
      ascending:
        sort.columnFieldName === columnFieldName ? !sort.ascending : true,
      columnFieldName: columnFieldName
    });

  return (
    columns &&
    columns.map(key => {
      if (key.sortable) {
        const isSorted = sort.columnFieldName === key.fieldName;
        const isSortedAscending = sort.ascending;
        const iconName = isSorted
          ? isSortedAscending
            ? 'ArrowDown'
            : 'ArrowUp'
          : 'ArrowUpDown';
        return (
          <th
            key={key.fieldName}
            scope="col"
            aria-label={
              isSorted
                ? isSortedAscending
                  ? key.name.concat(' ', t('table.sorted_ascending'))
                  : key.name.concat(' ', t('table.sorted_descending'))
                : key.name.concat(' ', t('table.sortable'))
            }
            onClick={() => setSortingState(key.fieldName)}
            className={classnames(
              'divTableColumnheader',
              'sortable',
              key.hideOnMobile ? 'hideOnMobile' : ''
            )}
            tabIndex={0}
            onKeyDown={e => {
              return e.key === 'Enter' ? setSortingState(key.fieldName) : null;
            }}
          >
            {key.name}
            <Icon
              className={
                key.autohideSorting === false ? 'noAutoHide' : undefined
              }
              iconName={iconName}
            />
          </th>
        );
      }
      return (
        <th
          className={key.hideOnMobile ? 'hideOnMobile' : ''}
          key={key.fieldName}
          scope="col"
        >
          {key.name}
        </th>
      );
    })
  );
};

/**
 * @visibleName Table (Tabell)
 */
const Table = <P extends object>(props: TableProps<P>) => {
  const {
    editableRows,
    expandableRows,
    expandIconPlacement,
    children,
    className,
    columns,
    id,
    language,
    openEditableOnRowClick,
    showRowSeparators = true,
    compactTable = false,
    caption = null,
    openEditableRowIndex: externalOpenEditableRowIndex
  } = props;
  const genratedId = useId(id);
  const mainId = id ? id : 'table-' + genratedId;

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [tableIsScrollable, setTableIsScrollable] = React.useState<boolean>(
    false
  );
  const [openEditableRowIndex, setOpenEditableRowIndex] = React.useState<
    number | undefined
  >(externalOpenEditableRowIndex);
  const [openExpandableRowIndex, setOpenExpandableIndex] = React.useState<
    number | undefined
  >();
  const [sort, setSort] = React.useState<{
    ascending: boolean;
    columnFieldName: string;
  }>({ ascending: false, columnFieldName: '' });

  const updateDimensions = () => {
    const tableWidth = tableRef.current && tableRef.current.clientWidth;
    const wrapperWidth = wrapperRef.current && wrapperRef.current.clientWidth;

    setScrollBarState(wrapperWidth, tableWidth, (value: boolean) =>
      setTableIsScrollable(value)
    );
  };

  const sortRowData = (rows: Array<P>) => {
    const sortingKey = sort.columnFieldName;
    if (sortingKey) {
      const copiedArray = [...rows];
      const sortDescending = !sort.ascending;
      const sortingFunction =
        columns &&
        columns.filter(column => column.fieldName === sortingKey)[0]
          .sortingFunction;
      if (sortingFunction) {
        copiedArray.sort((a, b) =>
          sortingFunction(a[sortingKey], b[sortingKey])
        );
      } else {
        copiedArray.sort(function(a, b) {
          return a[sortingKey] < b[sortingKey] ? -1 : 1;
        });
      }
      if (sortDescending) {
        copiedArray.reverse();
      }
      return copiedArray;
    }
    return rows;
  };

  const handleEditRow = (index: number) => {
    setOpenEditableRowIndex(index);
  };
  const handleExpandRow = (index: number) => {
    setOpenExpandableIndex(index);
  };
  const handleCloseRow = () => {
    setOpenEditableRowIndex(undefined);
    setOpenExpandableIndex(undefined);
  };

  const getRowData = () => {
    const items = sortRowData(props.data);
    return items.map((row, index) => {
      return (
        <TableRow
          data={row}
          key={index}
          rowIndex={index}
          columns={columns}
          editableContent={props.editableContent}
          editableRows={props.editableRows}
          editModeActive={openEditableRowIndex !== undefined}
          expandableContent={props.expandableContent}
          expandableModeActive={openExpandableRowIndex !== undefined}
          expandableRows={props.expandableRows}
          expandIconPlacement={props.expandIconPlacement}
          tableHasScroll={tableIsScrollable}
          isEditableRowOpen={openEditableRowIndex === index}
          isExpandableRowOpen={openExpandableRowIndex === index}
          openEditableOnRowClick={openEditableOnRowClick}
          onEditRow={() => handleEditRow(index)}
          onExpandRow={() => handleExpandRow(index)}
          onCloseRow={handleCloseRow}
          openExpandableRowIndex={openExpandableRowIndex}
          tableId={mainId}
          showRowSeparators={showRowSeparators}
          compactTable={compactTable}
        />
      );
    });
  };

  React.useEffect(() => {
    const tableWidth = tableRef.current && tableRef.current.clientWidth;
    const wrapperWidth = wrapperRef.current && wrapperRef.current.clientWidth;
    setScrollBarState(wrapperWidth, tableWidth, setTableIsScrollable);
    window.addEventListener('resize', updateDimensions);
  }, []);

  const emptyTd = (
    <>
      {editableRows && <td className={'emptyTd'} />}
      {expandableRows && <td className={'emptyTd'} />}
    </>
  );

  return (
    <div
      ref={wrapperRef}
      id={id}
      className={classnames(getClassNames(props), className)}
    >
      <table>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {(tableIsScrollable || expandIconPlacement === 'before') && emptyTd}
            {getHeader(
              columns,
              language,
              sort,
              (value: { ascending: boolean; columnFieldName: string }) =>
                setSort(value)
            )}
            {!tableIsScrollable && expandIconPlacement !== 'before' && emptyTd}
          </tr>
        </thead>
        <tbody>{getRowData()}</tbody>
      </table>
      {children}
    </div>
  );
};
export default Table;
