import * as React from 'react';
import classnames from 'classnames';

import { getClassNames } from './NavigationTile.classNames';

import NavigationContent, {
  ContentProps
} from './NavigationContent/NavigationContent';

interface NavigationTileProps {
  /**
   * (to: String, content: JSXElement) => JSXElement
   */
  renderContent?: (...args: any[]) => any;
  contents: ContentProps[];
  /** Type av NavigationTile, default er sentrert*/
  type?: 'center' | 'left';
  /** Ikon plassering, default er sentrert*/
  alignIcon?: 'center' | 'right';
  /** Tittel plassering, default er sentrert  */
  alignTitle?: 'center' | 'left';
  /** Beskrivelse plassering, default er sentrert*/
  alignDescription?: 'center' | 'left';
  className?: string;
}

/**
 * @visibleName NavigationTile (Forsideknapp)
 */
export default class NavigationTile extends React.PureComponent<
  NavigationTileProps,
  {}
> {
  static defaultProps = {
    type: 'center',
    alignIcon: 'center',
    alignTitle: 'center',
    alignDescription: 'center'
  };

  render() {
    const {
      contents,
      renderContent,
      className,
      type,
      alignIcon,
      alignTitle,
      alignDescription,
      ...props
    } = this.props;
    const styles = getClassNames(this.props);
    return (
      <div>
        <nav
          {...props}
          className={classnames(
            styles.nav,
            getClassNames(this.props),
            className
          )}
          type={type}
        >
          <ul>
            {contents.map(({ to, id, ...rest }, index) => (
              <li
                key={`${to}-${index}`}
                id={id}
                className={styles.content}
                aria-describedby={id}
              >
                {renderContent ? (
                  renderContent(to, <NavigationContent {...rest} />)
                ) : (
                  <a href={to}>
                    <NavigationContent {...rest} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
