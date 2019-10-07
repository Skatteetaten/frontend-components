import * as React from 'react';
import classnames from 'classnames';

import { getClassNames } from './ProgressBar.classNames';

import {
  ProgressIndicator,
  IProgressIndicatorProps
} from 'office-ui-fabric-react/lib-commonjs/ProgressIndicator';

interface ProgressBarProps extends IProgressIndicatorProps {}
/**
 * @visibleName ProgressBar (Innlasting)
 */
export default class ProgressBar extends React.PureComponent<
  ProgressBarProps,
  {}
> {
  static defaultProps = {
    /** Emne som vises over fremdriftsindikatoren */
    label: undefined,
    /** Beskrivelse som vises under fremdriftsindikatoren */
    description: undefined,
    /** Prosent fullført (fra 0.00 til 1.00) */
    percentComplete: undefined,
    /** Overstyring av stiler */
    className: undefined
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <ProgressIndicator
        {...props}
        className={classnames(getClassNames(this.props), className)}
      />
    );
  }
}
