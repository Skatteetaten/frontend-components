import classnames from 'classnames';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { getClassNames } from './Table.classNames';

import TableRow from './TableRow';

interface TableProps {
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
  sort: { ascending: null; columnFieldName: null };
}
/**
 * @visibleName Table (Tabell)
 */
export default class Table extends React.PureComponent<TableProps, TableState> {
  static defaultProps = {
    data: []
  };
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    // @ts-ignore TODO
    this.wrapperRef = React.createRef();
    // @ts-ignore TODO
    this.tableRef = React.createRef();
    this.state = {
      editModeActive: false,
      tableIsScrollable: false,
      sort: {
        ascending: null,
        columnFieldName: null
      }
    };
  }

  componentDidMount() {
    // @ts-ignore TODO
    const tableWidth = this.tableRef.current.clientWidth;
    // @ts-ignore TODO
    const wrapperWidth = this.wrapperRef.current.clientWidth;

    this._setScrollBarState(wrapperWidth, tableWidth);

    window.addEventListener('resize', this._updateDimensions);
  }

  render() {
    const { editableRows, children, className, id } = this.props;
    const { tableIsScrollable } = this.state;
    const columns = this.props.columns;

    return (
      <div
        // @ts-ignore TODO
        ref={this.wrapperRef}
        id={id}
        // @ts-ignore TODO
        className={classnames(getClassNames(this.props), className)}
      >
        {/*
        // @ts-ignore TODO */}
        <table ref={this.tableRef}>
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
    // @ts-ignore TODO
    let tableWidth = this.tableRef.current.clientWidth;
    // @ts-ignore TODO
    let wrapperWidth = this.wrapperRef.current.clientWidth;

    this._setScrollBarState(wrapperWidth, tableWidth);
  };
  // @ts-ignore TODO
  _setScrollBarState = (wrapperWidth, tableWidth) => {
    if (tableWidth > wrapperWidth) {
      this.setState({
        tableIsScrollable: true
      });
    } else {
      this.setState({
        tableIsScrollable: false
      });
    }
  };
  // @ts-ignore TODO
  _getHeader = columns => {
    // @ts-ignore TODO
    return columns.map(key => {
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
            // @ts-ignore TODO
            tabIndex="0"
            onKeyDown={e => {
              return e.key === 'Enter'
                ? this._setSortingState(key.fieldName)
                : null;
            }}
          >
            {key.name}
            <Icon
              // @ts-ignore TODO
              className={key.autohideSorting === false ? 'noAutoHide' : null}
              iconName={iconName}
            />
          </th>
        );
      }
      return <th key={key.fieldName}>{key.name}</th>;
    });
  };
  // @ts-ignore TODO
  _setSortingState = columnFieldName => {
    // @ts-ignore TODO
    this.setState({
      sort: {
        ascending:
          this.state.sort.columnFieldName === columnFieldName
            ? !this.state.sort.ascending
            : true,
        columnFieldName: columnFieldName
      }
    });
  };

  _setEditMode = () => {
    this.setState({
      editModeActive: !this.state.editModeActive
    });
  };
  // @ts-ignore TODO
  _getRowData = columns => {
    const items = this._sortRowData(this.props.data);
    // @ts-ignore TODO
    return items.map((row, index) => {
      return (
        <>
          {/*
          // @ts-ignore TODO */}
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
        </>
      );
    });
  };
  // @ts-ignore TODO
  _sortRowData = rows => {
    const sortingKey = this.state.sort.columnFieldName;
    if (sortingKey) {
      const copiedArray = [...rows];
      const sortDescending = !this.state.sort.ascending;
      // @ts-ignore TODO
      const sortingFunction = this.props.columns.filter(
        column => column.fieldName === sortingKey
      )[0].sortingFunction;
      if (sortingFunction) {
        copiedArray.sort((a, b) =>
          // @ts-ignore TODO
          sortingFunction(a[sortingKey], b[sortingKey])
        );
      } else {
        copiedArray.sort(function(a, b) {
          // @ts-ignore TODO
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
