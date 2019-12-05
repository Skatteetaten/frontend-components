import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { getClassNames } from './Link.classNames';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  /** Som standard rendres lenkene som a-elementer. Dette gir mulighet for å overstyre implementasjonen. */
  renderContent?: (classNames: string) => JSX.Element;
  icon?: string;
  path?: string;
  placement?: 'after' | 'before';
  text?: string;
}

const Link: React.FC<LinkProps> = props => {
  const {
    className,
    placement,
    icon,
    path,
    text,
    renderContent,
    ...htmlAttributes
  } = props;
  const styles = getClassNames();
  return (
    <p className={classnames(styles.linkContainer, props.className)}>
      {props.placement === 'before' && (
        <Icon
          iconName={props.icon}
          className={styles.icon}
          role="presentation"
        />
      )}
      {renderContent ? (
        renderContent(classnames(styles.iconLink))
      ) : (
        <a
          href={props.path}
          className={classnames(styles.iconLink)}
          {...htmlAttributes}
        >
          {props.text}
        </a>
      )}

      {props.placement === 'after' && (
        <Icon
          iconName={props.icon}
          className={styles.icon}
          role="presentation"
        />
      )}
    </p>
  );
};
export default Link;
