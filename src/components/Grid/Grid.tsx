import * as React from 'react';
import { getClassNames } from './Grid.classNames';

interface RowProps {
  rowSpacing?: string;
  rowInset?: boolean;
  centered?: boolean;
  className?: string;
  tag?: string;
}

class Row extends React.Component<RowProps, {}> {
  static displayName = 'GridRow';

  static defaultProps = {
    rowSpacing: '8px'
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

interface ColProps {
  noSpacing?: boolean;
  className?: string;
  tag?: string;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  xxxl?: number;
  smPush?: number;
  mdPush?: number;
  lgPush?: number;
  xlPush?: number;
  xxlPush?: number;
  xxxlPush?: number;
  smPull?: number;
  mdPull?: number;
  lgPull?: number;
  xlPull?: number;
  xxlPull?: number;
  xxxlPull?: number;
}
class Col extends React.Component<ColProps, {}> {
  static displayName = 'GridCol';
  render() {
    const { children, className = '', tag = 'div' } = this.props;
    return React.createElement(
      tag,
      { className: `${getClassNames(this.props).col} ${className}` },
      children
    );
  }
}

interface GridProps {
  className?: string;
  tag?: string;
}
/**
 * @visibleName Grid (Rutenett)
 */
export class Grid extends React.Component<GridProps, {}> {
  static Col = Col;
  static Row = Row;
  static SPACE_NONE = '0px';
  static SPACE_SMALL = '8px';
  static SPACE_MEDIUM = '16px';
  static SPACE_LARGE = '24px';

  render() {
    const { children, className = '', tag = 'div' } = this.props;
    return React.createElement(
      tag,
      { className: `${getClassNames(this.props).grid} ${className}` },
      children
    );
  }
}

export default Grid;
