import classnames from 'classnames';
import * as React from 'react';
import { IconButton as FabricIconButton } from '@fluentui/react';
import { getClassNames } from './IconButton.classNames';
import { IconButtonProps } from './IconButton.types';

/**
 * @visibleName IconButton (Ikonknapp)
 */
export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, className, ...rest } = props;
  return (
    // @ts-ignore
    <FabricIconButton
      {...rest}
      className={classnames(getClassNames(props), className)}
      iconProps={{ iconName: icon }}
    />
  );
};

IconButton.defaultProps = {
  alt: ' ',
  circle: false,
  disabled: undefined,
  icon: undefined,
  onClick: undefined,
  title: undefined,
};