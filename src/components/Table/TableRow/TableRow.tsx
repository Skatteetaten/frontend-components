import * as React from 'react';
import IconButton from '../../IconButton';
import classnames from 'classnames';

interface TableRowProps<P> {
  data: P;
  rowIndex: number;
  editableRows: boolean | undefined;
  editableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  columns: any;
  editModeActive: boolean;
  tableHasScroll: boolean;
  isEditableRowOpen: boolean;
  onEditRow: (index?: number) => void;
  onCloseRow: () => void;
}

/**
 * @visibleName TableRow (Tabellrad)
 */
export default class TableRow<P> extends React.PureComponent<TableRowProps<P>> {
  constructor(props: TableRowProps<P>) {
    super(props);
    this.state = {
      isEditableRowOpen: false
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
      tableHasScroll,
      isEditableRowOpen,
      onCloseRow,
      onEditRow
    } = this.props;
    const numberOfItems = Object.keys(data).length + 1;
    const editButton = (
      <IconButton
        className={'editButton'}
        onClick={() => onEditRow(rowIndex)}
        title="Rediger rad"
        icon="Edit"
        disabled={editModeActive}
      />
    );

    return (
      <>
        {editableRows ? (
          <>
            {!isEditableRowOpen ? (
              <tr key={rowIndex}>
                {tableHasScroll && <td>{editButton}</td>}
                {this._renderRow(data, columns, rowIndex)}
                {!tableHasScroll && <td>{editButton}</td>}
              </tr>
            ) : (
              <tr
                key={rowIndex}
                className={
                  isEditableRowOpen ? 'editableRow-open' : 'editableRow'
                }
              >
                <td
                  key={rowIndex}
                  className="editableCell"
                  colSpan={numberOfItems}
                >
                  {editableContent &&
                    editableContent(data, onCloseRow, rowIndex)}
                </td>
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
      return (
        <td
          className={classnames(column.alignment)}
          key={rowKey + '_' + cellIndex}
        >
          {data[column.fieldName]}
        </td>
      );
    });
  };
}
