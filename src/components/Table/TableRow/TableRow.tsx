import React, { useEffect } from 'react';
import { IconButton } from '../../IconButton';
import { getClassNames } from './TableRow.classNames';
import classnames from 'classnames';
import { t } from '../../utils';

export interface RowData {
  hideEdit?: boolean;
  hideSeparator?: boolean;
  customClassNames?: RowCustomClassNames;
}

interface RowCustomClassNames {
  tableRow?: string;
  tableCell?: string;
  cellContent?: string;
  expandableContent?: string;
}

export interface TableRowProps<P> {
  rowIndex: number;
  /** Custom classNames for å overskrive styling */
  customClassNames?: RowCustomClassNames;
  data: P;
  editableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  editableRows: boolean | Array<number> | undefined;
  expandableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  expandableModeActive: boolean;
  expandableRows: boolean | undefined;
  expandIconPlacement?: 'after' | 'before';
  columns: any;
  editModeActive: boolean;
  tableHasScroll: boolean;
  isEditableRowOpen: boolean;
  isExpandableRowOpen: boolean;
  openEditableOnRowClick?: boolean;
  onEditRow: (index?: number) => void;
  onExpandRow: (index?: number) => void;
  onCloseRow: () => void;
  openExpandableRowIndex: number | undefined;
  tableId: string;
  showRowSeparators: boolean;
  compactTable: boolean;
  sum: { text: string; colspan: number; total: number | string } | undefined;
}

/*
 * visibleName TableRow (Tabellrad)
 */
