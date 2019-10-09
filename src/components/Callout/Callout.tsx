import classnames from 'classnames';
import {
  Callout as FabricCallout,
  DirectionalHint,
  ICalloutProps
} from 'office-ui-fabric-react/lib-commonjs/Callout';
import * as React from 'react';
import IconButton from '../IconButton/IconButton';
import { getClassNames } from './Callout.classNames';

enum CalloutColor {
  HELP = 'lightGreen',
  INFO = 'beige',
  ERROR = 'lightPink',
  WARNING = 'beige',
  BASIC = 'white'
}
interface CalloutProps extends ICalloutProps {
  /** Avgjør om callout vinduet skal lukkes automatisk når området utenfor vinduet klikkes */
  autoDismiss?: boolean;
  /** Finnes fire bakgrunnfarger: grønn, rosa, beige eller hvit */
  color?: CalloutColor;
  onClose?: () => void;
}

interface CalloutState {
  isCalloutVisible: boolean;
}

/**
 * @visibleName Callout (Utropsboks)
 */
export default class Callout extends React.PureComponent<
  CalloutProps,
  CalloutState
> {
  static HELP = CalloutColor.HELP;
  static INFO = CalloutColor.INFO;
  static ERROR = CalloutColor.ERROR;
  static WARNING = CalloutColor.WARNING;
  static BASIC = CalloutColor.BASIC;
  static POS_TOP_CENTER = DirectionalHint.topCenter;
  static POS_TOP_LEFT = DirectionalHint.topLeftEdge;
  static POS_TOP_RIGHT = DirectionalHint.topRightEdge;
  static POS_BOTTOM_CENTER = DirectionalHint.bottomCenter;
  static POS_BOTTOM_LEFT = DirectionalHint.bottomLeftEdge;
  static POS_BOTTOM_RIGHT = DirectionalHint.bottomRightEdge;

  static defaultProps = {
    autoDismiss: false,
    color: Callout.HELP,
    directionalHint: Callout.POS_TOP_CENTER,
    doNotLayer: true,
    role: 'dialog'
  };

  render() {
    const { children, className, id, ...props } = this.props;
    const styles = getClassNames(props);

    return (
      <div id={id} className={classnames(styles.calloutWrapper, className)}>
        <FabricCallout
          {...props}
          className={classnames(styles.main, className)}
          isBeakVisible={true}
        >
          {children}
          <IconButton
            aria-label="Lukk"
            icon="Cancel"
            className={styles.closeButton}
            type="default"
            onClick={props.onClose}
          />
        </FabricCallout>
      </div>
    );
  }

  _onDismiss() {
    this.setState({
      isCalloutVisible: false
    });

    if (this.props.autoDismiss) {
      this.props.onDismiss && this.props.onDismiss();
    }
  }
}
