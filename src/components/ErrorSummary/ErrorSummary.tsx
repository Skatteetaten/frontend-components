import * as React from 'react';
import { ErrorSummaryProps } from './ErrorSummary.types';
import { getClassNames } from './ErrorSummary.classNames';
import { Link as SkeLink } from '../Link';
import { Icon } from '../Icon';

import classnames from 'classnames';

export const ErrorSummary: React.FC<ErrorSummaryProps> = (props) => {
  const {
    id,
    shadowRootNode,
    titleTagName = 'h3',
    className,
    errors,
    onClick,
    children,
  } = props;
  const styles = getClassNames(props);
  const TitleTag = titleTagName as keyof JSX.IntrinsicElements;
  const errorsExist = errors && errors.length;

  const scrollToId = (elementId: string) => {
    const element = shadowRootNode
      ? shadowRootNode.getElementById(elementId)
      : document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      element.focus();
    }
  };

  return errorsExist || children ? (
    <div
      className={classnames(className, styles.mainContainer)}
      id={id}
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
        {errors && (
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
        )}
        {children}
      </div>
    </div>
  ) : null;
};
