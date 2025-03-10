import classnames from 'classnames';
import { IProgressIndicatorProps, ProgressIndicator } from '@fluentui/react';
import React from 'react';
import { getClassNames } from './ProgressBar.classNames';
import { BrandContext } from '../SkeBasis';

/**
 * @deprecated Komponenten er erstattet av Spinner fra "@skatteetaten/ds-progress"
 * visibleName ProgressBar (Fremdriftsvisning)
 */
export const ProgressBar: React.FC<IProgressIndicatorProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <BrandContext.Consumer>
      {({ tag }) => (
        <ProgressIndicator
          {...rest}
          className={classnames(getClassNames(tag), className)}
        />
      )}
    </BrandContext.Consumer>
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
  percentComplete: undefined,
};
