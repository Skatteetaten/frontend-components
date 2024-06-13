import * as React from 'react';
import { IPivotItemProps } from '@fluentui/react';

/**
 * @deprecated Komponenten er erstattet av Tabs fra "@skatteetaten/ds-collections"
 *
 * visibleName TabItem (Enkeltfane)
 */
export const TabItem: React.FC<IPivotItemProps> = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
