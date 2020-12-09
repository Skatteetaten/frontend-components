import * as React from 'react';
import { IPivotItemProps } from '@fluentui/react';
// TODO: Fix deprecation
import { BaseComponent } from '@uifabric/utilities';

/**
 * @visibleName TabItem (Enkeltfane)
 */
export class TabItem extends BaseComponent<IPivotItemProps, {}> {
  static defaultProps = {
    itemIcon: undefined,
  };

  render() {
    const { children, ...props } = this.props;
    return <div {...props}>{children}</div>;
  }
}
