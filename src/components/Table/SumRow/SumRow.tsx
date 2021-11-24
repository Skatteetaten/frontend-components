import React from 'react';

import classnames from 'classnames';
import { getClassNames } from './SumRow.classNames';

export const SumRow = (props: {
  numberOfColumns: number;
  sum: { text: string; colspan: number; total: number | string };
  editableRows: boolean | Array<number> | undefined;
  expandableRows: boolean | undefined;
  expandIconPlacement: 'after' | 'before' | undefined;
}) => {
  const {
    numberOfColumns,
    sum,
    editableRows,
    expandableRows,
    expandIconPlacement,
  } = props;
  const styles = getClassNames();
  const columns = numberOfColumns !== 0 ? numberOfColumns - sum.colspan - 1 : 0;
  const emptyCells = Array.from(Array(columns).keys());
  let counter = 0;
  return (
    <tr className={styles.sumRow}>
      <th colSpan={sum.colspan} scope="row" className={styles.sumCellIsSum}>
        {sum.text}
      </th>
      <td className={classnames(styles.sumCell, styles.sumCellIsSum)}>
        {sum.total}
      </td>
      {editableRows && <td />}
      {expandableRows && expandIconPlacement === 'after' && <td />}
      {!!emptyCells.length &&
        emptyCells.map(() => <td key={counter++} className={styles.sumCell} />)}
    </tr>
  );
};
