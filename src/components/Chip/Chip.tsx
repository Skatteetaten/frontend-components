import * as React from 'react';
import { getClassNames } from './Chip.classNames';
import classnames from 'classnames';
import { ChipProps, ChipType } from './Chip.types';

/**
 * @deprecated Komponenten er erstattet av Chip fra "@skatteetaten/ds-status"
 * visibleName Chip (Emneknagg)
 */
export class Chip extends React.PureComponent<ChipProps, {}> {
  static WARNING = ChipType.WARNING;
  static OK = ChipType.OK;
  static NEUTRAL = ChipType.NEUTRAL;
  static defaultProps = {
    size: 'standard',
    type: Chip.NEUTRAL,
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
