import classnames from 'classnames';
import {
  DefaultButton,
  IButtonProps
} from 'office-ui-fabric-react/lib-commonjs/Button';
import * as React from 'react';
import { getClassNames as getStandardClassNames } from './Button.classNames';

export interface ButtonProps extends IButtonProps {
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
  /** Benyttes for å definere type knapp som skal benyttes */
  buttonStyle?:
    | 'primary'
    | 'primaryRounded'
    | 'primaryRoundedFilled'
    | 'warning'
    | 'secondary'
    | 'primaryLarge';
}
/**
 * @visibleName Button (Knapp)
 */

const Button: React.FC<ButtonProps> = props => {
  const { children, icon, className, iconProps, ...rest } = props;
  return (
    <DefaultButton
      {...rest}
      className={classnames(getStandardClassNames(props), className)}
      iconProps={icon ? { iconName: icon } : iconProps}
    >
      {children}
    </DefaultButton>
  );
};



Button.defaultProps = {
  disabled: false,
  icon: undefined,
  onClick: undefined,
  primary: false,
  buttonStyle: 'primaryRounded'
};

export default Button;
