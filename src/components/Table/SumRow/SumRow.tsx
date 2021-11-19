import React from 'react';

import classnames from 'classnames';
import { getClassNames } from './SumRow.classNames';

export const SumRow = (props: {
  columns: Array<any> | undefined;
  sum: { text: string; colspan: number; total: number | string };
  editableRows: boolean | Array<number> | undefined;
  expandableRows: boolean | undefined;
  expandIconPlacement: 'after' | 'before' | undefined;
}) => {
  const styles = getClassNames();
  const columns = props.columns
    ? props.columns.length - props.sum.colspan - 1
    : 0;
  const emptyCells = Array.from(Array(columns).keys());
  let counter = 0;
  return (
    <tr className={styles.sumRow}>
      <th
        colSpan={props.sum.colspan}
        scope="row"
        className={styles.sumCellIsSum}
      >
        {props.sum.text}
      </th>
      <td className={classnames(styles.sumCell, styles.sumCellIsSum)}>
        {props.sum.total}
      </td>
      {props.editableRows && <td />}
      {props.expandableRows && props.expandIconPlacement === 'after' && <td />}
      {!!emptyCells.length &&
        emptyCells.map(() => <td key={counter++} className={styles.sumCell} />)}
    </tr>
  );
};
