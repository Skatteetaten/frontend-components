import React, { useEffect } from 'react';
import { IconButton } from '../../IconButton';
import { getClassNames } from './TableRow.classNames';
import classnames from 'classnames';
import { t } from '../../utils';

export interface TableRowProps<P> {
  rowIndex: number;
  /** Custom classNames for å overskrive styling */
  customClassNames?: {
    tableRow?: string;
    tableCell?: string;
    cellContent?: string;
    expandableContent?: string;
  };
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
export const TableRow = <P extends object>(props: TableRowProps<P>) => {
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
  const showRowSeparator = !data['hideSeperator'] && showRowSeparators;
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
      className={classnames(styles.cellContent, customClassNames?.cellContent, {
        [styles.cellContentSmall]: !showRowSeparators,
      })}
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
            customClassNames?.expandableContent
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
          styles.tableCellForExpandCollapseButton
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
              {
                [styles.separator]: showRowSeparator && !isExpandableRowOpen,
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
            styles.cellContentClickable,
            {
              [styles.cellContentAboveExpandedArea]: isExpandabledRowOpen,
              [styles.cellContentAlignedRight]: alignment === 'right',
              [styles.cellContentAlignedCenter]: alignment === 'center',
              [styles.cellContentLarge]: showRowSeparator && !isChild,
              [styles.cellContentChildRow]: isChild,
              [styles.cellContentHideEdit]: !editableRow && editableRows,
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
          {
            [styles.cellContentAboveExpandedArea]: isExpandabledRowOpen,
            [styles.cellContentAlignedRight]: alignment === 'right',
            [styles.cellContentAlignedCenter]: alignment === 'center',
            [styles.cellContentLarge]: showRowSeparator && !isChild,
            [styles.cellContentChildRow]: isChild,
            [styles.cellContentHideEdit]: !editableRow && editableRows,
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
              {
                [styles.tableCellAboveExpandedArea]: isRowExpanded,
                [styles.tableCellAlignedRight]: column.alignment === 'right',
                [styles.tableCellAlignedCenter]: column.alignment === 'center',
                [styles.tableCellIsEditableRowClosed]: !props.isEditableRowOpen,
                [styles.hideOnMobile]: column.hideOnMobile,
                [styles.separator]:
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
              {
                [styles.tableCellAboveExpandedArea]: isRowExpanded,
                [styles.tableCellAlignedRight]: column.alignment === 'right',
                [styles.tableCellAlignedCenter]: column.alignment === 'center',
                [styles.tableCellIsEditableRowClosed]: !props.isEditableRowOpen,
                [styles.hideOnMobile]: column.hideOnMobile,
                [styles.separator]: showRowSeparator && !isExpandableRowOpen,
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
          isEditableRowOpen
            ? styles.tableRowEditableAndOpen
            : styles.tableRowEditableAndClosed,
          styles.separator
        )}
      >
        <td
          key={rowIndex}
          data-testid={'editable-content'}
          className={classnames(styles.tableCell, customClassNames?.tableCell)}
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
                styles.tableRowIsExpandableAndOpen,
                {
                  [styles.separator]:
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
                  styles.tableRowIsExpandableAndOpen,
                  {
                    [styles.separator]: showRowSeparator,
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
            className={classnames(styles.tableRow, customClassNames?.tableRow, {
              [styles.tableRowIsClickable]: openEditableOnRowClick,
              [styles.separator]:
                showRowSeparator && !isExpandableRowOpen && !data['children'],
            })}
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
            className={classnames(styles.tableRow, customClassNames?.tableRow, {
              [styles.tableRowIsClickable]: openEditableOnRowClick,
              [styles.separator]:
                showRowSeparator && !isExpandableRowOpen && !data['children'],
            })}
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
                    {
                      [styles.separator]:
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
