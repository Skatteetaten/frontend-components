import React from 'react';

import {
  CommandBar as FabricCommandBar,
  ICommandBarItemProps
} from 'office-ui-fabric-react/lib-commonjs/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib-commonjs/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

interface CommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CommandBarItem[];
  farItems: CommandBarItem[];
  ariaLabel: string;
}

interface CommandBarItem extends ICommandBarItemProps {
  selected: boolean;
}
/**
 * @visibleName CommandBar (Menyknapper)
 */
const CommandBar: React.FC<CommandBarProps> = props => {
  const { items, farItems, ariaLabel, ...rest } = props;

  return (
    <FabricCommandBar
      buttonAs={Custom}
      {...rest}
      items={items}
      farItems={farItems}
      ariaLabel={ariaLabel}
    />
  );
};

const Custom = (props: IButtonProps) => {
  console.log(props);
  const { iconProps } = props;
  return (
    <ActionButton icon={iconProps ? iconProps.iconName : null}>
      {props.children}
    </ActionButton>
  );
};

export default CommandBar;
