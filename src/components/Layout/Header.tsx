import React from 'react';
import { Grid } from '../Grid';
import { ResponsiveMode } from '@fluentui/react';
import { mergeStyles } from '@fluentui/merge-styles';

const getClassNames = () => {
  return mergeStyles({
    displayName: 'SkeHeader',
    marginBottom: '16px',
  });
};

export class Header extends React.Component {
  static displayName = 'Header';
  static defaultProps = {
    tag: 'header',
    responsiveMode: ResponsiveMode.large,
  };
  render() {
    const {
      // @ts-ignore TODO
      tag,
      // @ts-ignore TODO
      responsiveMode,
      // @ts-ignore TODO
      className = '',
      children,
      ...props
    } = this.props;
    // @ts-ignore TODO
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
