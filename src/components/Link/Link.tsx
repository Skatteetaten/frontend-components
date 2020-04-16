import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { getClassNames } from './Link.classNames';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  /** Som standard rendres lenkene som a-elementer. Dette gir mulighet for å overstyre implementasjonen. */
  renderContent?: (classNames: string) => JSX.Element;
  styleAsAButton?: boolean;
  icon?: string;
  /** Om lenken skal åpnes i nytt vindu (target=blank) */
  openInNew?: boolean;
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
    openInNew,
    renderContent,
    styleAsAButton,
    ...htmlAttributes
  } = props;
  const styles = getClassNames();
  // if(styleAsAButton) {
  //   return (
  //     <a href={path} {...htmlAttributes} role="button">
  //       <Button buttonStyle="primaryLarge" tabIndex={-1}>
  //         {text}
  //       </Button>
  //     </a>
  //   )
  // }
  if (styleAsAButton) {
    return (
      <a
        href={path}
        className={classnames(styles.linkLookingLikeAButton)}
        {...htmlAttributes}
      >
        {text}
      </a>
    );
  }
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
export default Link;
