import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';

export class Nav extends Grid.Col {
  static displayName = 'Nav';
  static propTypes = {
    tag: PropTypes.string,
    sm: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
    xxxl: PropTypes.number,

    smPush: PropTypes.number,
    lgPush: PropTypes.number,
    xlPush: PropTypes.number,
    xxlPush: PropTypes.number,
    xxxlPush: PropTypes.number,

    smPull: PropTypes.number,
    lgPull: PropTypes.number,
    xlPull: PropTypes.number,
    xxlPull: PropTypes.number,
    xxxlPull: PropTypes.number
  };
  static defaultProps = {
    tag: 'nav',
    lg: 2,
    xl: 2
    //lgPull: 10,
    //xlPull: 8
  };
  render() {
    return super.render();
  }
}

export default Nav;
