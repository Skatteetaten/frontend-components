import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import classnames from 'classnames';
import { getClassNames } from './Table.classNames';

import TableRow from './TableRow';

/**
 * @visibleName Table (Tabell)
 */
export default class Table extends React.PureComponent {
  static propTypes = {
    /** Mulighet for å legge inn egen klasse for å overstyre stiling */
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Innholdselementer i tabellen */
    data: PropTypes.array.isRequired,
    /**  Gjør det mulig å redigere rader i tabellen */
    editableRows: PropTypes.bool,
    /**  Innhold som skal vises når en rad er i editeringsmodus */
    editableContent: PropTypes.any,
    /**  Konfigurasjon for kolonnenavn og rekkefølge */
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        /** Navnet på kolonnen */
        name: PropTypes.string.isRequired,
        /** Nøkklen i objektet */
        fieldName: PropTypes.string.isRequired,
        /** Overstyre venstrejustering inni cellen: 'right' eller 'center'. */
        alignment: PropTypes.oneOf(['right', 'center']),
        /** Ikke vis kolonnen på mobil (breakpoint på 640px)*/
        hideOnMobile: PropTypes.bool,
        /** Bruker kan sortere på kolonnen alfabetisk og på tall (men ikke på tall som er strenger) */
        sortable: PropTypes.bool,
        /** Overskriv sorteringsfunksjonen */
        sortingFunction: PropTypes.func,
        /** Vis ikon for sortering kun ved hover på kolonne (vises alltid for mobil). Default true,
         * sett false om ønsker at ikon for sortering alltid skal vises. */
        autohideSorting: PropTypes.bool
      })
    )
  };

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
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

  static defaultProps = {
    data: []
  };

  componentDidMount() {
    const tableWidth = this.tableRef.current.clientWidth;
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
        ref={this.wrapperRef}
        id={id}
        className={classnames(getClassNames(this.props), className)}
      >
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
    let tableWidth = this.tableRef.current.clientWidth;
    let wrapperWidth = this.wrapperRef.current.clientWidth;

    this._setScrollBarState(wrapperWidth, tableWidth);
  };

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

  _getHeader = columns => {
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
            className={classnames(
              'sortable',
              key.hideOnMobile ? 'hideOnMobile' : ''
            )}
            tabIndex="0"
            onKeyDown={e => {
              return e.key === 'Enter'
                ? this._setSortingState(key.fieldName)
                : null;
            }}
          >
            {key.name}
            <Icon
              className={key.autohideSorting === false ? 'noAutoHide' : null}
              iconName={iconName}
            />
          </th>
        );
      }
      return (
        <th
          key={key.fieldName}
          className={key.hideOnMobile ? 'hideOnMobile' : ''}
        >
          {key.name}
        </th>
      );
    });
  };

  _setSortingState = columnFieldName => {
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

  _getRowData = columns => {
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

  _sortRowData = rows => {
    const sortingKey = this.state.sort.columnFieldName;
    if (sortingKey) {
      const copiedArray = [...rows];
      const sortDescending = !this.state.sort.ascending;
      const sortingFunction = this.props.columns.filter(
        column => column.fieldName === sortingKey
      )[0].sortingFunction;
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
