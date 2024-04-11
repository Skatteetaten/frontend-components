import React from 'react';

import classnames from 'classnames';
import { Icon } from '../../Icon';
import { TableProps } from '../Table.types';

import { getClassNames } from './TableHeader.classNames';
import { getSrOnlyStyle, t } from '../../utils';

import { getIconNameForTheadCell, getAriaLabelForTheadCell } from './utils';
import { TFunction } from 'i18next';

interface TableHeaderProps {
  columns: TableProps<any>['columns'];
  sort: { ascending: boolean; columnFieldName: string };
  setSort: (sort: { ascending: boolean; columnFieldName: string }) => void;
  compactTable: boolean;
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

  const onKeyDown = (e, fieldName) => {
    return e.key === 'Enter' ? setSortingState(fieldName) : null;
  };

  const thElements =
    columns &&
    columns.map((key) => {
      if (!key.name) {
        // Når kolonnetittel er tom skal ikke kolonnen ha <th />
        return (
          <td key={key.fieldName} className={styles.tabellTheadCellIsEmpty} />
        );
      }
      if (key.srOnly) {
        return (
          <th key={key.fieldName} className={styles.tabellTheadCellIsEmpty}>
            <span style={getSrOnlyStyle()}>{key.name}</span>
          </th>
        );
      }
      if (key.sortable) {
        const isSorted = sort.columnFieldName === key.fieldName;
        const iconName = getIconNameForTheadCell(isSorted, sort.ascending);

        const ariaLabel = getAriaLabelForTheadCell(
          key.name,
          key.fieldName,
          isSorted,
          sort.ascending,
          t as TFunction
        );

        return (
          <th
            key={key.fieldName}
            className={classnames(
              styles.tabellTheadCell,
              styles.tabellTheadCellIsSortable,
              {
                [styles.tabellTheadCellAlignedRight]: key.alignment === 'right',
                [styles.tabellTheadCellAlignedCenter]:
                  key.alignment === 'center',
                [styles.tabellTheadCellHiddenOnMobile]: key.hideOnMobile,
              }
            )}
            tabIndex={0}
            scope="col"
            aria-label={ariaLabel}
            onClick={() => setSortingState(key.fieldName)}
            onKeyDown={(e) => onKeyDown(e, key.fieldName)}
          >
            {key.name}
            <Icon
              iconName={iconName}
              className={!key.autohideSorting ? 'noAutoHide' : undefined}
            />
          </th>
        );
      }

      return (
        <th
          key={key.fieldName}
          className={classnames(styles.tabellTheadCell, {
            [styles.tabellTheadCellAlignedRight]: key.alignment === 'right',
            [styles.tabellTheadCellAlignedCenter]: key.alignment === 'center',
            [styles.tabellTheadCellHiddenOnMobile]: key.hideOnMobile,
          })}
          scope="col"
        >
          {key.name}
        </th>
      );
    });

  return <>{thElements}</>;
};
