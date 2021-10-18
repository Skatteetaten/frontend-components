import classnames from 'classnames';
import { Callout as FabricCallout, DirectionalHint } from '@fluentui/react';
import React, { PureComponent } from 'react';
import { IconButton } from '../IconButton';
import { getClassNames } from './Callout.classNames';
import { CalloutColor, CalloutProps, CalloutState } from './Callout.types';

/*
 * visibleName Callout (Utropsboks)
 */
export class Callout extends PureComponent<CalloutProps, CalloutState> {
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
    autoDismiss: true,
    color: Callout.HELP,
    directionalHint: Callout.POS_TOP_CENTER,
    doNotLayer: true,
    role: undefined,
    border: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      widthBtnLabel: '',
      target: undefined,
      isCalloutVisible: props.isCalloutVisible,
    };
  }

  render() {
    const { children, className, id, ...props } = this.props;
    const styles = getClassNames(props, this.state.widthBtnLabel);

    window.onclick = (e) => {
      if (
        (e.target &&
          e.target.parentElement !== this.state.target &&
          e.target.parentElement.className.indexOf('ms-Button-textContainer') >
            -1) ||
        e.target.className.indexOf('ms-Button-textContainer') > -1
      ) {
        this.setState({
          target: e.target.parentElement,
          widthBtnLabel: window.getComputedStyle(e.target.parentElement).width,
        });
      }
    };

    window.onresize = () => {
      if (this.state.target) {
        this.setState({
          //@ts-ignore
          widthBtnLabel: window.getComputedStyle(this.state.target).width,
        });
      }
    };

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
            onClick={props.onClose}
          />
        </FabricCallout>
      </div>
    );
  }

  _onDismiss() {
    this.setState({
      isCalloutVisible: false,
    });

    if (this.props.autoDismiss) {
      this.props.onDismiss && this.props.onDismiss();
    }
  }
}
