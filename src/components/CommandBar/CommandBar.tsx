import React from 'react';

import {
  CommandBar as FabricCommandBar,
  ICommandBarItemProps
} from 'office-ui-fabric-react/lib-commonjs/CommandBar';
import { CommandBarButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import Dropdown from '@skatteetaten/frontend-components/Dropdown';
import { getClassNames } from './CommandBar.classNames';
import classnames from 'classnames';

interface CommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CommandBarItem[];
  farItems?: CommandBarItem[];
  ariaLabel?: string;
  className?: string;
}

interface CommandBarItem extends ICommandBarItemProps {
  selected?: boolean;
  selectedColor?: string;
}
/**
 * @visibleName CommandBar (Menyknapper)
 */
const CommandBar: React.FC<CommandBarProps> = props => {
  const { items, farItems, ariaLabel, className, ...rest } = props;
  const { commandBar } = getClassNames(props);

  return (
    <FabricCommandBar
      buttonAs={Custom}
      {...rest}
      items={items}
      className={classnames(commandBar, className)}
      farItems={farItems}
      ariaLabel={ariaLabel}
    />
  );
};

const Custom = (props: any) => {
  const { tabButton } = getClassNames(props);
  const { className, children, ...rest } = props;
  return (
    <CommandBarButton className={classnames(tabButton, className)} {...rest}>
      {children}
    </CommandBarButton>
  );
};

export default CommandBar;
