import * as React from 'react';
import PropTypes from 'prop-types';
import { getClassNames } from './Chip.classNames';

enum ChipType {
  WARNING = 'lightPink',
  OK = 'lightGreen',
  NEUTRAL = 'beige'
}

interface ChipProps {
  type?: any;
  size?: 'standard' | 'large';
  ariaLabel?: string;
}
/**
 * @visibleName Chip (Merkelapp)
 */
export default class Chip extends React.PureComponent<ChipProps, {}> {
  static WARNING = ChipType.WARNING;
  static OK = ChipType.OK;
  static NEUTRAL = ChipType.NEUTRAL;

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
