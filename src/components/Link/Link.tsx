import * as React from 'react';
import classnames from 'classnames';
import { Icon } from '../index';
import { getClassNames } from './Link.classNames';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  /** Links are normally rendered as a-tags. This makes is possible to use a different markup. */
  renderContent?: (classNames: string) => JSX.Element;
  icon?: string;
  /** If the link should open in an new window (target=blank) */
  openInNew?: boolean;
  /** If the link is an invisible "skip to main content" link */
  skipLink?: boolean;
  path?: string;
  placement?: 'after' | 'before';
  text?: string;
}

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
    renderContent,
    ...htmlAttributes
  } = props;
  const styles = getClassNames();
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
