import classnames from 'classnames';
import React from 'react';
import Grid from '../Grid/Grid';
import { getClassNames } from './StepList.classNames';
import { StepProps } from './Step/Step';

interface StepListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Klassenavn som kan benyttes for å overstyre css */
  className?: string;
  children?: React.ReactNode;
}
/**
 * @visibleName StepList (Prosessviser)
 */

const StepList = (props: StepListProps) => {
  const { children, className } = props;
  const styles = getClassNames(props);

  return (
    <div className={classnames(styles.stepList, className)}>
      <Grid padding="0">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<StepProps>(child))
            return React.cloneElement(child, {
              stepNumber: index + 1
            });
        })}
      </Grid>
    </div>
  );
};

export default StepList;
