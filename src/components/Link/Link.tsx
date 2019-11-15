import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { getClassNames } from './Link.classNames';

export interface LinkProps {
  className?: string;
  icon?: string;
  path?: string;
  placement?: 'after' | 'before';
  text?: string;
}

const Link: React.FC<LinkProps> = props => {
  const [styles] = React.useState(getClassNames(props));
  return (
    <p className={classnames(styles.linkContainer, props.className)}>
      {props.placement === 'before' && (
        <Icon
          iconName={props.icon}
          className={styles.icon}
          role="presentation"
        />
      )}
      <a href={props.path} className={classnames(styles.iconLink)}>
        {props.text}
      </a>
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
