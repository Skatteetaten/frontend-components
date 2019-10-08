import * as React from 'react';
import classnames from 'classnames';
import {
  DetailsList as FabricDetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  CheckboxVisibility,
  Selection,
  IDetailsListProps
} from 'office-ui-fabric-react/lib-commonjs/DetailsList';
import { getClassNames } from './DetailsList.classNames';

interface DetailsListProps extends IDetailsListProps {
  background?: 'white' | 'transparent';
  isSorted?: boolean;
  isSortedDescending?: boolean;
  onSortUpdate?: (...args: any[]) => any;
}
/**
 * @visibleName DetailsList (Sammensatt tabell)
 */
export class DetailsList extends React.PureComponent<DetailsListProps, {}> {
  static ConstrainMode = ConstrainMode;
  static SelectionMode = SelectionMode;
  static CheckboxVisibility = CheckboxVisibility;
  static DetailsListLayoutMode = DetailsListLayoutMode;
  static Selection = Selection;

  static defaultProps = {
    background: 'white',
    checkboxVisibility: DetailsList.CheckboxVisibility.hidden,
    constrainMode: DetailsList.ConstrainMode.unconstrained,
    items: [],
    layoutMode: DetailsList.DetailsListLayoutMode.justified,
    selectionMode: DetailsList.SelectionMode.none
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
    const { background, columns, className, ...props } = this.props;

    const enhancedColumns = columns.map(col =>
      !col.sortItems
        ? col
        : {
            ...col,
            onColumnClick: this.sortColumn(col.sortItems)
          }
    );

    return (
      <FabricDetailsList
        {...props}
        className={classnames(getClassNames(this.props), className)}
        setKey="set"
        columns={enhancedColumns}
        checkboxCellClassName={'DetailsListCheckbox'}
      />
    );
  }
}

export default DetailsList;
