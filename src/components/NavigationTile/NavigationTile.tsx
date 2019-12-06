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
  contents?: ContentProps[];
  /** Type av NavigationTile, default er sentrert */
  type?: 'center' | 'left';
  /** Ikon plassering, default er sentrert */
  alignIcon?: 'center' | 'right';
  /** Tittel plassering, default er sentrert  */
  alignTitle?: 'center' | 'left';
  /** Beskrivelse plassering, default er sentrert */
  alignDescription?: 'center' | 'left';
  className?: string;
  /** aria-label */
  ariaLabel?: string;
}

/**
 * @visibleName NavigationTile (Forsideknapp)
 */
const NavigationTile: React.FC<NavigationTileProps> = props => {
  const {
    children,
    contents,
    className,
    type,
    alignIcon,
    alignTitle,
    alignDescription,
    ariaLabel,
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
              {...rest}
            />
          ))}
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<ContentProps>(child)) {
            return (
              <NavigationContent
                key={index + '.' + child.props.to}
                className={styles.content}
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
  type: 'center'
};

export default NavigationTile;
