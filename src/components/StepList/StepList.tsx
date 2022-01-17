import classnames from 'classnames';
import React from 'react';
import { StepProps } from './Step';
import { Grid } from '../Grid';
import { getClassNames } from './StepList.classNames';
import { StepListProps } from './StepList.types';

/*
 * visibleName StepList (Stegliste)
 */

export const StepList = (props: StepListProps) => {
  const { children, ariaLabel, className } = props;
  const styles = getClassNames(props);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={classnames(styles.stepList, className)}
    >
      <Grid padding="0">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<StepProps>(child))
            return React.cloneElement(child, {
              stepNumber: index + 1,
            });
        })}
      </Grid>
    </div>
  );
};
