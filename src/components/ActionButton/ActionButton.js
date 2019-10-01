import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ActionButton as FabricActionButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { getClassNames } from './ActionButton.classNames';

/**
 * @visibleName ActionButton (Aksjonsknapp)
 */
export default class ActionButton extends React.PureComponent {
  static NORMAL = 'icon';
  static LARGE = 'xxLarge';

  static propTypes = {
    /** Tekst som er ønskelig at leses opp for skjermleser */
    ariaLabel: PropTypes.string,
    /** Callback for klikk på knappen */
    onClick: PropTypes.func,
    /** Ikon som skal vises foran lenketeksten */
    icon: PropTypes.string,
    /** Ikon størrelse, to tilgjengelige størrelser */
    iconSize: PropTypes.oneOf([ActionButton.NORMAL, ActionButton.LARGE]),
    /** Fire forhåndsdefinerte farger, se eksempler*/
    color: PropTypes.oneOf(['blue', 'black', 'red', 'green', 'white']),
    className: PropTypes.string,
    /** Viser knappen som inaktiv */
    disabled: PropTypes.bool
  };

  static defaultProps = {
    onClick: undefined,
    icon: undefined,
    iconSize: ActionButton.NORMAL,
    color: 'blue',
    disabled: false
  };

  render() {
    const {
      children,
      onClick,
      icon,
      iconSize,
      color,
      className,
      disabled,
      ...props
    } = this.props;
    return (
      <FabricActionButton
        {...props}
        className={classnames(getClassNames(this.props), className)}
        onClick={onClick}
        role="button"
        color={color}
        iconSize={iconSize}
        iconProps={{
          iconName: icon
        }}
        disabled={disabled}
      >
        {children}
      </FabricActionButton>
    );
  }
}
