import React from 'react';
import Grid from '../Grid/Grid';
import { mergeStyles } from '@uifabric/merge-styles';

const getClassNames = props => {
  return mergeStyles({
    displayName: 'SkeFooter',
    paddingLeft: '0',
    paddingRight: '0',
    marginTop: '16px'
  });
};

export class Footer extends React.Component {
  static displayName = 'Footer';
  static defaultProps = {
    tag: 'footer'
  };
  render() {
    const { tag, className = '', children, ...props } = this.props;
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

export default Footer;
