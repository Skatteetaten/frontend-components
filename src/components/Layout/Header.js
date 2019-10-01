import React from 'react';
import Grid from '../Grid/Grid';
import { withResponsiveMode } from 'office-ui-fabric-react/lib-commonjs/utilities/decorators/withResponsiveMode';
import { mergeStyles } from '@uifabric/merge-styles';

const getClassNames = props => {
  return mergeStyles({
    displayName: 'SkeHeader',
    marginBottom: '16px'
  });
};

export class Header extends React.Component {
  static displayName = 'Header';
  static defaultProps = {
    tag: 'header',
    responsiveMode: undefined
  };
  render() {
    const {
      tag,
      responsiveMode,
      className = '',
      children,
      ...props
    } = this.props;
    const classNames = getClassNames(this.props);

    return (
      <Grid.Row rowSpacing={Grid.SPACE_NONE}>
        <Grid.Col
          noSpacing
          tag={tag}
          className={`${classNames} ${className}`}
          {...props}
        >
          {children}
        </Grid.Col>
      </Grid.Row>
    );
  }
}

export default withResponsiveMode(Header);
