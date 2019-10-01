import Grid from '../Grid/Grid';

export class Layout extends Grid {
  static displayName = 'Layout';
  static defaultProps = {
    tag: 'div'
  };
  render() {
    return super.render();
  }
}

export default Layout;
