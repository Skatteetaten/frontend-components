import * as React from 'react';
import {
  Image as FabricImage,
  IImageProps
} from 'office-ui-fabric-react/lib-commonjs/Image';

interface ImageProps extends IImageProps {}
/**
 * @visibleName Image (Bilde)
 */
export default class Image extends React.PureComponent<ImageProps, {}> {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <FabricImage {...props} className={className}>
        {children}
      </FabricImage>
    );
  }
}
