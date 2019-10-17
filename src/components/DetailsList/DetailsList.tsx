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
  static CheckBoxVisibility = CheckboxVisibility;
  static DetailsListLayoutMode = DetailsListLayoutMode;
  static Selection = Selection;

  static defaultProps = {
    background: 'white',
    checkboxVisibility: DetailsList.CheckBoxVisibility.hidden,
    constrainMode: DetailsList.ConstrainMode.unconstrained,
    items: [],
    layoutMode: DetailsList.DetailsListLayoutMode.justified,
    selectionMode: DetailsList.SelectionMode.none
  };
  // @ts-ignore TODO
  sortColumn = sortItems => (ev, column) => {
    const { items, columns } = this.props;
    // @ts-ignore TODO
    const currentColumn = columns.filter(currCol => {
      return currCol.key === column.key;
    })[0];
    // @ts-ignore TODO
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
    // @ts-ignore TODO
    const enhancedColumns = columns.map(col =>
      // @ts-ignore TODO
      !col.sortItems
        ? col
        : {
            ...col,
            // @ts-ignore TODO
            onColumnClick: this.sortColumn(col.sortItems)
          }
    );

    return (
      <FabricDetailsList
        {...props}
        // @ts-ignore TODO
        className={classnames(getClassNames(this.props), className)}
        setKey="set"
        columns={enhancedColumns}
        checkboxCellClassName={'DetailsListCheckBox'}
      />
    );
  }
}

export default DetailsList;
