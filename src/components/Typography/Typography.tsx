import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './Typography.classNames';
import { TypographyProps } from './Typography.types';

/**
 * @deprecated Komponenten er erstattet av "@skatteetaten/ds-typography"
 *
 * visibleName Typography (Typografi)
 */
export const Typography: React.FC<TypographyProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={classnames(getClassNames(props), className)}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  className: undefined,
  noBorder: undefined,
  noColor: undefined,
  noMargin: undefined,
  noSize: undefined,
};
