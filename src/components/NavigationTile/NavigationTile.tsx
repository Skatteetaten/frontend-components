import classnames from 'classnames';
import * as React from 'react';
import NavigationContent, {
  ContentProps
} from './NavigationContent/NavigationContent';
import { getClassNames } from './NavigationTile.classNames';

export interface NavigationTileProps {
  /**
   * (to: String, content: JSXElement) => JSXElement
   */
  renderContent?: (...args: any[]) => any;
  contents: ContentProps[];
  /** Type av NavigationTile, default er sentrert */
  type?: 'center' | 'left';
  /** Ikon plassering, default er sentrert */
  alignIcon?: 'center' | 'right';
  /** Tittel plassering, default er sentrert  */
  alignTitle?: 'center' | 'left';
  /** Beskrivelse plassering, default er sentrert */
  alignDescription?: 'center' | 'left';
  className?: string;
}

/**
 * @visibleName NavigationTile (Forsideknapp)
 */
const NavigationTile: React.FC<NavigationTileProps> = props => {
  const {
    contents,
    renderContent,
    className,
    type,
    alignIcon,
    alignTitle,
    alignDescription,
    ...rest
  } = props;
  const styles = getClassNames(props);
  return (
    <div>
      {/*
         // @ts-ignore TODO */}
      <nav
        {...rest}
        className={classnames(styles.nav, getClassNames(props), className)}
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
                // @ts-ignore TODO
                renderContent(to, <NavigationContent {...rest} />)
              ) : (
                <a href={to}>
                  {/*
                    // @ts-ignore TODO */}
                  <NavigationContent {...rest} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

NavigationTile.defaultProps = {
  alignDescription: 'center',
  alignIcon: 'center',
  alignTitle: 'center',
  type: 'center'
};

export default NavigationTile;
