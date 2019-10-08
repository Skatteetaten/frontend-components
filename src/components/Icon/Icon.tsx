import {
  Icon as FabricIcon,
  IIconProps
} from 'office-ui-fabric-react/lib-commonjs/Icon';
import * as React from 'react';

export default class Icon extends React.PureComponent<IIconProps, {}> {
  static defaultProps = {
    iconName: undefined,
    imageProps: undefined
  };
  render() {
    const { className, ...props } = this.props;
    return <FabricIcon {...props} className={className} />;
  }
}
