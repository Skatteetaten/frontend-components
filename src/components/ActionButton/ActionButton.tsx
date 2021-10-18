import classnames from 'classnames';
import { ActionButton as FabricActionButton } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './ActionButton.classNames';
import { ActionButtonProps } from './ActionButton.types';

/*
 * visibleName ActionButton (Aksjonsknapp)
 */
export class ActionButton extends React.PureComponent<ActionButtonProps, {}> {
  static NORMAL = 'icon';
  static LARGE = 'xxLarge';

  static defaultProps = {
    color: 'blue',
    disabled: false,
    icon: undefined,
    iconSize: ActionButton.NORMAL,
    onClick: undefined,
    ariaLabel: '',
  };

  render() {
    const {
      children,
      icon,
      ariaLabel,
      iconSize,
      color,
      className,
      ...props
    } = this.props;
    return (
      <FabricActionButton
        {...props}
        className={classnames(getClassNames(this.props), className)}
        color={color}
        iconProps={{
          iconName: icon,
        }}
        ariaLabel={ariaLabel}
      >
        {children}
      </FabricActionButton>
    );
  }
}
