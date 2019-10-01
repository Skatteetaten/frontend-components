import React from 'react';
import PropTypes from 'prop-types';
import { getClassNames } from './Chip.classNames';

/**
 * @visibleName Chip (Merkelapp)
 */
export default class Chip extends React.PureComponent {
  static WARNING = 'lightPink';
  static OK = 'lightGreen';
  static NEUTRAL = 'beige';

  static propTypes = {
    /** Bruksområde som avgir hvilken farge chip-en får */
    type: PropTypes.oneOf([Chip.NEUTRAL, Chip.OK, Chip.WARNING]),
    /** Størrelse på Chip */
    size: PropTypes.oneOf(['standard', 'large']),
    /** Angir aria-label til skjermleser */
    ariaLabel: PropTypes.string
  };

  static defaultProps = {
    type: Chip.NEUTRAL,
    size: 'standard',
    ariaLabel: undefined
  };

  render() {
    const { ariaLabel, children, ...props } = this.props;
    return (
      <div
        aria-label={ariaLabel}
        className={getClassNames(this.props)}
        {...props}
      >
        {children}
      </div>
    );
  }
}
