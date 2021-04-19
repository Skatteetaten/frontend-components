import classnames from 'classnames';
import React from 'react';
import { Grid, StepProps } from '../index';
import { getClassNames } from './StepList.classNames';

export interface StepListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Klassenavn som kan benyttes for å overstyre css */
  className?: string;
  /** Label som kan settes for hele steplisten */
  ariaLabel?: string;
  children?: React.ReactNode;
}
/**
 * @visibleName StepList (StegListe)
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
