import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getClassNames } from './Spinner.classNames';

import {
  Spinner as FabricSpinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib-commonjs/Spinner';

/**
 * @visibleName Spinner (Innlasting)
 */
export default class Spinner extends React.PureComponent {
  static Size = SpinnerSize;
  static propTypes = {
    /** For ytterligere stiling */
    className: PropTypes.string,
    /** Farge på spinner */
    spinnerColor: PropTypes.oneOf(['white', 'black']),
    /** Størrelse på spinner */
    size: PropTypes.oneOf([
      Spinner.Size.xSmall,
      Spinner.Size.small,
      Spinner.Size.medium,
      Spinner.Size.large
    ]),
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
  };
  static defaultProps = {
    size: Spinner.Size.medium,
    spinnerColor: 'black'
  };
  render() {
    const { size, className, id, spinnerColor, ...props } = this.props;

    return (
      <div id={id}>
        <FabricSpinner
          {...props}
          className={classnames(getClassNames(this.props), className)}
          spinnerColor={spinnerColor}
          size={size}
        />
      </div>
    );
  }
}
