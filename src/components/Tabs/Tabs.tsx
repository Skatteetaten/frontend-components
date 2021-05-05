import classnames from 'classnames';
import {
  IPivotItemProps,
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize,
} from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './Tabs.classNames';
import { TabProps } from './Tabs.types';

/**
 * @visibleName Tabs (Arkfaner)
 */

export const Tabs: React.FC<TabProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Pivot
      {...rest}
      linkFormat={PivotLinkFormat.tabs}
      linkSize={PivotLinkSize.large}
      className={classnames(getClassNames(props), className)}
    >
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement<IPivotItemProps>(child))
          return <PivotItem {...child.props} />;
      })}
    </Pivot>
  );
};
