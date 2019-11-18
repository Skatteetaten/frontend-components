import classnames from 'classnames';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { getClassNames } from './Table.classNames';

import TableRow from './TableRow';

interface TableProps extends React.ReactHTMLElement<HTMLDivElement> {
  /** Mulighet for å legge inn egen klasse for å overstyre stiling */
  className?: string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Innholdselementer i tabellen */
  data: any[];
  /**  Gjør det mulig å redigere rader i tabellen */
  editableRows?: boolean;
  /**  Innhold som skal vises når en rad er i editeringsmodus */
  editableContent?: any;
  /**  Konfigurasjon for kolonnenavn og rekkefølge */
  columns?: {
    /** Navnet på kolonnen */
    name: string;
    /** Nøkklen i objektet */
    fieldName: string;
    /** Overstyre venstrejustering inni cellen: 'right' eller 'center'. */
    alignment?: 'right' | 'center';
    /** Bruker kan sortere på kolonnen alfabetisk og på tall (men ikke på tall som er strenger) */
    sortable?: boolean;
    /** Overskriv sorteringsfunksjonen */
    sortingFunction?: (...args: any[]) => any;
    /** Vis ikon for sortering kun ved hover på kolonne (vises alltid for mobil). Default true,
     * sett false om ønsker at ikon for sortering alltid skal vises.
     */
    autohideSorting?: boolean;
  }[];
}

interface TableState {
  editModeActive: boolean;
  tableIsScrollable: boolean;
  sort: { ascending: boolean; columnFieldName: string };
}
/**
 * @visibleName Table (Tabell)
 */
export default class Table extends React.PureComponent<TableProps, TableState> {
  static defaultProps = {
    data: []
  };
  private readonly wrapperRef: React.RefObject<HTMLDivElement>;
  private readonly tableRef: React.RefObject<HTMLDivElement>;

  constructor(props: TableProps) {
    super(props);
    this.wrapperRef = React.createRef();
    this.tableRef = React.createRef();
    this.state = {
      editModeActive: false,
      tableIsScrollable: false,
      sort: {
        ascending: false,
        columnFieldName: ''
      }
    };
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

  _getHeader = (columns: TableProps['columns']) => {
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
              className="sortable"
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
        return <th key={key.fieldName}>{key.name}</th>;
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

  _setEditMode = () => {
    this.setState({
      editModeActive: !this.state.editModeActive
    });
  };

  _getRowData = (columns: TableProps['columns']) => {
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
          setEditMode={this._setEditMode}
          editModeActive={this.state.editModeActive}
          tableHasScroll={this.state.tableIsScrollable}
        />
      );
    });
  };

  _sortRowData = (rows: any[]) => {
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
}
