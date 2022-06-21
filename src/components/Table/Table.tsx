import classnames from 'classnames';

import React, { useEffect, useState } from 'react';
import { getClassNames } from './Table.classNames';
import { generateId, getSrOnlyStyle } from '../utils';
import { TableRow } from './TableRow';
import { SumRow } from './SumRow';
import { RowData, TableProps } from './Table.types';

import { TableHeader } from './TableHeader';

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

/*
 * visibleName Table (Tabell)
 */
export const Table = <P extends RowData>(props: TableProps<P>) => {
  const {
    id,
    customClassNames,
    editableRows,
    expandableRows,
    expandIconPlacement,
    children,
    columns,
    openEditableOnRowClick,
    showRowSeparators = true,
    compactTable = false,
    caption = null,
    hideCaption,
    openEditableRowIndex: OpenEditableRowIndexExternal,
    setOpenEditableRowIndex,
    openExpandableRowIndex: openExpandableRowIndexExternal,
    setOpenExpandableRowIndex,
    sum,
  } = props;
  const genratedId = generateId();
  const mainId = id ? id : 'table-' + genratedId;

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [tableIsScrollable, setTableIsScrollable] = useState<boolean>(false);
  const [
    openEditableRowIndexInternal,
    setOpenEditableRowIndexInternal,
  ] = useState<number | undefined>(OpenEditableRowIndexExternal);
  const [
    openExpandableRowIndexInternal,
    setOpenExpandableIndexInternal,
  ] = useState<number | undefined>();
  const [sort, setSort] = useState<{
    ascending: boolean;
    columnFieldName: string;
  }>({ ascending: false, columnFieldName: '' });

  const styles = getClassNames(props);

  useEffect(() => {
    if (setOpenEditableRowIndex) {
      setOpenEditableRowIndex(openEditableRowIndexInternal);
    }
  }, [openEditableRowIndexInternal, setOpenEditableRowIndex]);

  useEffect(() => {
    setOpenEditableRowIndexInternal(OpenEditableRowIndexExternal);
  }, [OpenEditableRowIndexExternal]);

  useEffect(() => {
    if (setOpenExpandableRowIndex) {
      setOpenExpandableRowIndex(openExpandableRowIndexExternal);
    }
  }, [openExpandableRowIndexInternal, setOpenExpandableRowIndex]);

  useEffect(() => {
    setOpenExpandableIndexInternal(openExpandableRowIndexExternal);
  }, [openExpandableRowIndexExternal]);

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
    setOpenEditableRowIndexInternal(index);
  };
  const handleExpandRow = (index: number) => {
    setOpenExpandableIndexInternal(index);
  };
  const handleCloseRow = () => {
    setOpenEditableRowIndexInternal(undefined);
    setOpenExpandableIndexInternal(undefined);
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
          editModeActive={openEditableRowIndexInternal !== undefined}
          expandableContent={props.expandableContent}
          expandableModeActive={openExpandableRowIndexInternal !== undefined}
          expandableRows={props.expandableRows}
          expandIconPlacement={props.expandIconPlacement}
          tableHasScroll={tableIsScrollable}
          isEditableRowOpen={openEditableRowIndexInternal === index}
          isExpandableRowOpen={openExpandableRowIndexInternal === index}
          openEditableOnRowClick={openEditableOnRowClick}
          onEditRow={() => handleEditRow(index)}
          onExpandRow={() => handleExpandRow(index)}
          onCloseRow={handleCloseRow}
          openExpandableRowIndex={openExpandableRowIndexInternal}
          tableId={mainId}
          showRowSeparators={showRowSeparators}
          compactTable={compactTable}
          sum={sum}
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
      {editableRows && <td className={styles.emptyTd} />}
      {expandableRows && <td className={styles.emptyTd} />}
    </>
  );

  return (
    <div
      ref={wrapperRef}
      id={id}
      className={classnames(styles.SkeTable, customClassNames?.wrapper)}
    >
      <table className={classnames(styles.tabell, customClassNames?.table)}>
        {caption && (
          <caption
            className={classnames(
              styles.tabellCaption,
              customClassNames?.caption
            )}
            style={hideCaption ? getSrOnlyStyle() : undefined}
          >
            {caption}
          </caption>
        )}
        <thead
          className={classnames(
            styles.tabellThead,
            customClassNames?.tabellThead
          )}
        >
          <tr
            className={classnames(
              styles.tabellTheadRow,
              customClassNames?.tabellTheadRow
            )}
          >
            {(tableIsScrollable || expandIconPlacement === 'before') && emptyTd}
            <TableHeader
              columns={columns}
              sort={sort}
              setSort={(value: {
                ascending: boolean;
                columnFieldName: string;
              }) => setSort(value)}
            />

            {!tableIsScrollable && expandIconPlacement !== 'before' && emptyTd}
          </tr>
        </thead>
        <tbody>
          {getRowData()}
          {sum && (
            <SumRow
              compactTable={compactTable}
              numberOfColumns={props.columns?.length ?? 0}
              editableRows={editableRows}
              expandableRows={expandableRows}
              expandIconPlacement={expandIconPlacement}
              sum={sum}
            />
          )}
        </tbody>
      </table>
      {children}
    </div>
  );
};
export default Table;
