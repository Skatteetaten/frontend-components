import classnames from 'classnames';
import * as React from 'react';
import { IconButton as FabricIconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { getClassNames } from './IconButton.classNames';
import { ButtonProps } from '../Button/Button';

interface IconButtonProps extends ButtonProps {
  /** Om sirkel skal vises eller ikke. Sirkel vil typisk benyttes når ikon fra material-design ikke har egen sirkel  */
  circle?: boolean;
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
  /** Gjør knappen til hovedknapp med fylt farge */
  type?: 'default' | 'small' | 'medium' | 'large' | 'xLarge';
}
/**
 * @visibleName IconButton (Ikonknapp)
 */
const IconButton: React.FC<IconButtonProps> = props => {
  const { icon, className, ...rest } = props;
  return (
    <FabricIconButton
      {...rest}
      className={classnames(getClassNames(props), className)}
      role="button"
      iconProps={{ iconName: icon }}
    />
  );
};

IconButton.defaultProps = {
  alt: ' ',
  circle: false,
  disabled: undefined,
  icon: undefined,
  onClick: undefined,
  title: undefined,
  type: 'default'
};

export default IconButton;
