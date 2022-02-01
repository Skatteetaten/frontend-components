import classnames from 'classnames';
import { IPivotItemProps, Pivot, PivotItem } from '@fluentui/react';

import * as React from 'react';
import { getClassNames } from './Tabs.classNames';
import { TabProps } from './Tabs.types';
import { BrandContext } from '../SkeBasis';

/*
 * visibleName Tabs (Arkfaner)
 */

export const Tabs: React.FC<TabProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <BrandContext.Consumer>
      {({ tag }) => (
        <Pivot
          {...rest}
          linkFormat={'tabs'}
          linkSize={'large'}
          className={classnames(getClassNames(props, tag), className)}
        >
          {React.Children.map(props.children, (child) => {
            if (React.isValidElement<IPivotItemProps>(child))
              return <PivotItem {...child.props} />;
          })}
        </Pivot>
      )}
    </BrandContext.Consumer>
  );
};
