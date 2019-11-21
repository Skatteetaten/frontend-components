import classnames from 'classnames';
import { ActionButton as FabricActionButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import * as React from 'react';
import { getClassNames } from './ActionButton.classNames';
import { ButtonProps } from '../Button';

enum ActionButtonColor {
  blue = 'blue',
  black = 'black',
  red = 'red',
  green = 'green',
  white = 'white'
};
export interface ActionButtonProps extends ButtonProps {
  /** Ikon som skal vises foran lenketeksten */
  icon?: string;
  /** Ikon størrelse, to tilgjengelige størrelser */
  iconSize?: any;
  /** Fire forhåndsdefinerte farger, se eksempler */
  color?: ActionButtonColor;
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
