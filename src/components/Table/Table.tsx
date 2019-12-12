import classnames from 'classnames';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { getClassNames } from './Table.classNames';

import TableRow from './TableRow';

interface TableProps<P> extends React.HTMLAttributes<HTMLDivElement> {
  /** Mulighet for å legge inn egen klasse for å overstyre stiling */
  className?: string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Innholdselementer i tabellen */
  data: P[];
  /**  Gjør det mulig å redigere rader i tabellen */
  editableRows?: boolean;
  /**  Indeks til rad som skal åpnes i redigeringsmodus */
  openEditableRowIndex?: number;
  /**  Blir kalt ved åpning eller lukking av rad, om man ønsker å styre 'openEditableRowIndex' state utenfra */
  /**  Ved 'undefined' styrer komponenten dette selv  */
  setOpenEditableRowIndex?: (index?: number) => void;
  /**  Innhold som skal vises når en rad er i editeringsmodus */
  editableContent?: (
    data: P,
    onCloseRow: () => void,
    rowIndex: number
  ) => React.ReactNode;
  /**  Konfigurasjon for kolonnenavn og rekkefølge */
  columns?: {
    /** Navnet på kolonnen */
    name: string;
    /** Nøkkelen i objektet */
    fieldName: string;
    /** Overstyre venstrejustering inni cellen: 'right' eller 'center'. */
    alignment?: 'right' | 'center';
    /** Bruker kan sortere på kolonnen alfabetisk og på tall (men ikke på tall som er strenger) */
    sortable?: boolean;
    /** Ikke vis kolonnen på mobil (breakpoint på 640px) */
    hideOnMobile?: boolean;
    /** Overskriv sorteringsfunksjonen */
    sortingFunction?: (...args: any[]) => any;
    /** Vis ikon for sortering kun ved hover på kolonne (vises alltid for mobil). Default true,
     * sett false om ønsker at ikon for sortering alltid skal vises.
     */
    autohideSorting?: boolean;
  }[];
}

interface TableState {
  openEditableRowIndex?: number;
  editModeActive: boolean;
  tableIsScrollable: boolean;
  sort: { ascending: boolean; columnFieldName: string };
}
/**
 * @visibleName Table (Tabell)
 */
export default class Table<P> extends React.PureComponent<
  TableProps<P>,
  TableState
