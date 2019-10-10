import * as React from 'react';
import { getClassNames } from './Chip.classNames';

enum ChipType {
  WARNING = 'lightPink',
  OK = 'lightGreen',
  NEUTRAL = 'beige'
}

interface ChipProps {
  /** Bruksområde som avgir hvilken farge chip-en får */
  type?: ChipType;
  /** Størrelse på Chip */
  size?: 'standard' | 'large';
}
/**
 * @visibleName Chip (Merkelapp)
 */
export default class Chip extends React.PureComponent<ChipProps, {}> {
  static WARNING = ChipType.WARNING;
  static OK = ChipType.OK;
  static NEUTRAL = ChipType.NEUTRAL;
  static defaultProps = {
    size: 'standard',
    type: Chip.NEUTRAL
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <div className={getClassNames(this.props)} {...props}>
        {children}
      </div>
    );
  }
}
