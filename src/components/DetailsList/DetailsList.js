import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  DetailsList as FabricDetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  CheckboxVisibility,
  Selection
} from 'office-ui-fabric-react/lib-commonjs/DetailsList';
import { getClassNames } from './DetailsList.classNames';

/**
 * @visibleName DetailsList (Sammensatt tabell)
 */
export class DetailsList extends React.PureComponent {
  static ConstrainMode = ConstrainMode;
  static SelectionMode = SelectionMode;
  static CheckboxVisibility = CheckboxVisibility;
  static DetailsListLayoutMode = DetailsListLayoutMode;
  static Selection = Selection;

  static propTypes = {
    /** Angir om detaljlisten skal være gjennomsiktig eller hvit*/

    background: PropTypes.oneOf(['white', 'transparent']),
    /** Innholdselementer i listen */
    items: PropTypes.array,
    /** Kontrollerer hvordan er kolonnene blir justert les mer [her](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/DetailsList/DetailsList.types.ts)*/
    layoutMode: PropTypes.any,
    /** Om sjekkboks skal være synlig eller ikke */
    checkboxVisibility: PropTypes.any,
    /** Angir om man skulle velge rader vha en sjekkboks. Valg inkluderer: none, single, multiple */
    selectionMode: PropTypes.any,
    /** Avgjør hvordan liste håndterer overflow */
    constrainMode: PropTypes.any,
    /** Viser en pil hvis kolonnen er sortert */
    isSorted: PropTypes.bool,
    /** Avgjør hvilken retning sorteringspilen vises */
    isSortedDescending: PropTypes.bool,
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** ({items, columns}) => void; Brukes for å oppdatere items og columns. */
    onSortUpdate: PropTypes.func
  };

  static defaultProps = {
    background: 'white',
    items: [],
    layoutMode: DetailsList.DetailsListLayoutMode.justified,
    checkboxVisibility: DetailsList.CheckboxVisibility.hidden,
    selectionMode: DetailsList.SelectionMode.none,
    constrainMode: DetailsList.ConstrainMode.unconstrained
  };

  sortColumn = sortItems => (ev, column) => {
    const { items, columns } = this.props;

    const currentColumn = columns.filter(currCol => {
      return currCol.key === column.key;
    })[0];

    const newColumns = columns.map(newCol => {
      if (newCol === currentColumn) {
        return {
          ...newCol,
          isSorted: true,
          isSortedDescending: !currentColumn.isSortedDescending
        };
      }
      return {
        ...newCol,
        isSorted: false,
        isSortedDescending: true
      };
    });

    const sortedItems = sortItems({
      isDescending: currentColumn.isSortedDescending,
      fieldName: currentColumn.fieldName,
      items: items
    });

    this.props.onSortUpdate &&
      this.props.onSortUpdate({
        columns: newColumns,
        items: sortedItems
      });
  };

  render() {
    const {
      background,
      items,
      columns,
      layoutMode,
      checkboxVisibility,
      selectionMode,
      constrainMode,
      isSorted,
      isSortedDescending,
      className,
      id,
      ...props
    } = this.props;

    const enhancedColumns = columns.map(col =>
      !col.sortItems
        ? col
        : {
            ...col,
            onColumnClick: this.sortColumn(col.sortItems)
          }
    );

    return (
      <div id={id}>
        <FabricDetailsList
          {...props}
          className={classnames(getClassNames(this.props), className)}
          items={items}
          setKey="set"
          columns={enhancedColumns}
          layoutMode={layoutMode}
          checkboxVisibility={checkboxVisibility}
          selectionMode={selectionMode}
          constrainMode={constrainMode}
          checkboxCellClassName={'DetailsListCheckbox'}
          isSorted={isSorted}
          isSortedDescending={isSortedDescending}
        />
      </div>
    );
  }
}

export default DetailsList;
