import classnames from 'classnames';
import {
  IProgressIndicatorProps,
  ProgressIndicator
} from 'office-ui-fabric-react/lib-commonjs/ProgressIndicator';
import * as React from 'react';
import { getClassNames } from './ProgressBar.classNames';

/**
 * @visibleName ProgressBar (Fremdriftsvisning)
 */
const ProgressBar: React.FC<IProgressIndicatorProps> = props => {
  const { className, ...rest } = props;
  return (
    <ProgressIndicator
      {...rest}
      className={classnames(getClassNames(), className)}
    />
  );
};

ProgressBar.defaultProps = {
  /** Overstyring av stiler */
  className: undefined,
  /** Beskrivelse som vises under fremdriftsindikatoren */
  description: undefined,
  /** Emne som vises over fremdriftsindikatoren */
  label: undefined,
  /** Prosent fullført (fra 0.00 til 1.00) */
  percentComplete: undefined
};

export default ProgressBar;
