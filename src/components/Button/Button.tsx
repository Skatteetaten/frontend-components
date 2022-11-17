import classnames from 'classnames';
import { DefaultButton } from '@fluentui/react';
import * as React from 'react';
import { getClassNames as getStandardClassNames } from './Button.classNames';
import { ButtonProps } from './Button.types';

/**
 * @deprecated Komponenten er erstattet av Button fra @skatteetaten/ds-buttons
 *
 * visibleName Button (Knapp)
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { children, icon, className, iconProps, buttonType, ...rest } = props;

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
  buttonStyle: 'secondary',
  mobileFullWidth: false,
};
