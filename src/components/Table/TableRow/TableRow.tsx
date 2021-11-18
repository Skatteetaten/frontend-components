import React, { useEffect } from 'react';
import { IconButton } from '../../IconButton';
import { getClassNames } from '../Table.classNames';
import classnames from 'classnames';
import { t } from '../../utils';

export interface TableRowProps<P> {
  data: P;
  rowIndex: number;
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
    data,
    rowIndex,
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
  const expandabledRowOpen = React.useRef<HTMLTableRowElement>(null);
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

  const styles = getClassNames(props, expandabledRowOpen?.current?.offsetWidth);

  const childrenLength = !!data['children'] ? data['children'].length : 0;

  const editButton = (
    <span
      className={classnames(styles.cellContent, {
        [styles.cellContentSmall]: !showRowSeparators,
      })}
    >
      <IconButton
        className={'editButton'}
        onClick={() => onEditRow(rowIndex)}
        title={t('tablerow.editable.title')}
        icon="Edit"
        disabled={editModeActive || expandableModeActive}
        type="button"
        buttonSize={compactTable ? 'xSmall' : 'default'}
        aria-describedby={tableId.concat(rowIndex.toString(), '_0')}
      />
    </span>
  );

  // TO-DO this one should get the width programmatically
  const expandableContentId = `${tableId}-${rowIndex}-expanded`;
  const expandableCellContent = () => {
    if (expandableContent) {
      return (
        <div
          id={expandableContentId}
          className={classnames(
            expandIconPlacement === 'before' ? styles.expandableContent : ''
          )}
        >
          {expandableContent(data, onCloseRow, rowIndex)}
        </div>
      );
    }
    return undefined;
  };

  const ExpandCollapseButton = (btnProps: { open: boolean }) => {
    return (
      <td ref={expandCollapseCellRef} className={'tableCell expandCell'}>
        <IconButton
          className={classnames('expandButton', {
            'expandButton-open': isExpandableRowOpen,
          })}
          onClick={() => {
            if (btnProps.open) {
              onCloseRow();
            } else {
              onExpandRow(rowIndex);
            }
          }}
          buttonSize={compactTable ? 'xSmall' : 'large'}
          title={t('tablerow.expandable.title')}
          icon={btnProps.open ? 'ChevronUp' : 'ChevronDown'}
          aria-expanded={btnProps.open}
          aria-describedby={tableId.concat(rowIndex.toString(), '_0')}
          disabled={editModeActive}
          aria-controls={btnProps.open ? expandableContentId : undefined}
          type="button"
        />
        {btnProps.open &&
          expandIconPlacement === 'before' &&
          expandableCellContent()}
      </td>
    );
  };

  const actionButtons =
    editableRow || expandableRows ? (
      <>
        {editableRow && (
          <td
            className={classnames({
              clickable: openEditableOnRowClick,
              [styles.separator]: showRowSeparator && !isExpandableRowOpen,
            })}
            rowSpan={childrenLength + 1}
          >
            {editButton}
          </td>
        )}
        {expandableRows && <ExpandCollapseButton open={isExpandableRowOpen} />}
      </>
    ) : null;

  const renderCellContent = (content, index, isChild) =>
    openEditableOnRowClick && editableContent && editableRow ? (
      <button
        className={styles.cellButton}
        onClick={() => onEditRow(index)}
        tabIndex={-1}
      >
        <span
          className={classnames(
            styles.cellContent,
            styles.cellContentClickable,
            {
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
        className={classnames(styles.cellContent, {
          [styles.cellContentLarge]: showRowSeparator && !isChild,
          [styles.cellContentChildRow]: isChild,
          [styles.cellContentHideEdit]: !editableRow && editableRows,
        })}
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
    isChild: boolean = false
  ) => {
    return columns.map((column, cellIndex) => {
      if (cellIndex > 0) {
        return (
          <td
            key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
            className={classnames(column.alignment, 'tableCell', {
              tableCellIsClosed: !props.isEditableRowOpen,
              [styles.hideOnMobile]: column.hideOnMobile,
              [styles.separator]:
                showRowSeparator && !isExpandableRowOpen && !data['children'],
            })}
          >
            {renderCellContent(rowData[column.fieldName], cellIndex, isChild)}
          </td>
        );
      } else if (!isChild) {
        return (
          <th
            key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
            id={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
            className={classnames(column.alignment, 'tableCell', {
              tableCellIsClosed: !props.isEditableRowOpen,
              [styles.hideOnMobile]: column.hideOnMobile,
              [styles.separator]: showRowSeparator && !isExpandableRowOpen,
            })}
            scope={'row'}
            rowSpan={childrenLength + 1}
          >
            {renderCellContent(rowData[column.fieldName], cellIndex, isChild)}
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
          isEditableRowOpen ? styles.editableRowOpen : styles.editableRowClosed,
          styles.separator
        )}
      >
        <td key={rowIndex} className="tableCell" colSpan={numberOfColumns}>
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
              ref={expandabledRowOpen}
              className={classnames(styles.expandableRowOpen, {
                [styles.separator]:
                  showRowSeparator &&
                  (expandIconPlacement === 'before' ||
                    (expandIconPlacement === 'after' && !isExpandableRowOpen)),
              })}
            >
              {expandIconPlacement === 'before' && (
                <ExpandCollapseButton open={true} />
              )}
              {renderRow(data, columns, rowIndex)}
              {expandIconPlacement !== 'before' && (
                <ExpandCollapseButton open={true} />
              )}
            </tr>
            {expandIconPlacement !== 'before' && (
              <tr
                key={rowIndex + 'expanded'}
                className={classnames(styles.expandableRowOpen, {
                  [styles.separator]: showRowSeparator,
                })}
              >
                <td
                  colSpan={numberOfColumns}
                  className={styles.expandableContentAfter}
                >
                  {expandableCellContent()}
                </td>
              </tr>
            )}
          </>
        ) : (
          <tr
            key={rowIndex}
            className={classnames('expandableRow', {
              clickable: openEditableOnRowClick,
              [styles.separator]:
                showRowSeparator && !isExpandableRowOpen && !data['children'],
            })}
          >
            {(tableHasScroll || expandIconPlacement === 'before') &&
              actionButtons}
            {renderRow(data, columns, rowIndex)}
            {!tableHasScroll &&
              expandIconPlacement !== 'before' &&
              actionButtons}
          </tr>
        )
      ) : (
        <>
          <tr
            key={rowIndex}
            className={classnames({
              clickable: openEditableOnRowClick,
              [styles.separator]:
                showRowSeparator && !isExpandableRowOpen && !data['children'],
            })}
          >
            {actionButtonsBefore && actionButtons}
            {renderRow(data, columns, rowIndex, false)}
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
                  className={classnames({
                    [styles.separator]:
                      showRowSeparator &&
                      childIndex === data['children'].length - 1,
                  })}
                >
                  {actionButtonsBefore && <td />}
                  {renderRow(child, columns, childIndex, true)}
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
