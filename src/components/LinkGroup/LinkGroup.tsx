import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './LinkGroup.classNames';
import Link from '../Link/Link';

export interface Link extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  path: string;
  /** Som standard rendres lenkene Link. Dette gir mulighet for å overstyre implementasjonen. */
  renderContent?: (
    path: string,
    text: string,
    classNames: string,
    htmlAttributes
  ) => JSX.Element;
}

export interface LinkGroupProps {
  links?: Link[];
  className?: string;
}
/**
 * @visibleName LinkGroup (Lenkegruppe)
 */
const LinkGroup: React.FC<LinkGroupProps> = props => {
  const styles = getClassNames();
  return (
    <ul className={classnames(styles.arrowLinkList)}>
      {props.links &&
        props.links.map((link, index) => {
          const { text, path, renderContent, ...htmlAttributes } = link;
          return (
            <li
              className={classnames(styles.arrowLink, props.className)}
              key={index}
            >
              {link.renderContent ? (
                link.renderContent(
                  link.path,
                  link.text,
                  classnames(),
                  htmlAttributes
                )
              ) : (
                <Link
                  linkGroup
                  icon="ArrowForward"
                  placement="before"
                  text={text}
                  path={path}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};
export default LinkGroup;
