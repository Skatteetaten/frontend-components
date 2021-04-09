import classnames from 'classnames';
import {
  ISpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize,
} from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './Spinner.classNames';

export interface SpinnerProps extends ISpinnerProps {
  spinnerColor?: 'white' | 'black';
}

/**
 * @visibleName Spinner (Spinner)
 */
export class Spinner extends React.PureComponent<SpinnerProps> {
  static Size = SpinnerSize;
  static defaultProps = {
    size: SpinnerSize.medium,
    spinnerColor: 'black',
  };
  render() {
    const { className, ...rest } = this.props;
    return (
      <FabricSpinner
        {...rest}
        className={classnames(getClassNames(this.props), className)}
      />
    );
  }
}
