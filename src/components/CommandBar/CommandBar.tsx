import * as React from 'react';

import {
  CommandBarButton,
  CommandBar as FabricCommandBar,
  ICommandBarItemProps,
} from '@fluentui/react';
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
/*
 * visibleName CommandBar (Menyknapper)
 */
const CommandBar: React.FC<CommandBarProps> = (props) => {
  const { items, farItems, ariaLabel, className, ...rest } = props;
  const { commandBar } = getClassNames(props);

  return (
    <nav aria-label={ariaLabel}>
      <FabricCommandBar
        buttonAs={Custom}
        {...rest}
        items={items}
        className={classnames(commandBar, className)}
        farItems={farItems}
      />
    </nav>
  );
};

CommandBar.defaultProps = {
  items: [],
  farItems: [],
  ariaLabel: '',
  className: '',
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
