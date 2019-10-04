import * as React from 'react';
import {
  Icon as FabricIcon,
  IIconProps
} from 'office-ui-fabric-react/lib-commonjs/Icon';

interface IconProps extends IIconProps {}
export default class Icon extends React.PureComponent<IconProps, {}> {
  static defaultProps = {
    iconName: undefined,
    imageProps: undefined
  };
  render() {
    const { className, ...props } = this.props;
    return <FabricIcon {...props} className={className} />;
  }
}
