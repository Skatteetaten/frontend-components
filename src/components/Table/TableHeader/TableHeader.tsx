import React from 'react';

import classnames from 'classnames';
import { Icon } from '../../Icon';
import { TableProps } from '../Table.types';

import { getClassNames } from './TableHeader.classNames';
import { t } from '../../utils';

interface TableHeaderProps {
  columns: TableProps<any>['columns'];
  sort: { ascending: boolean; columnFieldName: string };
  setSort: (sort: { ascending: boolean; columnFieldName: string }) => void;
}

export const TableHeader = (props: TableHeaderProps): JSX.Element => {
  const { columns, sort, setSort } = props;

  const styles = getClassNames(props);

  const setSortingState = (columnFieldName: string) =>
    setSort({
      ascending:
        sort.columnFieldName === columnFieldName ? !sort.ascending : true,
      columnFieldName: columnFieldName,
    });

  const thElements =
    columns &&
    columns.map((key) => {
      if (!key.name) {
        // Når kolonnetittel er tom skal ikke kolonnen ha <th />
        return (
          <td key={key.fieldName} className={styles.tabellTheadCellIsEmpty} />
        );
      }
      if (key.sortable) {
        const isSorted = sort.columnFieldName === key.fieldName;
        const isSortedAscending = sort.ascending;
        const iconName = isSorted
          ? isSortedAscending
            ? 'ArrowDown'
            : 'ArrowUp'
          : 'ArrowUpDown';
        return (
          <th
            key={key.fieldName}
            className={classnames(
              styles.tabellTheadCell,
              styles.tabellTheadCellIsSortable,
              { [styles.tabellTheadCell]: key.hideOnMobile }
            )}
            tabIndex={0}
            scope="col"
            aria-label={
              isSorted
                ? isSortedAscending
                  ? key.name.concat(' ', t('table.sorted_ascending'))
                  : key.name.concat(' ', t('table.sorted_descending'))
                : key.name.concat(' ', t('table.sortable'))
            }
            onClick={() => setSortingState(key.fieldName)}
            onKeyDown={(e) => {
              return e.key === 'Enter' ? setSortingState(key.fieldName) : null;
            }}
          >
            {key.name}
            <Icon
              iconName={iconName}
              className={
                key.autohideSorting === false ? 'noAutoHide' : undefined
              }
            />
          </th>
        );
      }
      return (
        <th
          key={key.fieldName}
          className={classnames(styles.tabellTheadCell, {
            [styles.tabellTheadCell]: key.hideOnMobile,
          })}
          scope="col"
        >
          {key.name}
        </th>
      );
    });

  return <>{thElements}</>;
};
