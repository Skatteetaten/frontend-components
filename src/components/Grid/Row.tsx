import * as React from 'react';
import { getClassNames } from './Grid.classNames';

export interface RowProps {
  rowSpacing?: string;
  rowInset?: boolean;
  centered?: boolean;
  className?: string;
  tag?: string;
  padding?: string;
}

export class Row extends React.Component<RowProps, {}> {
  static displayName = 'GridRow';

  static defaultProps = {
    rowSpacing: '8px',
  };

  render() {
    const { children, className = '', tag = 'div' } = this.props;
    return React.createElement(
      tag,
      { className: `${getClassNames(this.props).row} ${className}` },
      children
    );
  }
}
