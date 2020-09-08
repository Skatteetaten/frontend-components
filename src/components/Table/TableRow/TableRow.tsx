import * as React from 'react';
import IconButton from '../../IconButton';
import classnames from 'classnames';
import i18n, { t } from '../../utils/i18n/i18n';

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
  onEditRow: (index?: number) => void;
  onExpandRow: (index?: number) => void;
  onCloseRow: () => void;
  openExpandableRowIndex: number | undefined;
  tableId: string;
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
    tableId
  } = props;
  const numberOfColumns = columns.length + (editableRows ? 1 : 0);
  const expandClopaseRef = React.createRef<HTMLTableCellElement>();
  const [focusRow, setFocusRow] = React.useState<number | undefined>(
    openExpandableRowIndex
  );

  React.useEffect(() => {
    if (openExpandableRowIndex !== undefined) {
      setFocusRow(openExpandableRowIndex);
    }
  }, [openExpandableRowIndex]);

  React.useEffect(() => {
    if (focusRow === rowIndex && expandClopaseRef.current) {
      const knapp = expandClopaseRef.current.children[0] as HTMLButtonElement;
      knapp.focus();
    }
  }, [expandClopaseRef, focusRow]);

  const editButton = (
    <IconButton
      className={'editButton'}
      onClick={() => onEditRow(rowIndex)}
      title={t('tablerow.title')}
      icon="Edit"
      disabled={editModeActive || expandableModeActive}
      type="button"
    />
  );

  const expandableCellContent = () => {
    if (expandableContent) {
      return (
        <div
          className={'expandableContent'}
          aria-describedby={'columnheader'.concat('_', rowIndex.toString())}
        >
          {expandableContent(data, onCloseRow, rowIndex)}
        </div>
      );
    }
    return undefined;
  };

  const ExpandCollapseButton = (btnProps: {
    open: boolean;
    focus: boolean;
  }) => {
    return (
      <td ref={expandClopaseRef} className={'expandCell'}>
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
          title={i18n.t('tablerow.expandable.title', {
            CELL: data[columns[0].fieldName]
          })}
          icon={btnProps.open ? 'ChevronUp' : 'ChevronDown'}
          aria-expanded={btnProps.open}
          aria-describedby={tableId.concat(rowIndex.toString(), '_0')}
          disabled={editModeActive}
          type="button"
        />
        {btnProps.open &&
          expandIconPlacement === 'before' &&
          expandableCellContent()}
      </td>
    );
  };

  const actionButtons = (
    <>
      {editableRows && <td>{editButton}</td>}
      {expandableRows && (
        <ExpandCollapseButton open={false} focus={rowIndex === focusRow} />
      )}
    </>
  );

  const renderRow = (
    rowData: P,
    rowColumns: TableRowProps<P>['columns'],
    rowKey: number
  ) => {
    const expandCell = expandIconPlacement !== 'before' && isExpandableRowOpen;
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
            {data[column.fieldName]}
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
            'tableRow',
            expandCell ? 'expandCell' : ''
          )}
          id={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
          key={tableId.concat(rowKey.toString(), '_', cellIndex.toString())}
        >
          {data[column.fieldName]}
          {expandCell && expandableCellContent()}
        </th>
      );
    });
  };

  return (
    <>
      {editableRows || expandableRows ? (
        <>
          {isExpandableRowOpen || isEditableRowOpen ? (
            editableRows ? (
              <tr
                key={rowIndex}
                className={
                  isEditableRowOpen ? 'editableRow-open' : 'editableRow'
                }
              >
                <td
                  key={rowIndex}
                  className="editableCell"
                  colSpan={numberOfColumns}
                >
                  {editableContent &&
                    editableContent(data, onCloseRow, rowIndex)}
                </td>
              </tr>
            ) : (
              <>
                <tr
                  key={rowIndex}
                  className={
                    isExpandableRowOpen ? 'expandableRow-open' : 'expandableRow'
                  }
                >
                  {expandIconPlacement === 'before' && (
                    <ExpandCollapseButton
                      open={true}
                      focus={rowIndex === focusRow}
                    />
                  )}
                  {renderRow(data, columns, rowIndex)}
                  {expandIconPlacement !== 'before' && (
                    <ExpandCollapseButton
                      open={true}
                      focus={rowIndex === focusRow}
                    />
                  )}
                </tr>
              </>
            )
          ) : (
            <tr key={rowIndex}>
              {(tableHasScroll || expandIconPlacement === 'before') &&
                actionButtons}
              {renderRow(data, columns, rowIndex)}
              {!tableHasScroll &&
                expandIconPlacement !== 'before' &&
                actionButtons}
            </tr>
          )}
        </>
      ) : (
        <tr key={rowIndex}>{renderRow(data, columns, rowIndex)}</tr>
      )}
    </>
  );
};
export default TableRow;
