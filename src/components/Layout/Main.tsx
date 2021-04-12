import { Grid } from '../index';

export class Main extends Grid.Row {
  static displayName = 'Main';
  static defaultProps = {
    tag: 'main',
    rowSpacing: Grid.SPACE_MEDIUM,
  };
  render() {
    return super.render();
  }
}
