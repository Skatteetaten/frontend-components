import classnames from 'classnames';
import {
  IPivotProps,
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize
} from 'office-ui-fabric-react/lib-commonjs/Pivot';
import * as React from 'react';
import { getClassNames } from './Tabs.classNames';

/**
 * @visibleName Tabs (Arkfane)
 */
export default class Tabs extends React.PureComponent<IPivotProps, {}> {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <Pivot
        linkFormat={PivotLinkFormat.tabs}
        linkSize={PivotLinkSize.large}
        {...props}
        // @ts-ignore TODO
        className={classnames(getClassNames(this.props), className)}
      >
        {React.Children.map(this.props.children, child => {
          //@ts-ignore //todo
          return <PivotItem {...child.props} />;
        })}
      </Pivot>
    );
  }
}
