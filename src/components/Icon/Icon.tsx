import {
  Icon as FabricIcon,
  IIconProps
} from 'office-ui-fabric-react/lib-commonjs/Icon';
import * as React from 'react';

/**
 * @visibleName Icon (Ikon)
 */
const Icon: React.FC<IIconProps> = props => {
  const { className, ...rest } = props;
  return <FabricIcon {...rest} className={className} />;
};

Icon.defaultProps = {
  iconName: undefined,
  imageProps: undefined
};

export default Icon;
