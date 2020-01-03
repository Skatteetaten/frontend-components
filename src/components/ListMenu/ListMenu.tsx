import classnames from 'classnames';
import {
  ContextualMenu,
  IContextualMenuProps
} from 'office-ui-fabric-react/lib/ContextualMenu';
import * as React from 'react';
import { getClassNames } from './ListMenu.classNames';

/**
 * @visibleName ListMenu (ListeMeny)
 */
const ListMenu: React.FC<IContextualMenuProps> = props => {
  const { className, target, hidden, items, ...rest } = props;

  return (
    <ContextualMenu
      {...rest}
      className={classnames(getClassNames(), className)}
      target={target}
      hidden={hidden}
      items={items}
    />
  );
};

export default ListMenu;
