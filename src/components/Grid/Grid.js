import React from 'react';
import PropTypes from 'prop-types';
import { getClassNames } from './Grid.classNames';

class Row extends React.Component {
  static displayName = 'GridRow';

  static propTypes = {
    rowSpacing: PropTypes.string,
    rowInset: PropTypes.bool,
    centered: PropTypes.bool
  };

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

class Col extends React.Component {
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

Col.propTypes = {
  noSpacing: PropTypes.bool
};

/**
 * @visibleName Grid (Rutenett)
 */
export class Grid extends React.Component {
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
