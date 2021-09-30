import * as React from 'react';
import { ErrorSummaryProps } from './ErrorSummary.types';
import { getClassNames } from './ErrorSummary.classNames';
import { Link as SkeLink } from '../Link';
import { Icon } from '../Icon';

import classnames from 'classnames';

export const ErrorSummary: React.FC<ErrorSummaryProps> = (props) => {
  const { children, className, id, onClick, titleTagName = 'h3' } = props;
  const styles = getClassNames(props);
  const TitleTag = titleTagName as keyof JSX.IntrinsicElements;

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      element.focus();
    }
  };

  return (
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
          {props.errors.map((error: { id: string; error: string }) => (
            <li key={error.id}>
              <SkeLink
                linkGroup
                tabIndex={0}
                icon="ArrowForward"
                placement="before"
                text={error.error}
                onClick={() => {
                  if (onClick) {
                    onClick(error.id);
                  } else {
                    scrollToId(error.id);
                  }
                }}
              />
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
};
