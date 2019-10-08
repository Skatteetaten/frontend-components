import classnames from 'classnames';
import React from 'react';
import Grid from '../Grid/Grid';
import { getClassNames } from './StepList.classNames';

interface StepListProps {
  /** Klassenavn som kan benyttes for å overstyre css */
  className?: string;
}
/**
 * @visibleName StepList (Prosessviser)
 */
export default class StepList extends React.PureComponent<StepListProps, {}> {
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
