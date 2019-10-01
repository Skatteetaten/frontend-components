import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon as FabricIcon } from 'office-ui-fabric-react/lib-commonjs/Icon';

export default class Icon extends React.PureComponent {
  static propTypes = {
    ariaLabel: PropTypes.string,
    iconName: PropTypes.string,
    /** Når type er image, brukes disse parameterne til å konfigurere bildet som skal vises som ikon */
    imageProps: PropTypes.object,
    className: PropTypes.string
  };
  static defaultProps = {
    iconName: undefined,
    imageProps: undefined
  };
  render() {
    const { iconName, className, ariaLabel, style, ...props } = this.props;
    return (
      <FabricIcon
        {...props}
        iconName={iconName}
        aria-label={!ariaLabel ? iconName + ' icon' : ariaLabel}
        className={className}
        style={style}
      />
    );
  }
}
