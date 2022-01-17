import * as React from 'react';
import { IPivotItemProps } from '@fluentui/react';

/*
 * visibleName TabItem (Enkeltfane)
 */
export const TabItem: React.FC<IPivotItemProps> = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
