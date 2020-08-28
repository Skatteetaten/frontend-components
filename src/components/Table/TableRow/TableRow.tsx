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

    const ExpandCollapseButton = (props: { open: boolean }) => {
      const expandClopaseRef = React.createRef<HTMLTableCellElement>();

      React.useEffect(() => {
        if (props.open && expandClopaseRef.current) {
          const knapp = expandClopaseRef.current
            .children[0] as HTMLButtonElement;
          knapp.focus();
        }
      }, [props.open]);

      return (
        <td ref={expandClopaseRef}>
          <IconButton
            className={'expandButton'}
            onClick={() => {
              props.open ? onCloseRow() : onExpandRow(rowIndex);
            }}
            buttonSize="large"
            title={props.open ? 'Kollaps' : 'Ekspander'}
            icon={props.open ? 'ChevronUp' : 'ChevronDown'}
            disabled={editModeActive}
            type="button"
          />
        </td>
      );
    };

    const actionButtons = (
      <>
        {editableRows && <td>{editButton}</td>}
        {expandableRows && <ExpandCollapseButton open={false} />}
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
                    {expandIconPlacement === 'before' && (
                      <ExpandCollapseButton open={true} />
                    )}
                    {this._renderRow(data, columns, rowIndex, 1)}
                    {expandIconPlacement !== 'before' && (
                      <ExpandCollapseButton open={true} />
                    )}
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
                {this._renderRow(data, columns, rowIndex, 0)}
                {!tableHasScroll &&
                  expandIconPlacement !== 'before' &&
                  actionButtons}
              </tr>
            )}
          </>
        ) : (
          <tr key={rowIndex}>{this._renderRow(data, columns, rowIndex, 0)}</tr>
        )}
      </>
    );
  }
  _renderRow = (
    data: any,
    columns: any[],
    rowKey: number,
    tabIndex: number
  ) => {
    return columns.map((column, cellIndex) => {
      let cellElement;
      if (
        typeof data[column.fieldName] === 'object' &&
        data[column.fieldName].props
      ) {
        cellElement = React.cloneElement(data[column.fieldName], {
          ...data[column.fieldName].props,
          tabIndex: tabIndex
        });
      }
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
            {cellElement || data[column.fieldName]}
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
          {cellElement || data[column.fieldName]}
        </th>
      );
    });
  };
}
