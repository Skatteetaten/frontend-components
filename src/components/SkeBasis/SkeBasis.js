import PropTypes from 'prop-types';
import { registerIcons, loadTheme, createTheme } from '@uifabric/styling';
import { Fabric } from 'office-ui-fabric-react/lib-commonjs/Fabric';

import palette from '../utils/palette';
import fonts from '../utils/fonts';
import * as icons from '../utils/icons';

export class SkeBasis extends Fabric {
  static PALETTE = palette;
  static FONTS = fonts;
  static ICONS = icons;
  static propTypes = {
    palette: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        style: PropTypes.object.isRequired,
        fontFace: PropTypes.shape({
          fontFamily: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired
        }).isRequired,
        icons: PropTypes.object.isRequired
      })
    )
  };
  static defaultProps = {
    palette: SkeBasis.PALETTE,
    fonts: SkeBasis.FONTS,
    icons: [SkeBasis.ICONS.SkeIcons, SkeBasis.ICONS.MdIcons]
  };
  constructor(props) {
    super(props);
    const { palette, fonts } = props;
    if (palette && fonts) {
      const theme = createTheme({ palette, fonts, isInverted: false });
      loadTheme(theme);
    }
    if (props.icons) {
      props.icons.forEach(iconFont => registerIcons(iconFont));
    }
  }
  render() {
    return super.render();
  }
}

export default SkeBasis;
