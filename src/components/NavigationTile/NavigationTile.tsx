import classnames from 'classnames';
import * as React from 'react';
import { NavigationContent, ContentProps } from './NavigationContent';
import { getClassNames } from './NavigationTile.classNames';
import { NavigationTileProps } from './NavigationTile.types';

/*
 * visibleName NavigationTile (Forsideknapp)
 */
export const NavigationTile: React.FC<NavigationTileProps> = (props) => {
  const {
    children,
    contents,
    className,
    type,
    alignIcon,
    alignTitle,
    alignDescription,
    ariaLabel,
    headingLevel,
    useButtons,
    ...rest
  } = props;
  const styles = getClassNames(props);
  return (
    <nav
      aria-label={ariaLabel}
      {...rest}
      className={classnames(styles.nav, getClassNames(props), className)}
    >
      <ul>
        {contents &&
          contents.map(({ ...rest }, index) => (
            <NavigationContent
              key={index + '.' + rest.to}
              className={styles.content}
              headingLevel={headingLevel}
              useButtons={useButtons}
              {...rest}
            />
          ))}
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<ContentProps>(child)) {
            return (
              <NavigationContent
                key={index + '.' + child.props.to}
                className={styles.content}
                headingLevel={headingLevel}
                useButtons={useButtons}
                {...child.props}
              >
                {child.props.children}
              </NavigationContent>
            );
          }
        })}
      </ul>
    </nav>
  );
};

NavigationTile.defaultProps = {
  alignDescription: 'center',
  alignIcon: 'center',
  alignTitle: 'center',
  type: 'center',
};
