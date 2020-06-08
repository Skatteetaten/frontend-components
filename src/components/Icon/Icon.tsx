import { Icon as FabricIcon, IIconProps } from 'office-ui-fabric-react';
import * as React from 'react';

export const Icon: React.FC<IIconProps> = (props) => {
  const { className, ...rest } = props;
  return <FabricIcon {...rest} className={className} />;
};

Icon.defaultProps = {
  iconName: undefined,
  imageProps: undefined,
};
