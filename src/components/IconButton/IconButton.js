import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { IconButton as FabricIconButton } from 'office-ui-fabric-react/lib-commonjs/Button';

import { getClassNames } from './IconButton.classNames';

/**
 * @visibleName IconButton (Ikonknapp)
 */
export default class IconButton extends React.PureComponent {
  static propTypes = {
    /** Gjør knappen til hovedknapp med fylt farge */
    buttonType: PropTypes.oneOf([
      'default',
      'small',
      'medium',
      'large',
      'xLarge'
    ]),
    /** Om knappen er inaktiv*/
    disabled: PropTypes.bool,
    /** Om sirkel skal vises eller ikke. Sirkel vil typisk benyttes når ikon fra material-design ikke har egen sirkel  */
    circle: PropTypes.bool,
    /** Ikon som skal vises foran teksten på knappen */
    icon: PropTypes.string,
    /** Beskrivelse av hva knappen gjør (f.eks. til skjermlesere) */
    title: PropTypes.string,
    /** Callback for klikk på knappen */
    onClick: PropTypes.func,
    className: PropTypes.string,
    /** Tekst alternativ til ikonet. Hvis bildet ikke har noen betydning vil attributten vise " " som default */
    alt: PropTypes.string
  };
  static defaultProps = {
    buttonType: 'default',
    circle: false,
    icon: undefined,
    title: undefined,
    disabled: undefined,
    onClick: undefined,
    alt: ' '
  };

  render() {
    const {
      buttonType,
      icon,
      title,
      disabled,
      onClick,
      className,
      alt,
      ...props
    } = this.props;
    return (
      <FabricIconButton
        {...props}
        className={classnames(getClassNames(this.props), className)}
        buttonType={buttonType}
        title={title}
        aria-label={title}
        role="button"
        iconProps={{ iconName: icon }}
        disabled={disabled}
        onClick={onClick}
        alt={alt}
      />
    );
  }
}