export const TableRow = <P extends RowData>(props: TableRowProps<P>) => {
  const {
    rowIndex,
    customClassNames,
    data,
    editableRows,
    editableContent,
    columns,
    editModeActive,
    expandableContent,
    expandableModeActive,
    expandableRows,
    expandIconPlacement,
    tableHasScroll,
    isEditableRowOpen = false,
    isExpandableRowOpen = false,
    onCloseRow,
    onEditRow,
    onExpandRow,
    openExpandableRowIndex,
    tableId,
    openEditableOnRowClick,
    showRowSeparators,
    compactTable,
  } = props;
  const editableRow = !data['hideEdit'] && editableRows;
  const showExtraCol = data['hideEdit'] && editableRows;
  const showRowSeparator = !data['hideSeparator'] && showRowSeparators;
  const numberOfColumns =
    columns.length + (editableRow || expandableRows || showExtraCol ? 1 : 0);
  const expandabledRowRef = React.useRef<HTMLTableRowElement>(null);
  const expandCollapseCellRef = React.createRef<HTMLTableCellElement>();
  const [focusRow, setFocusRow] = React.useState<number | undefined>(
    openExpandableRowIndex
  );

  useEffect(() => {
    if (openExpandableRowIndex !== undefined) {
      setFocusRow(openExpandableRowIndex);
    }
  }, [openExpandableRowIndex]);

  useEffect(() => {
    if (focusRow === rowIndex && expandCollapseCellRef.current) {
      const knapp = expandCollapseCellRef.current
        .children[0] as HTMLButtonElement;
      knapp.focus();
    }
  }, [expandCollapseCellRef, focusRow, rowIndex]);

  const styles = getClassNames(props, expandabledRowRef?.current?.offsetWidth);

  const childrenLength = !!data['children'] ? data['children'].length : 0;

  const editButton = (
    <span
      className={classnames(
        styles.cellContent,
        customClassNames?.cellContent,
        data.customClassNames?.cellContent,
        {
          cellContentSmall: !showRowSeparators || compactTable,
        }
      )}
    >
      <IconButton
        title={t('tablerow.editable.title')}
        type="button"
        icon="Edit"
        className={styles.editButton}
        buttonSize={compactTable ? 'xSmall' : 'default'}
        onClick={() => onEditRow(rowIndex)}
        disabled={editModeActive || expandableModeActive}
        aria-describedby={tableId.concat(rowIndex.toString(), '_0')}
      />
    </span>
  );

  const expandableContentId = `${tableId}-${rowIndex}-expanded`;
  const expandableCellContent = () => {
    if (expandableContent) {
      return (
        <div
          id={expandableContentId}
          className={classnames(
            styles.expandableContent,
            customClassNames?.expandableContent,
            data?.customClassNames?.expandableContent
          )}
        >
          {expandableContent(data, onCloseRow, rowIndex)}
        </div>
      );
    }
    return undefined;
  };

  const ExpandCollapseButton = (btnProps: {
    isOpen: boolean;
    shouldRenderCellContent: boolean;
  }) => {
    return (
      <td
        data-testid={'table-cell-expandable'}
        ref={expandCollapseCellRef}
        className={classnames(
          styles.tableCell,
          customClassNames?.tableCell,
          data.customClassNames?.tableCell,
          'tableCellForExpandCollapseButton'
        )}
      >
        <IconButton
          title={t('tablerow.expandable.title')}
          className={classnames(styles.expandButton, {
            [styles.expandButtonIsActive]: isExpandableRowOpen,
          })}
          icon={btnProps.isOpen ? 'ChevronUp' : 'ChevronDown'}
          onClick={() => {
            if (btnProps.isOpen) {
              onCloseRow();
            } else {
              onExpandRow(rowIndex);
            }
          }}
          buttonSize={compactTable ? 'xSmall' : 'large'}
          type="button"
          aria-expanded={btnProps.isOpen}
          aria-describedby={tableId.concat(rowIndex.toString(), '_0')}
          aria-controls={btnProps.isOpen ? expandableContentId : undefined}
          disabled={editModeActive}
        />
        {btnProps.isOpen &&
          btnProps.shouldRenderCellContent &&
          expandableCellContent()}
      </td>
    );
  };

  const actionButtons =
    editableRow || expandableRows ? (
      <>
        {editableRow && (
          <td
            className={classnames(
              styles.tableCell,
              customClassNames?.tableCell,
              data.customClassNames?.tableCell,
              {
                tableCellHasSeparator: showRowSeparator && !isExpandableRowOpen,
              }
            )}
            rowSpan={childrenLength + 1}
          >
            {editButton}
          </td>
        )}
        {expandableRows && (
          <ExpandCollapseButton
            isOpen={isExpandableRowOpen}
            shouldRenderCellContent={expandIconPlacement === 'before'}
          />
        )}
      </>
    ) : null;

  const renderCellContent = (
    content,
    index,
    alignment,
    isChild,
    isExpandabledRowOpen
  ) =>
    openEditableOnRowClick && editableContent && editableRow ? (
      <button
        data-testid={'openEditableOnRowClick-button'}
        className={styles.editButton}
        onClick={() => onEditRow(index)}
        tabIndex={-1}
      >
        <span
          className={classnames(
            styles.cellContent,
            customClassNames?.cellContent,
            data.customClassNames?.cellContent,
            'cellContentClickable',
            {
              cellContentAboveExpandedArea: isExpandabledRowOpen,
              cellContentAlignedRight: alignment === 'right',
              cellContentAlignedCenter: alignment === 'center',
              cellContentLarge: showRowSeparator && !isChild,
              cellContentChildRow: isChild,
              cellContentHideEdit: !editableRow && editableRows,
            }
          )}
        >
          {formatContent(content, index)}
        </span>
      </button>
    ) : (
      <div
        className={classnames(
          styles.cellContent,
          customClassNames?.cellContent,
          data.customClassNames?.cellContent,
          {
            cellContentAboveExpandedArea: isExpandabledRowOpen,
            cellContentAlignedRight: alignment === 'right',
            cellContentAlignedCenter: alignment === 'center',
            cellContentLarge: showRowSeparator && !isChild,
            cellContentChildRow: isChild,
            cellContentHideEdit: !editableRow && editableRows,
          }
        )}
      >
        {formatContent(content, index)}
      </div>
    );

  const formatContent = (content, index) => {
    if (columns[index].formatFunction) {
      return columns[index].formatFunction(content);
    }
    return content;
  };

  const renderRow = (
    rowData: P,
    rowColumns: TableRowProps<P>['columns'],
    rowKey: number,
    isRowExpanded: boolean,
    isChild: boolean = false
  ) => {
    return rowColumns.map((column, cellIndex) => {
      if (cellIndex > 0) {
        return (
          <td
            key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
            className={classnames(
              styles.tableCell,
              customClassNames?.tableCell,
              data.customClassNames?.tableCell,
              {
                tableCellAboveExpandedArea: isRowExpanded,
                tableCellAlignedRight: column.alignment === 'right',
                tableCellAlignedCenter: column.alignment === 'center',
                tableCellIsEditableRowClosed:
                  editableRow && !props.isEditableRowOpen,
                tableCellHiddenOnMobile: column.hideOnMobile,
                tableCellHasSeparator:
                  showRowSeparator && !isExpandableRowOpen && !data['children'],
              }
            )}
          >
            {renderCellContent(
              rowData[column.fieldName],
              cellIndex,
              column.alignment,
              isChild,
              isRowExpanded
            )}
          </td>
        );
      } else if (!isChild) {
        return (
          <th
            key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
            id={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
            className={classnames(
              styles.tableCell,
              customClassNames?.tableCell,
              data.customClassNames?.tableCell,
              {
                tableCellAboveExpandedArea: isRowExpanded,
                tableCellAlignedRight: column.alignment === 'right',
                tableCellAlignedCenter: column.alignment === 'center',
                tableCellIsEditableRowClosed:
                  editableRow && !props.isEditableRowOpen,
                tableCellHiddenOnMobile: column.hideOnMobile,
                tableCellHasSeparator: showRowSeparator && !isExpandableRowOpen,
              }
            )}
            scope={'row'}
            rowSpan={childrenLength + 1}
          >
            {renderCellContent(
              rowData[column.fieldName],
              cellIndex,
              column.alignment,
              isChild,
              isRowExpanded
            )}
          </th>
        );
      }
      return null;
    });
  };

  if (isEditableRowOpen) {
    return (
      <tr
        key={rowIndex}
        className={classnames(
          styles.tableRow,
          customClassNames?.tableRow,
          data.customClassNames?.tableRow,
          isEditableRowOpen
            ? 'tableRowEditableAndOpen'
            : 'tableRowEditableAndClosed',
          'tableRowHasSeparator'
        )}
      >
        <td
          key={rowIndex}
          data-testid={'editable-content'}
          className={classnames(
            styles.tableCell,
            customClassNames?.tableCell,
            data.customClassNames?.tableCell
          )}
          colSpan={numberOfColumns}
        >
          {editableContent && editableContent(data, onCloseRow, rowIndex)}
        </td>
      </tr>
    );
  }
  const actionButtonsBefore =
    tableHasScroll || expandIconPlacement === 'before';

  return (
    <>
      {expandableRows ? (
        isExpandableRowOpen ? (
          <>
            <tr
              key={rowIndex}
              ref={expandabledRowRef}
              className={classnames(
                styles.tableRow,
                customClassNames?.tableRow,
                data.customClassNames?.tableRow,
                {
                  tableRowHasSeparator:
                    showRowSeparator &&
                    (expandIconPlacement === 'before' ||
                      (expandIconPlacement === 'after' &&
                        !isExpandableRowOpen)),
                }
              )}
            >
              {expandIconPlacement === 'before' && (
                <ExpandCollapseButton
                  isOpen={true}
                  shouldRenderCellContent={true}
                />
              )}
              {renderRow(data, columns, rowIndex, true)}
              {expandIconPlacement !== 'before' && (
                <ExpandCollapseButton
                  isOpen={true}
                  shouldRenderCellContent={false}
                />
              )}
            </tr>

            {expandIconPlacement !== 'before' && (
              <tr
                key={rowIndex + 'expanded'}
                className={classnames(
                  styles.tableRow,
                  customClassNames?.tableRow,
                  data.customClassNames?.tableRow,

                  {
                    tableRowHasSeparator: showRowSeparator,
                  }
                )}
              >
                <td colSpan={numberOfColumns}>{expandableCellContent()}</td>
              </tr>
            )}
          </>
        ) : (
          <tr
            key={rowIndex}
            ref={expandabledRowRef}
            className={classnames(
              styles.tableRow,
              customClassNames?.tableRow,
              data.customClassNames?.tableRow,
              {
                tableRowIsClickable: openEditableOnRowClick,
                tableRowHasSeparator:
                  showRowSeparator && !isExpandableRowOpen && !data['children'],
              }
            )}
          >
            {(tableHasScroll || expandIconPlacement === 'before') &&
              actionButtons}
            {renderRow(data, columns, rowIndex, false)}
            {!tableHasScroll &&
              expandIconPlacement !== 'before' &&
              actionButtons}
          </tr>
        )
      ) : (
        <>
          <tr
            key={rowIndex}
            className={classnames(
              styles.tableRow,
              customClassNames?.tableRow,
              data.customClassNames?.tableRow,
              {
                tableRowIsClickable: openEditableOnRowClick,
                tableRowHasSeparator:
                  showRowSeparator && !isExpandableRowOpen && !data['children'],
              }
            )}
          >
            {actionButtonsBefore && actionButtons}
            {renderRow(data, columns, rowIndex, false, false)}
            {!actionButtonsBefore && actionButtons}
            {showExtraCol && <td />}
          </tr>
          {!isEditableRowOpen &&
            !!data['children'] &&
            childrenLength > 0 &&
            data['children'].map((child, childIndex) => {
              return (
                <tr
                  key={rowIndex + 'child' + childIndex}
                  className={classnames(
                    styles.tableRow,
                    customClassNames?.tableRow,
                    data.customClassNames?.tableRow,
                    {
                      tableRowHasSeparator:
                        showRowSeparator &&
                        childIndex === data['children'].length - 1,
                    }
                  )}
                >
                  {actionButtonsBefore && <td />}
                  {renderRow(child, columns, childIndex, false, true)}
                  {!actionButtonsBefore && <td />}
                  {showExtraCol && <td />}
                </tr>
              );
            })}
        </>
      )}
    </>
  );
};

export default TableRow;
