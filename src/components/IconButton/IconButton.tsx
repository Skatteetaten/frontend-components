import classnames from 'classnames';
import * as React from 'react';

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
  /** Gjør knappen til hovedknapp med fylt farge */
  type?: 'default' | 'small' | 'medium' | 'large' | 'xLarge';
}
/**
 * @visibleName IconButton (Ikonknapp)
 */
export default class IconButton extends React.PureComponent<
  IconButtonProps,
  {}
> {
  static defaultProps = {
    alt: ' ',
    circle: false,
    disabled: undefined,
    icon: undefined,
    onClick: undefined,
    title: undefined,
    type: 'default'
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
