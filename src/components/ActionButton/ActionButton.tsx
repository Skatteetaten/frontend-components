import classnames from 'classnames';
import { ActionButton as FabricActionButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import * as React from 'react';
import { getClassNames } from './ActionButton.classNames';
import { ButtonProps } from '../Button';

export interface ActionButtonProps extends ButtonProps {
  /** Ikon som skal vises foran lenketeksten */
  icon?: string;
  /** Ikon størrelse, to tilgjengelige størrelser */
  iconSize?: any;
  /** Fire forhåndsdefinerte farger, se eksempler */
  color?: 'blue' | 'black' | 'red' | 'green' | 'white';
  /**  true hvis ikonet skal plasseres etter tekst, ellers rendres det foran. */
  iconAfter?: boolean;
  ariaLabel?: string;
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
    onClick: undefined,
    ariaLabel: ''
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
          iconName: icon
        }}
        ariaLabel={ariaLabel}
      >
        {children}
      </FabricActionButton>
    );
  }
}
