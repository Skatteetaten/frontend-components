import * as React from 'react';
import { IPivotItemProps } from 'office-ui-fabric-react/lib-commonjs/Pivot';
import { BaseComponent } from '@uifabric/utilities';

/**
 * @visibleName TabItem (Enkeltfane)
 */
export default class TabItem extends BaseComponent<IPivotItemProps, {}> {
  static defaultProps = {
    itemIcon: undefined
  };

  render() {
    const { children, ...props } = this.props;
    return <div {...props}>{children}</div>;
  }
}
