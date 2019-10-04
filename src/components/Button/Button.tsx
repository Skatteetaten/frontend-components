import * as React from 'react';
import classnames from 'classnames';
import {
  DefaultButton,
  IButtonProps
} from 'office-ui-fabric-react/lib-commonjs/Button';
import { getClassNames as getStandardClassNames } from './Button.classNames';

interface ButtonProps extends IButtonProps {
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
}
/**
 * @visibleName Button (Knapp)
 */
export default class Button extends React.PureComponent<ButtonProps, {}> {
  static defaultProps = {
    primary: false,
    buttonType: 'primaryRounded',
    disabled: false,
    icon: undefined,
    onClick: undefined
  };
  render() {
    const { children, icon, className, ...props } = this.props;
    return (
      <DefaultButton
        {...props}
        className={classnames(getStandardClassNames(this.props), className)}
        iconProps={icon && { iconName: icon }}
      >
        {children}
      </DefaultButton>
    );
  }
}
