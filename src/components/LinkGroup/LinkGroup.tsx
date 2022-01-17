import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './LinkGroup.classNames';
import { Link as SkeLink } from '../Link';
import { LinkGroupProps } from './LinkGroup.types';

/*
 * visibleName LinkGroup (Lenkegruppe)
 */
export const LinkGroup: React.FC<LinkGroupProps> = (props) => {
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
                <SkeLink
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
