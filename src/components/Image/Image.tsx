import * as React from 'react';
import { Image as FabricImage, IImageProps } from '@fluentui/react';

export interface ImageProps extends IImageProps {}
/**
 * @visibleName Image (Bilde)
 */
export const Image: React.FC<ImageProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <FabricImage {...rest} className={className}>
      {children}
    </FabricImage>
  );
};
