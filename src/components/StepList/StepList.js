import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';
import { getClassNames } from './StepList.classNames';
import classnames from 'classnames';

/**
 * @visibleName StepList (Prosessviser)
 */
export default class StepList extends React.PureComponent {
  static propTypes = {
    /** Klassenavn som kan benyttes for å overstyre css */
    className: PropTypes.string
  };

  render() {
    const { stepId, children, className } = this.props;
    const styles = getClassNames(this.props);

    return (
      <div className={classnames(styles.stepList, className)}>
        <Grid>
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              stepNumber: index + 1,
              id: stepId + index + 1
            })
          )}
        </Grid>
      </div>
    );
  }
}
