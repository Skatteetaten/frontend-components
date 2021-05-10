import * as React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { getClassNames } from './Link.classNames';
import { LinkProps } from './Link.types';

/**
 * @visibleName Link (Lenke)
 */

export const Link: React.FC<LinkProps> = (props) => {
  const {
    className,
    placement,
    icon,
    path,
    text,
    openInNew,
    skipLink,
    linkGroup,
    renderContent,
    ...htmlAttributes
  } = props;
  const styles = getClassNames(props);
  return (
    <span className={classnames(styles.linkContainer, props.className)}>
      {props.placement === 'before' && props.icon && (
        <Icon
          iconName={props.icon}
          className={styles.icon}
          role="presentation"
        />
      )}
      {renderContent ? (
        renderContent(classnames(styles.iconLink))
      ) : openInNew ? (
        <a
          href={props.path}
          className={classnames(styles.iconLink)}
          target="_blank"
          rel="noopener noreferrer"
          {...htmlAttributes}
        >
          {props.text}
        </a>
      ) : skipLink ? (
        <a
          href={props.path}
          className={classnames(styles.skipLink)}
          {...htmlAttributes}
        >
          {props.text}
        </a>
      ) : (
        <a
          href={props.path}
          className={classnames(styles.iconLink)}
          {...htmlAttributes}
        >
          {props.text}
        </a>
      )}

      {props.placement === 'after' && props.icon && (
        <Icon
          iconName={props.icon}
          className={styles.icon}
          role="presentation"
        />
      )}
    </span>
  );
};
