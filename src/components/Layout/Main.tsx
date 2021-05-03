import { Grid } from '../Grid';

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
