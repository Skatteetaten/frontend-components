import * as React from 'react';
import { ErrorSummaryProps } from './ErrorSummary.types';
import { getClassNames } from './ErrorSummary.classNames';
import { Link as SkeLink } from '../Link';
import { Icon } from '../Icon';

import classnames from 'classnames';

export const ErrorSummary: React.FC<ErrorSummaryProps> = (props) => {
  const {
    children,
    className,
    errors,
    id,
    onClick,
    titleTagName = 'h3',
  } = props;
  const styles = getClassNames(props);
  const TitleTag = titleTagName as keyof JSX.IntrinsicElements;
  const errorsExist = errors && errors.length;

  const scrollToId = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      element.focus();
    }
  };

  return errorsExist ? (
    <div
      className={classnames(className, styles.mainContainer)}
      id={id ? id : 'errorsummary'}
      role="status"
      aria-live="assertive"
    >
      <div className={styles.iconArea}>
        <div className={styles.errorIcon}>
          <Icon iconName={'Error'} />
        </div>
      </div>
      <div className={styles.errorListContainer}>
        <TitleTag>{props.title}</TitleTag>
        <ul>
          {errors.map((error: { id: string; error: string }) => (
            <li key={error.id}>
              <SkeLink
                linkGroup
                tabIndex={0}
                icon="ArrowForward"
                placement="before"
                text={error.error}
                onClick={() => {
                  onClick ? onClick(error.id) : scrollToId(error.id);
                }}
              />
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  ) : null;
};
