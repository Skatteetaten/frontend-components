import React from 'react';
import { Grid } from '../Grid';
import { mergeStyles } from '@fluentui/merge-styles';

const getClassNames = () => {
  return mergeStyles({
    displayName: 'SkeFooter',
    paddingLeft: '0',
    paddingRight: '0',
    marginTop: '16px',
  });
};

export class Footer extends React.Component {
  static displayName = 'Footer';
  static defaultProps = {
    tag: 'footer',
  };
  render() {
    // @ts-ignore TODO
    const { tag, className = '', children, ...props } = this.props;
    // @ts-ignore TODO
    const classNames = getClassNames(this.props);
    return (
      <Grid.Row>
        <Grid.Col tag={tag} className={`${classNames} ${className}`} {...props}>
          {children}
        </Grid.Col>
      </Grid.Row>
    );
  }
}
