import classnames from 'classnames';
import {
  IPivotItemProps,
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
const Tabs: React.FC<IPivotProps> = props => {
  const { children, className, ...rest } = props;
  return (
    <Pivot
      {...rest}
      linkFormat={PivotLinkFormat.tabs}
      linkSize={PivotLinkSize.large}
      className={classnames(getClassNames(), className)}
    >
      {React.Children.map(props.children, child => {
        if (React.isValidElement<IPivotItemProps>(child))
          return <PivotItem {...child.props} />;
      })}
    </Pivot>
  );
};

export default Tabs;
