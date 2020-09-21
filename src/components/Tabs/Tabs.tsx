import classnames from 'classnames';
import {
  IPivotItemProps,
  IPivotProps,
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize,
} from 'office-ui-fabric-react';
import * as React from 'react';
import { getClassNames } from './Tabs.classNames';

export interface TabProps extends IPivotProps {
  /** Border rundt tabs */
  border?: boolean;
  /** Underline for å fremheve tabs */
  underline?: boolean;
}

/**
 * @visibleName Tabs (Arkfane)
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
