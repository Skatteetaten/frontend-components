import * as React from 'react';
import { getClassNames } from './Grid.classNames';
import { Col } from './Col';
import { Row } from './Row';
import { ReactNode } from 'react';

export interface GridProps {
  children?: ReactNode;
  className?: string;
  tag?: string;
  padding?: string;
}

/*
 * visibleName Grid (Rutenett)
 */
export class Grid extends React.Component<GridProps, {}> {
  static Col = Col;
  static Row = Row;
  static SPACE_NONE = '0px';
  static SPACE_SMALL = '8px';
  static SPACE_MEDIUM = '16px';
  static SPACE_LARGE = '24px';

  static defaultProps = {
    padding: '0 8px',
  };

  render() {
    const { children, className = '', tag = 'div' } = this.props;
    return React.createElement(
      tag,
      {
        dir: 'ltr',
        className: `${getClassNames(this.props).grid} ${className}`,
      },
      children
    );
  }
}
