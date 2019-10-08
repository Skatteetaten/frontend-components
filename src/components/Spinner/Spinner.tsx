import classnames from 'classnames';
import {
  ISpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib-commonjs/Spinner';
import * as React from 'react';
import { getClassNames } from './Spinner.classNames';

interface SpinnerProps extends ISpinnerProps {
  spinnerColor?: 'white' | 'black';
}
/**
 * @visibleName Spinner (Innlasting)
 */
export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
  static Size = SpinnerSize;
  static defaultProps = {
    size: Spinner.Size.medium,
    spinnerColor: 'black'
  };
  render() {
    const { className, ...props } = this.props;
    return (
      <FabricSpinner
        {...props}
        className={classnames(getClassNames(this.props), className)}
      />
    );
  }
}
