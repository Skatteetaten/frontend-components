import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { DefaultButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { getClassNames as getStandardClassNames } from './Button.classNames';

/**
 * @visibleName Button (Knapp)
 */
export default class Button extends React.PureComponent {
  static propTypes = {
    /** Gjør knappen til primærknapp med fylt farge */
    primary: PropTypes.bool,
    /** Benyttes for å definere type knapp som skal benyttes */
    buttonType: PropTypes.oneOf([
      'primary',
      'primaryRounded',
      'primaryRoundedFilled',
      'warning',
      'secondary',
      'primaryLarge'
    ]),
    /** Viser knappen som inaktiv */
    disabled: PropTypes.bool,
    /** Ikon som skal vises foran teksten på knappen */
    icon: PropTypes.string,
    /** Callback for klikk på knappen */
    onClick: PropTypes.func,
    className: PropTypes.string
  };
  static defaultProps = {
    primary: false,
    buttonType: 'primaryRounded',
    disabled: false,
    icon: undefined,
    onClick: undefined
  };

  render() {
    const {
      children,
      primary,
      buttonType,
      icon,
      disabled,
      onClick,
      componentRef,
      className,
      ...props
    } = this.props;
    return (
      <DefaultButton
        {...props}
        primary={primary}
        className={classnames(getStandardClassNames(this.props), className)}
        buttonType={buttonType}
        iconProps={icon && { iconName: icon }}
        disabled={disabled}
        onClick={onClick}
        componentRef={componentRef}
      >
        {children}
      </DefaultButton>
    );
  }
}
