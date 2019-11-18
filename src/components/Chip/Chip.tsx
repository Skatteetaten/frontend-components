import * as React from 'react';
import { getClassNames } from './Chip.classNames';

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
  /** Bold tekst */
  bold?: boolean;
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
