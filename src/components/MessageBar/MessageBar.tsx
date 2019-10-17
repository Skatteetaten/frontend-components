import classnames from 'classnames';
import {
  IMessageBarProps,
  MessageBar as FabricMessageBar,
  MessageBarType
} from 'office-ui-fabric-react/lib-commonjs/MessageBar';
import * as React from 'react';
// @ts-ignore TODO
import { CSSTransition } from 'react-transition-group';
import { default as MessageBarButton } from '../Button/Button';
import { getClassNames } from './MessageBar.classNames';

interface MessageBarProps extends IMessageBarProps {
  type?: MessageBarType;
  size?: 'default' | 'large';
  /** Antall sekunder som boksen skal være synlig */
  duration?: number;
  /** (resetDuration: () => void, setShowAlways: () => void) => JSXElement
   */
  onRenderAfterDuration?: (...args: any[]) => any;
  /** Callback for klikk på knappen */
  onClick?: (...args: any[]) => any;
}

interface MessageBarState {
  hideMessageBar: boolean;
  showMessage: boolean;
}
/**
 * @visibleName MessageBar (Varsler)
 */
export class MessageBar extends React.PureComponent<
  MessageBarProps,
  MessageBarState
> {
  static Type = MessageBarType;
  static Button = MessageBarButton;
  static defaultProps = {
    actions: undefined,
    isMultiline: true,
    onClick: undefined,
    size: 'default',
    type: MessageBar.Type.info
  };

  state = {
    hideMessageBar: false,
    showMessage: true
  };

  componentDidMount() {
    const { duration } = this.props;
    if (duration) {
      setTimeout(() => {
        this.setState({ hideMessageBar: true });
      }, Number(duration) * 1000);
    }
  }

  setShowAlways = () => {
    this.setState({
      showMessage: true,
      hideMessageBar: false
    });
  };

  resetDurationMessage = () => {
    const { duration } = this.props;
    if (duration)
      this.setState({
        showMessage: true
      });
    setTimeout(() => {
      this.setState({ hideMessageBar: true, showMessage: false });
    }, Number(duration) * 1000);
    this.setState({
      hideMessageBar: false
    });
  };

  render() {
    const { showMessage, hideMessageBar } = this.state;
    const {
      children,
      actions,
      onClick,
      duration,
      type,
      onDismiss,
      isMultiline,
      className,
      id,
      onRenderAfterDuration,
      ...props
    } = this.props;

    const afterDurationComponent =
      onRenderAfterDuration &&
      onRenderAfterDuration(this.resetDurationMessage, this.setShowAlways);

    return (
      <div id={id}>
        {hideMessageBar && <div>{afterDurationComponent}</div>}
        <CSSTransition
          in={showMessage && !hideMessageBar}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          {/*
            // @ts-ignore TODO */
          status => (
            <FabricMessageBar
              {...props}
              className={classnames(
                getClassNames(this.props),
                status,
                className
              )}
              actions={actions}
              messageBarType={type}
              onDismiss={onDismiss}
              isMultiline={isMultiline}
              aria-describedby={id}
              role="status"
            >
              {children}
            </FabricMessageBar>
          )}
        </CSSTransition>
      </div>
    );
  }
}

export default MessageBar;
