import * as React from 'react';
import { getClassNames } from './Chip.classNames';
import classnames from 'classnames';

export enum ChipType {
  WARNING = 'lightPink',
  OK = 'lightGreen',
  NEUTRAL = 'beige'
}

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bruksområde som avgir hvilken farge chip-en får */
  type?: ChipType;
  /** Størrelse på Chip */
  size?: 'standard' | 'large';
  /** aria-label */
  ariaLabel?: string;
  /** Overstyring av stiler */
  className?: string;
}
/**
 * @visibleName Chip (Emneknagg)
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
    const { children, className, ariaLabel, ...props } = this.props;
    const styles = getClassNames(this.props);
    return (
      <div
        className={classnames(styles, className)}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </div>
    );
  }
}
