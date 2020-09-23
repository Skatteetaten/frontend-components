import * as React from 'react';
import IconButton from '../../IconButton';
import classnames from 'classnames';
import { t } from '../../utils/i18n/i18n';

interface TableRowProps<P> {
  data: P;
  rowIndex: number;
  editableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  editableRows: boolean | undefined;
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
}

/**
 * @visibleName TableRow (Tabellrad)
 */
const TableRow = <P extends object>(props: TableRowProps<P>) => {
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
    showRowSeparators
  } = props;
  const numberOfColumns =
    columns.length + (editableRows || expandableRows ? 1 : 0);
  const expandCollapseCellRef = React.createRef<HTMLTableCellElement>();
  const [focusRow, setFocusRow] = React.useState<number | undefined>(
    openExpandableRowIndex
  );

  React.useEffect(() => {
    if (openExpandableRowIndex !== undefined) {
      setFocusRow(openExpandableRowIndex);
    }
  }, [openExpandableRowIndex]);

  React.useEffect(() => {
    if (focusRow === rowIndex && expandCollapseCellRef.current) {
      const knapp = expandCollapseCellRef.current
        .children[0] as HTMLButtonElement;
      knapp.focus();
    }
  }, [expandCollapseCellRef, focusRow, rowIndex]);

  const editButton = (
    <span
      className={classnames('cellContent', {
        cellContentSmall: !showRowSeparators
      })}
    >
      <IconButton
        className={'editButton'}
        onClick={() => onEditRow(rowIndex)}
        title={t('tablerow.title')}
        icon="Edit"
        disabled={editModeActive || expandableModeActive}
        type="button"
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
            expandIconPlacement === 'before' ? 'expandableContent' : ''
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
      <td ref={expandCollapseCellRef} className={'expandCell'}>
        <IconButton
          className={'expandButton'}
          onClick={() => {
            if (btnProps.open) {
              onCloseRow();
            } else {
              onExpandRow(rowIndex);
            }
          }}
          buttonSize="large"
          title={t('tablerow.expandable.title')}
          icon={btnProps.open ? 'ChevronUp' : 'ChevronDown'}
          aria-expanded={btnProps.open}
          aria-describedby={tableId.concat(rowIndex.toString(), '_0')}
          disabled={editModeActive}
          aria-controls={btnProps.open ? expandableContentId : undefined}
          type="button"
        />
      </td>
    );
  };

  const actionButtons =
    editableRows || expandableRows ? (
      <>
        {editableRows && <td>{editButton}</td>}
        {expandableRows && <ExpandCollapseButton open={isExpandableRowOpen} />}
      </>
    ) : null;

  const renderCellContent = (content, index) =>
    openEditableOnRowClick && editableContent ? (
      <button
        className={classnames('cellContent', 'clickable', {
          cellContentLarge: showRowSeparators
        })}
        onClick={() => onEditRow(index)}
        tabIndex={-1}
      >
        {content}
      </button>
    ) : (
      <div
        className={classnames('cellContent', {
          cellContentLarge: showRowSeparators
        })}
      >
        {content}
      </div>
    );

  const renderRow = (
    rowData: P,
    rowColumns: TableRowProps<P>['columns'],
    rowKey: number
  ) => {
    return columns.map((column, cellIndex) => {
      if (cellIndex > 0) {
        return (
          <td
            className={classnames(
              !props.isEditableRowOpen ? 'is-closed' : '',
              column.alignment,
              column.hideOnMobile ? 'hideOnMobile' : ''
            )}
            key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
          >
            {renderCellContent(data[column.fieldName], cellIndex)}
          </td>
        );
      }
      return (
        <th
          scope={'row'}
          className={classnames(
            !props.isEditableRowOpen ? 'is-closed' : '',
            column.alignment,
            column.hideOnMobile ? 'hideOnMobile' : '',
            'tableRow'
          )}
          id={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
          key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
        >
          {renderCellContent(data[column.fieldName], cellIndex)}
        </th>
      );
    });
  };

  if (isEditableRowOpen) {
    return (
      <tr
        key={rowIndex}
        className={isEditableRowOpen ? 'editableRow-open' : 'editableRow'}
      >
        <td key={rowIndex} className="editableCell" colSpan={numberOfColumns}>
          {editableContent && editableContent(data, onCloseRow, rowIndex)}
        </td>
      </tr>
    );
  }

  const actionButtonsBefore =
    tableHasScroll || expandIconPlacement === 'before';
  return (
    <>
      <tr
        key={rowIndex}
        className={classnames({
          clickable: openEditableOnRowClick,
          separator: showRowSeparators && !isExpandableRowOpen
        })}
      >
        {actionButtonsBefore && actionButtons}
        {renderRow(data, columns, rowIndex)}
        {!actionButtonsBefore && actionButtons}
      </tr>
      {isExpandableRowOpen && (
        <tr
          key={rowIndex + 'expanded'}
          className={classnames({
            'expandableRow-open': true,
            separator: showRowSeparators && isExpandableRowOpen
          })}
        >
          <td colSpan={numberOfColumns}>{expandableCellContent()}</td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
