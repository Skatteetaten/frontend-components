import * as React from 'react';
import IconButton from '../../IconButton';
import classnames from 'classnames';

/**
 * @visibleName TableRow (Tabellrad)
 */
export default class TableRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditableRowOpen: false
    };
  }

  render() {
    const { isEditableRowOpen } = this.state;
    const {
      data,
      rowIndex,
      editableRows,
      editableContent,
      columns,
      editModeActive,
      tableHasScroll
    } = this.props;
    const numberOfItems = Object.keys(data).length + 1;
    const editButton = (
      <IconButton
        className={'editButton'}
        onClick={() => this._editRow()}
        title="Rediger rad"
        icon="Edit"
        disabled={editModeActive ? true : false}
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
                  {editableContent(data, this._handleCloseRow, rowIndex)}
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

  _renderRow = (data, columns, rowKey) => {
    return columns.map((column, cellIndex) => {
      return (
        <td
          className={classnames(
            !this.props.isEditableRowOpen ? 'is-closed' : '',
            column.alignment
          )}
          key={rowKey + '_' + cellIndex}
        >
          {data[column.fieldName]}
        </td>
      );
    });
  };

  _editRow = () => {
    this.setState({
      isEditableRowOpen: !this.state.isEditableRowOpen
    });
    this.props.setEditMode();
  };

  _handleCloseRow = () => {
    this.setState({
      isEditableRowOpen: false
    });
    this.props.setEditMode();
  };
}
