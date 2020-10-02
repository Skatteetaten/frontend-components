import classnames from 'classnames';
import React from 'react';
import { getClassNames } from './Table.classNames';
import { t } from '../utils/i18n/i18n';
import { Icon, TableRow, generateId } from '../index';

export enum Language {
  en = 'en',
  nb = 'nb',
  nn = 'nn',
}

export interface TableProps<P> extends React.HTMLAttributes<HTMLDivElement> {
  /** Mulighet for å legge inn egen klasse for å overstyre stiling */
  className?: string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Innholdselementer i tabellen */
  data: P[];
  /**  Gjør det mulig å redigere rader i tabellen */
  editableRows?: boolean;
  /** Plassering av ekspanderingsknapp i tabellen. Default er after */
  expandIconPlacement?: 'after' | 'before';
  /** Gjør det mulig å ekspandere en rad */
  expandableRows?: boolean;
  /** Om tabellen skal være i full bredde (100 %) */
  fullWidth?: boolean;
  /**  Indeks til rad som skal åpnes i redigeringsmodus */
  openEditableRowIndex?: number;
  /** Åpne redigeringsmodus ved klikk hvor som helst på raden */
  openEditableOnRowClick?: boolean;
  /**  Blir kalt ved åpning eller lukking av rad, om man ønsker å styre 'openEditableRowIndex' state utenfra */
  /**  Ved 'undefined' styrer komponenten dette selv  */
  setOpenEditableRowIndex?: (index?: number) => void;
  /**  Innhold som skal vises når en rad er i editeringsmodus */
  editableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  /**  Innhold som skal vises når en rad er i ekspanderingsmodus */
  expandableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  /**  Konfigurasjon for kolonnenavn og rekkefølge */
  columns?: {
    /** Navnet på kolonnen */
    name: string;
    /** Nøkkelen i objektet */
    fieldName: string;
    /** Overstyre venstrejustering inni cellen: 'right' eller 'center'. */
    alignment?: 'right' | 'center';
    /** Bruker kan sortere på kolonnen alfabetisk og på tall (men ikke på tall som er strenger) */
    sortable?: boolean;
    /** Ikke vis kolonnen på mobil (breakpoint på 640px) */
    hideOnMobile?: boolean;
    /** Overskriv sorteringsfunksjonen */
    sortingFunction?: (...args: any[]) => any;
    /** Vis ikon for sortering kun ved hover på kolonne (vises alltid for mobil). Default true,
     * sett false om ønsker at ikon for sortering alltid skal vises.
     */
    autohideSorting?: boolean;
  }[];
  /** Språkvalg for hva skjermleser leser opp. Default er Norsk Bokmål */
  language?: Language;
  /** Vis skillelinjer mellom rader*/
  showRowSeparators?: boolean;
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
      columnFieldName: columnFieldName,
    });

  return (
    columns &&
    columns.map((key) => {
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
            onKeyDown={(e) => {
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
export const Table = <P extends object>(props: TableProps<P>) => {
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
  } = props;
  const genratedId = generateId();
  const mainId = id ? id : 'table-' + genratedId;

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [tableIsScrollable, setTableIsScrollable] = React.useState<boolean>(
    false
  );
  const [openEditableRowIndex, setOpenEditableRowIndex] = React.useState<
    number | undefined
  >();
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
        columns.filter((column) => column.fieldName === sortingKey)[0]
          .sortingFunction;
      if (sortingFunction) {
        copiedArray.sort((a, b) =>
          sortingFunction(a[sortingKey], b[sortingKey])
        );
      } else {
        copiedArray.sort(function (a, b) {
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
