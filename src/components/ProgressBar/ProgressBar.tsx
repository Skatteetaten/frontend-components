import classnames from 'classnames';
import {
  IProgressIndicatorProps,
  ProgressIndicator
} from 'office-ui-fabric-react/lib-commonjs/ProgressIndicator';
import * as React from 'react';
import { getClassNames } from './ProgressBar.classNames';

/**
 * @visibleName ProgressBar (Innlasting)
 */
export default class ProgressBar extends React.PureComponent<
  IProgressIndicatorProps,
  {}
> {
  static defaultProps = {
    /** Overstyring av stiler */
    className: undefined,
    /** Beskrivelse som vises under fremdriftsindikatoren */
    description: undefined,
    /** Emne som vises over fremdriftsindikatoren */
    label: undefined,
    /** Prosent fullført (fra 0.00 til 1.00) */
    percentComplete: undefined
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <ProgressIndicator
        {...props}
        // @ts-ignore TODO
        className={classnames(getClassNames(this.props), className)}
      />
    );
  }
}
