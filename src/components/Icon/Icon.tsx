import { Icon as FabricIcon, IIconProps } from '@fluentui/react';
import * as React from 'react';

/**
 * @deprecated Komponenten er erstattet av Icon fra "@skatteetaten/ds-icons"
 *
 * visibleName Icon (Ikon)
 */
export const Icon: React.FC<IIconProps> = (props) => {
  const { className, ...rest } = props;
  return <FabricIcon {...rest} className={className} />;
};

Icon.defaultProps = {
  iconName: undefined,
  imageProps: undefined,
};
