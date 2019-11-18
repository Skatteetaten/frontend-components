import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './LinkGroup.classNames';
import Icon from '../Icon';
export interface LinkGroupProps {
  links?: {
    text: string;
    path: string;
    /** Som standard rendres lenkene som a-elementer. Dette gir mulighet for å overstyre implementasjonen. */
    renderContent?: (
      path: string,
      text: string,
      classNames: string
    ) => JSX.Element;
  }[];
  className?: string;
}
const LinkGroup: React.FC<LinkGroupProps> = props => {
  const styles = getClassNames();
  return (
    <ul className={classnames(styles.arrowLinkList)}>
      {props.links &&
        props.links.map((link: any, index) => (
          <li
            className={classnames(styles.arrowLink, props.className)}
            key={index}
          >
            <Icon
              iconName={'arrowForward'}
              className={styles.icon}
              role="presentation"
            />
            {link.renderContent ? (
              link.renderContent(
                link.path,
                link.text,
                classnames(styles.arrowLinkA)
              )
            ) : (
              <a href={link.path} className={classnames(styles.arrowLinkA)}>
                {link.text}
              </a>
            )}
          </li>
        ))}
    </ul>
  );
};
export default LinkGroup;
