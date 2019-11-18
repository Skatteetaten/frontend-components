import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { getClassNames } from './Link.classNames';

export interface LinkProps {
  className?: string;
  /** Som standard rendres lenkene som a-elementer. Dette gir mulighet for å overstyre implementasjonen. */
  renderContent?: (classNames: string) => JSX.Element;
  icon?: string;
  path?: string;
  placement?: 'after' | 'before';
  text?: string;
}

const Link: React.FC<LinkProps> = props => {
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
      {props.renderContent ? (
        props.renderContent(classnames(styles.iconLink))
      ) : (
        <a href={props.path} className={classnames(styles.iconLink)}>
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
