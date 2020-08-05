import * as React from 'react';
import IconButton from '../../IconButton';
import classnames from 'classnames';

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
}

/**
 * @visibleName TableRow (Tabellrad)
 */
export default class TableRow<P> extends React.PureComponent<TableRowProps<P>> {
  constructor(props: TableRowProps<P>) {
    super(props);
    this.state = {
      isEditableRowOpen: false,
      isExpandableRowOpen: false
    };
  }

  render() {
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
      isEditableRowOpen,
      isExpandableRowOpen,
      onCloseRow,
      onEditRow,
      onExpandRow
    } = this.props;
    const numberOfColumns = columns.length + (editableRows ? 1 : 0);
    const editButton = (
      <IconButton
        className={'editButton'}
        onClick={() => onEditRow(rowIndex)}
        title="Rediger rad"
        icon="Edit"
        disabled={editModeActive || expandableModeActive}
        type="button"
      />
    );

    const expandButton = (
      <IconButton
        className={'expandButton'}
        onClick={() => onExpandRow(rowIndex)}
        buttonSize="large"
        title="Ekspander"
        icon="ChevronDown"
        disabled={editModeActive}
        type="button"
      />
    );

    const collapseButton = (
      <td>
        <IconButton
          className={'expandButton'}
          onClick={() => onCloseRow()}
          buttonSize="large"
          title="Kollaps"
          icon="ChevronUp"
          type="button"
        />
      </td>
    );

    const actionButtons = (
      <>
        {editableRows && <td>{editButton}</td>}
        {expandableRows && <td>{expandButton}</td>}
      </>
    );
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
                      isExpandableRowOpen
                        ? 'expandableRow-open'
                        : 'expandableRow'
                    }
                  >
                    {expandIconPlacement === 'before' && collapseButton}
                    {this._renderRow(data, columns, rowIndex)}
                    {!(expandIconPlacement === 'before') && collapseButton}
                  </tr>
                  <tr>
                    {expandIconPlacement === 'before' && <td />}
                    <td className="expandableCell" colSpan={numberOfColumns}>
                      {expandableContent &&
                        expandableContent(data, onCloseRow, rowIndex)}
                    </td>
                  </tr>
                </>
              )
            ) : (
              <tr key={rowIndex}>
                {(tableHasScroll || expandIconPlacement === 'before') &&
                  actionButtons}
                {this._renderRow(data, columns, rowIndex)}
                {!tableHasScroll &&
                  expandIconPlacement !== 'before' &&
                  actionButtons}
              </tr>
            )}
          </>
        ) : (
          <tr key={rowIndex}>{this._renderRow(data, columns, rowIndex)}</tr>
        )}
      </>
    );
  }
  _renderRow = (data: any, columns: any[], rowKey: number) => {
    return columns.map((column, cellIndex) => {
      if (cellIndex > 0) {
        return (
          <td
            className={classnames(
              !this.props.isEditableRowOpen ? 'is-closed' : '',
              column.alignment,
              column.hideOnMobile ? 'hideOnMobile' : ''
            )}
            key={rowKey + '_' + cellIndex}
          >
            {data[column.fieldName]}
          </td>
        );
      }
      return (
        <th
          scope={'row'}
          className={classnames(
            !this.props.isEditableRowOpen ? 'is-closed' : '',
            column.alignment,
            column.hideOnMobile ? 'hideOnMobile' : '',
            'tableRow'
          )}
          key={rowKey + '_' + cellIndex}
        >
          {data[column.fieldName]}
        </th>
      );
    });
  };
}
