import classnames from 'classnames';
import {
  ISpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib-commonjs/Spinner';
import * as React from 'react';
import { getClassNames } from './Spinner.classNames';

export interface SpinnerProps extends ISpinnerProps {
  spinnerColor?: 'white' | 'black';
}
/**
 * @visibleName Spinner (Innlasting)
 */
const Spinner: React.FC<SpinnerProps> = props => {
  const { className, ...rest } = props;
  return (
    <FabricSpinner
      {...rest}
      className={classnames(getClassNames(props), className)}
    />
  );
};

// @ts-ignore
Spinner.Size = SpinnerSize;
Spinner.defaultProps = {
  // @ts-ignore TODO
  size: Spinner.Size.medium,
  spinnerColor: 'black'
};

export default Spinner;
