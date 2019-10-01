import * as React from 'react';
import PropTypes from 'prop-types';
import { Image as FabricImage } from 'office-ui-fabric-react/lib-commonjs/Image';

/**
 * @visibleName Image (Bilde)
 */
export default class Image extends React.PureComponent {
  static propTypes = {
    coverStyle: PropTypes.oneOf(['landscape', 'portrait']),
    imageFit: PropTypes.oneOf(['center', 'contain', 'cover', 'none']),
    className: PropTypes.string
  };

  render() {
    const { children, className, ...props } = this.props;
    return (
      <FabricImage {...props} className={className}>
        {children}
      </FabricImage>
    );
  }
}
