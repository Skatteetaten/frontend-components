import classnames from 'classnames';
import { IProcessedStyleSet } from '@fluentui/merge-styles';
import React, { useEffect, useState } from 'react';
import { getClassNames } from './Table.classNames';
import { t, generateId, getSrOnlyStyle } from '../utils';
import { Icon } from '../Icon';
import { TableRow } from './TableRow';
import { TableProps } from './Table.types';

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
  styles: IProcessedStyleSet<{ emptyTd: string }>,
  columns: TableProps<any>['columns'],
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
        return <td key={key.fieldName} className={styles.emptyTd} />;
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
            className={classnames(
              'divTableColumnheader',
              'sortable',
              key.hideOnMobile ? 'hideOnMobile' : ''
            )}
            tabIndex={0}
            scope="col"
            aria-label={
              isSorted
                ? isSortedAscending
                  ? key.name.concat(' ', t('table.sorted_ascending'))
                  : key.name.concat(' ', t('table.sorted_descending'))
                : key.name.concat(' ', t('table.sortable'))
            }
            onClick={() => setSortingState(key.fieldName)}
            onKeyDown={(e) => {
              return e.key === 'Enter' ? setSortingState(key.fieldName) : null;
            }}
          >
            {key.name}
            <Icon
              iconName={iconName}
              className={
                key.autohideSorting === false ? 'noAutoHide' : undefined
              }
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

const SumRow = (props: {
  columns: Array<any> | undefined;
  sum: { text: string; colspan: number; total: number | string };
  editableRows: boolean | Array<number> | undefined;
  expandableRows: boolean | undefined;
  expandIconPlacement: 'after' | 'before' | undefined;
}) => {
  const columns = props.columns
    ? props.columns.length - props.sum.colspan - 1
    : 0;
  const emptyCells = Array.from(Array(columns).keys());
  let counter = 0;
  return (
    <tr>
      <th colSpan={props.sum.colspan} scope="row" className={'sum'}>
        {props.sum.text}
      </th>
      <td className={classnames('tableCell', 'sum')}>{props.sum.total}</td>
      {props.editableRows && <td />}
      {props.expandableRows && props.expandIconPlacement === 'after' && <td />}
      {!!emptyCells.length &&
        emptyCells.map(() => <td className={'tableCell'} key={counter++} />)}
    </tr>
  );
};

/*
 * visibleName Table (Tabell)
 */
export const Table = <P extends object>(props: TableProps<P>) => {
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
  const [openExpandableRowIndex, setOpenExpandableIndex] = useState<
    number | undefined
  >();
  const [sort, setSort] = useState<{
    ascending: boolean;
    columnFieldName: string;
  }>({ ascending: false, columnFieldName: '' });

  const styles = getClassNames(props, '');

  useEffect(() => {
    if (setOpenEditableRowIndex) {
      setOpenEditableRowIndex(openEditableRowIndexInternal);
    }
  }, [openEditableRowIndexInternal, setOpenEditableRowIndex]);

  useEffect(() => {
    setOpenEditableRowIndexInternal(OpenEditableRowIndexExternal);
  }, [OpenEditableRowIndexExternal]);

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
    setOpenExpandableIndex(index);
  };
  const handleCloseRow = () => {
    setOpenEditableRowIndexInternal(undefined);
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
          editModeActive={openEditableRowIndexInternal !== undefined}
          expandableContent={props.expandableContent}
          expandableModeActive={openExpandableRowIndex !== undefined}
          expandableRows={props.expandableRows}
          expandIconPlacement={props.expandIconPlacement}
          tableHasScroll={tableIsScrollable}
          isEditableRowOpen={openEditableRowIndexInternal === index}
          isExpandableRowOpen={openExpandableRowIndex === index}
          openEditableOnRowClick={openEditableOnRowClick}
          onEditRow={() => handleEditRow(index)}
          onExpandRow={() => handleExpandRow(index)}
          onCloseRow={handleCloseRow}
          openExpandableRowIndex={openExpandableRowIndex}
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
            className={classnames(customClassNames?.caption)}
            style={hideCaption ? getSrOnlyStyle() : undefined}
          >
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            {(tableIsScrollable || expandIconPlacement === 'before') && emptyTd}
            {getHeader(
              styles,
              columns,
              sort,
              (value: { ascending: boolean; columnFieldName: string }) =>
                setSort(value)
            )}
            {!tableIsScrollable && expandIconPlacement !== 'before' && emptyTd}
          </tr>
        </thead>
        <tbody>
          {getRowData()}
          {sum && (
            <SumRow
              columns={props.columns}
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