> {
  static defaultProps = {
    data: []
  };
  private readonly wrapperRef: React.RefObject<HTMLDivElement>;
  private readonly tableRef: React.RefObject<HTMLDivElement>;

  constructor(props: TableProps<P>) {
    super(props);
    this.wrapperRef = React.createRef();
    this.tableRef = React.createRef();
    this.state = {
      editModeActive: false,
      tableIsScrollable: false,
      openEditableRowIndex: props.openEditableRowIndex,
      sort: {
        ascending: false,
        columnFieldName: ''
      }
    };
  }

  componentDidUpdate(prevProps: TableProps<P>) {
    if (this.props.openEditableRowIndex !== prevProps.openEditableRowIndex) {
      this.setState({ openEditableRowIndex: this.props.openEditableRowIndex });
    }
  }

  componentDidMount() {
    const tableWidth =
      this.tableRef.current && this.tableRef.current.clientWidth;
    const wrapperWidth =
      this.wrapperRef.current && this.wrapperRef.current.clientWidth;

    this._setScrollBarState(wrapperWidth, tableWidth);

    window.addEventListener('resize', this._updateDimensions);
  }

  render() {
    const { editableRows, children, className, id } = this.props;
    const { tableIsScrollable } = this.state;
    const columns = this.props.columns;

    return (
      <div
        ref={this.wrapperRef}
        id={id}
        className={classnames(getClassNames(), className)}
      >
        <table>
          <thead>
            <tr>
              {tableIsScrollable && editableRows && <th />}
              {this._getHeader(columns)}
              {!tableIsScrollable && editableRows && <th />}
            </tr>
          </thead>
          <tbody>{this._getRowData(columns)}</tbody>
        </table>
        {children}
      </div>
    );
  }

  _updateDimensions = () => {
    let tableWidth = this.tableRef.current && this.tableRef.current.clientWidth;
    let wrapperWidth =
      this.wrapperRef.current && this.wrapperRef.current.clientWidth;

    this._setScrollBarState(wrapperWidth, tableWidth);
  };

  _setScrollBarState = (
    wrapperWidth: number | null,
    tableWidth: number | null
  ) => {
    if (tableWidth && wrapperWidth && tableWidth > wrapperWidth) {
      this.setState({
        tableIsScrollable: true
      });
    } else {
      this.setState({
        tableIsScrollable: false
      });
    }
  };

  _getHeader = (columns: TableProps<P>['columns']) => {
    return (
      columns &&
      columns.map(key => {
        if (key.sortable) {
          const isSorted = this.state.sort.columnFieldName === key.fieldName;
          const isSortedAscending = this.state.sort.ascending;
          const iconName = isSorted
            ? isSortedAscending
              ? 'ArrowDown'
              : 'ArrowUp'
            : 'ArrowUpDown';
          return (
            <th
              key={key.fieldName}
              onClick={() => this._setSortingState(key.fieldName)}
              className={classnames(
                'sortable',
                key.hideOnMobile ? 'hideOnMobile' : ''
              )}
              tabIndex={0}
              onKeyDown={e => {
                return e.key === 'Enter'
                  ? this._setSortingState(key.fieldName)
                  : null;
              }}
            >
              {key.name}
              <Icon
                className={
                  key.autohideSorting === false ? 'noAutoHide' : undefined
                }
                iconName={iconName}
              />
            </th>
          );
        }
        return (
          <th
            className={key.hideOnMobile ? 'hideOnMobile' : ''}
            key={key.fieldName}
          >
            {key.name}
          </th>
        );
      })
    );
  };

  _setSortingState = (columnFieldName: string) =>
    this.setState({
      sort: {
        ascending:
          this.state.sort.columnFieldName === columnFieldName
            ? !this.state.sort.ascending
            : true,
        columnFieldName: columnFieldName
      }
    });

  _getRowData = (columns: TableProps<P>['columns']) => {
    const items = this._sortRowData(this.props.data);
    return items.map((row, index) => {
      return (
        <TableRow
          data={row}
          key={index}
          rowIndex={index}
          columns={columns}
          editableContent={this.props.editableContent}
          editableRows={this.props.editableRows}
          editModeActive={this.state.openEditableRowIndex !== undefined}
          tableHasScroll={this.state.tableIsScrollable}
          isEditableRowOpen={this.state.openEditableRowIndex === index}
          onEditRow={() => this._handleEditRow(index)}
          onCloseRow={this._handleCloseRow}
        />
      );
    });
  };

  _sortRowData = (rows: P[]) => {
    const sortingKey = this.state.sort.columnFieldName;
    if (sortingKey) {
      const copiedArray = [...rows];
      const sortDescending = !this.state.sort.ascending;
      const sortingFunction =
        this.props.columns &&
        this.props.columns.filter(column => column.fieldName === sortingKey)[0]
          .sortingFunction;
      if (sortingFunction) {
        copiedArray.sort((a, b) =>
          sortingFunction(a[sortingKey], b[sortingKey])
        );
      } else {
        copiedArray.sort(function(a, b) {
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

  _setOpenEditableRowIndex = (index?: number) => {
    if (this.props.setOpenEditableRowIndex) {
      this.props.setOpenEditableRowIndex(index);
    } else {
      this.setState({ openEditableRowIndex: index });
    }
  };

  _handleEditRow = (index?: number) => {
    this._setOpenEditableRowIndex(index);
  };

  _handleCloseRow = () => {
    this._setOpenEditableRowIndex(undefined);
  };
}
