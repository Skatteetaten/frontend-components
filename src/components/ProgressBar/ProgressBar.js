import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getClassNames } from './ProgressBar.classNames';

import { ProgressIndicator } from 'office-ui-fabric-react/lib-commonjs/ProgressIndicator';

/**
 * @visibleName ProgressBar (Innlasting)
 */
export default class ProgressBar extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    percentComplete: PropTypes.number,
    id: PropTypes.string,
    className: PropTypes.string
  };

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
    const {
      label,
      description,
      percentComplete,
      id,
      className,
      ...props
    } = this.props;
    return (
      <div id={id} aria-describedby={id}>
        <ProgressIndicator
          {...props}
          className={classnames(getClassNames(this.props), className)}
          aria-label={label}
          label={label}
          description={description}
          percentComplete={percentComplete}
        />
      </div>
    );
  }
}
