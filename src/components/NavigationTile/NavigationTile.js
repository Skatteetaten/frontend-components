import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getClassNames } from './NavigationTile.classNames';
import Icon from '../Icon/Icon';

const Content = ({ icon, title, description }) => (
  <div>
    <Icon iconName={icon} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

/**
 * @visibleName NavigationTile (Forsideknapp)
 */
export default class NavigationTile extends React.PureComponent {
  static propTypes = {
    /**
     * (to: String, content: JSXElement) => JSXElement
     */
    renderContent: PropTypes.func,
    contents: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        to: PropTypes.string.isRequired,
        id: PropTypes.string
      })
    ).isRequired,
    className: PropTypes.string,
    /** Type av NavigationTile, default er sentrert*/
    type: PropTypes.oneOf(['center', 'left']),
    /** Ikon plassering, default er sentrert*/
    alignIcon: PropTypes.oneOf(['center', 'right']),
    /** Tittel plassering, default er sentrert  */
    alignTitle: PropTypes.oneOf(['center', 'left']),
    /** Beskrivelse plassering, default er sentrert*/
    alignDescription: PropTypes.oneOf(['center', 'left'])
  };

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
                  renderContent(to, <Content {...rest} />)
                ) : (
                  <a href={to}>
                    <Content {...rest} />
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
