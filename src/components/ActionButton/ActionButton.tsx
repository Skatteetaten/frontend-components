import classnames from 'classnames';
import { ActionButton as FabricActionButton } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './ActionButton.classNames';
import { ActionButtonProps } from './ActionButton.types';

/**
 * @deprecated Komponenten er erstattet av InlineButton fra @skatteetaten/ds-buttons
 *
 * visibleName ActionButton (Aksjonsknapp)
 */
export class ActionButton extends React.PureComponent<ActionButtonProps, {}> {
  static NORMAL = 'large';
  static LARGE = 'xlarge';

  static defaultProps = {
    color: 'blue',
    disabled: false,
    border: false,
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
      border,
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
