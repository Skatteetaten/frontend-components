import * as React from 'react';
import classnames from 'classnames';

import {
  ActionButton as FabricActionButton,
  IButtonProps
} from 'office-ui-fabric-react/lib-commonjs/Button';
import { getClassNames } from './ActionButton.classNames';

interface ActionButtonProps extends IButtonProps {
  /** Ikon som skal vises foran lenketeksten */
  icon?: string;
  /** Ikon størrelse, to tilgjengelige størrelser */
  iconSize?: any;
  /** Fire forhåndsdefinerte farger, se eksempler*/
  color?: 'blue' | 'black' | 'red' | 'green' | 'white';
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
    onClick: undefined,
    icon: undefined,
    iconSize: ActionButton.NORMAL,
    color: 'blue',
    disabled: false
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
