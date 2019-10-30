import classnames from 'classnames';
import {
  ActionButton as FabricActionButton,
  IButtonProps
} from 'office-ui-fabric-react/lib-commonjs/Button';
import * as React from 'react';
import { getClassNames } from './ActionButton.classNames';
import { ISplitButtonClassNames } from 'office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames';

export interface ActionButtonProps extends IButtonProps {
  /** Ikon som skal vises foran lenketeksten */
  icon?: string;
  /** Ikon størrelse, to tilgjengelige størrelser */
  iconSize?: any;
  /** Fire forhåndsdefinerte farger, se eksempler */
  color?: 'blue' | 'black' | 'red' | 'green' | 'white';
  /**
   * Skjulte props
   */
  /** @ignore */
  allowDisabledFocus?: IButtonProps['allowDisabledFocus'];
  /** @ignore */
  checked?: IButtonProps['checked'];
  /** @ignore */
  disabled?: IButtonProps['disabled'];
  /** @ignore */
  split?: IButtonProps['split'];
  /** @ignore */
  getSplitButtonClassNames?: IButtonProps['getSplitButtonClassNames'];
  /** @ignore */
  splitButtonAriaLabel?: IButtonProps['splitButtonAriaLabel'];
  /** @ignore */
  splitButtonMenuProps?: IButtonProps['splitButtonMenuProps'];
}
/**
 * @visibleName ActionButton (Aksjonsknapp)
 */
export default class ActionButton extends React.PureComponent<
  ActionButtonProps,
  {}
> {
  static NORMAL = 'icon';
  static LARGE = 'xxLarge';

  static defaultProps = {
    color: 'blue',
    disabled: false,
    icon: undefined,
    iconSize: ActionButton.NORMAL,
    onClick: undefined
  };

  render() {
    const { children, icon, iconSize, color, className, ...props } = this.props;
    return (
      <FabricActionButton
        {...props}
        className={classnames(getClassNames(this.props), className)}
        role="button"
        color={color}
        iconProps={{
          iconName: icon
        }}
      >
        {children}
      </FabricActionButton>
    );
  }
}
