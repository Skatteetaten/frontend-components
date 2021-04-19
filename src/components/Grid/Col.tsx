import * as React from 'react';
import { getClassNames } from './Grid.classNames';

export interface ColProps {
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

export class Col extends React.Component<ColProps, {}> {
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
