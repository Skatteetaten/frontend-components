import * as React from 'react';
import classnames from 'classnames';

import {
  IconButton as FabricIconButton,
  IButtonProps
} from 'office-ui-fabric-react/lib-commonjs/Button';

import { getClassNames } from './IconButton.classNames';

interface IconButtonProps extends IButtonProps {
  /** Om sirkel skal vises eller ikke. Sirkel vil typisk benyttes når ikon fra material-design ikke har egen sirkel  */
  circle?: boolean;
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
}
/**
 * @visibleName IconButton (Ikonknapp)
 */
export default class IconButton extends React.PureComponent<
  IconButtonProps,
  {}
> {
  static defaultProps = {
    buttonType: 'default',
    circle: false,
    icon: undefined,
    title: undefined,
    disabled: undefined,
    onClick: undefined,
    alt: ' '
  };

  render() {
    const { icon, className, ...props } = this.props;
    return (
      <FabricIconButton
        {...props}
        className={classnames(getClassNames(this.props), className)}
        role="button"
        iconProps={{ iconName: icon }}
      />
    );
  }
}
