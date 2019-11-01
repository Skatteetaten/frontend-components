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

interface Spinner extends React.FC<SpinnerProps> {
  Size?:
    | SpinnerSize
    | {
        xSmall: 0;
        small: 1;
        medium: 2;
        large: 3;
      };
}
/**
 * @visibleName Spinner (Innlasting)
 */
const Spinner: Spinner = props => {
  const { className, ...rest } = props;
  return (
    <FabricSpinner
      {...rest}
      className={classnames(getClassNames(props), className)}
    />
  );
};

Spinner.Size = SpinnerSize;
Spinner.defaultProps = {
  size: Spinner.Size.medium,
  spinnerColor: 'black'
};

export default Spinner;
