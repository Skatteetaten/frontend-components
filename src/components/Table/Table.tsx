import classnames from 'classnames';
import React, { useState } from 'react';
import { getClassNames } from './Table.classNames';
import { t, generateId, getSrOnlyStyle } from '../utils';
import { Icon } from '../Icon';
import { TableRow } from './TableRow';
import { Language, TableProps } from './Table.types';

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
      if (!key.name) {
        // Når kolonnetittel er tom skal ikke kolonnen ha <th />
        return <td key={key.fieldName} className={'emptyTd'} />;
      }
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
    compactTable = false,
    caption = null,
    hideCaption,
    openEditableRowIndex: externalOpenEditableRowIndex,
  } = props;
  const genratedId = generateId();
  const mainId = id ? id : 'table-' + genratedId;

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [tableIsScrollable, setTableIsScrollable] = useState<boolean>(false);
  const [openEditableRowIndex, setOpenEditableRowIndex] = useState<
    number | undefined
  >(externalOpenEditableRowIndex);
  const [openExpandableRowIndex, setOpenExpandableIndex] = useState<
    number | undefined
  >();
  const [sort, setSort] = useState<{
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
        {caption && (
          <caption style={hideCaption ? getSrOnlyStyle() : undefined}>
            {caption}
          </caption>
        )}
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
