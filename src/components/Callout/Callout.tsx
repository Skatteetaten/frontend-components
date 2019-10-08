import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Callout as FabricCallout,
  DirectionalHint,
  ICalloutProps
} from 'office-ui-fabric-react/lib-commonjs/Callout';
import { getClassNames } from './Callout.classNames';
import IconButton from '../IconButton/IconButton';

interface CalloutProps extends ICalloutProps {
  //TODO String.Replace error
  // gapSpace?: number,
  // role?: 'dialog' | 'tooltip',
  // calloutWidth?: number,
  // className?: string,
  // color?: any,
  // directionalHint?: any,
  // id?: string,
  // autoDismiss?: boolean
};
type CalloutState = {
  isCalloutVisible: boolean
};
/**
 * @visibleName Callout (Utropsboks)
 */
export default class Callout extends React.PureComponent<CalloutProps, CalloutState> {
  static HELP = 'lightGreen';
  static INFO = 'beige';
  static ERROR = 'lightPink';
  static WARNING = 'beige';
  static BASIC = 'white';
  static POS_TOP_CENTER = DirectionalHint.topCenter;
  static POS_TOP_LEFT = DirectionalHint.topLeftEdge;
  static POS_TOP_RIGHT = DirectionalHint.topRightEdge;
  static POS_BOTTOM_CENTER = DirectionalHint.bottomCenter;
  static POS_BOTTOM_LEFT = DirectionalHint.bottomLeftEdge;
  static POS_BOTTOM_RIGHT = DirectionalHint.bottomRightEdge;

  static propTypes = {
    /** Avstand mellom callout og klikkbart element */
    gapSpace: PropTypes.number,
    /** Beskriver rollen til calloutboksen - hjelp til f.eks de som benytter skjermlesere */
    role: PropTypes.oneOf(['dialog', 'tooltip']),
    /** Kan sette en bestemt bredde hvis ønskelig */
    calloutWidth: PropTypes.number,
    className: PropTypes.string,
    /** Finnes fire bakgrunnfarger: grønn, rosa, beige eller hvit */
    color: PropTypes.oneOf([
      Callout.HELP,
      Callout.ERROR,
      Callout.WARNING,
      Callout.BASIC
    ]),
    /** Plassering av callout */
    directionalHint: PropTypes.oneOf([
      Callout.POS_TOP_CENTER,
      Callout.POS_TOP_LEFT,
      Callout.POS_TOP_RIGHT,
      Callout.POS_BOTTOM_CENTER,
      Callout.POS_BOTTOM_LEFT,
      Callout.POS_BOTTOM_RIGHT
    ]),
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,

    /** Avgjør om callout vinduet skal lukkes automatisk når området utenfor vinduet klikkes*/
    autoDismiss: PropTypes.bool
  };

  static defaultProps = {
    color: Callout.HELP,
    role: 'dialog',
    doNotLayer: true,
    directionalHint: Callout.POS_TOP_CENTER,
    autoDismiss: false
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
      this.props.onDismiss();
    }
  }
}
