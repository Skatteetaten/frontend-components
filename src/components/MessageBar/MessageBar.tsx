import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { default as MessageBarButton } from '../Button/Button';
import {
  MessageBar as FabricMessageBar,
  MessageBarType,
  IMessageBarProps
} from 'office-ui-fabric-react/lib-commonjs/MessageBar';

import { getClassNames } from './MessageBar.classNames';
import { CSSTransition } from 'react-transition-group';


//todo string.replace error
interface MessageBarProps extends IMessageBarProps{
  // actions?: JSX.Element,
  // onDismiss?: (...args: any[]) => any,
  // isMultiline?: boolean,
  // type?: any,
  // size?: 'default' | 'large',
  // className?: string,
  // id?: string,
  // duration?: number,
  // onRenderAfterDuration?: (...args: any[]) => any,
  // onClick?: (...args: any[]) => any
};
type MessageBarState = {
  hideMessageBar: boolean,
  hideMessageBar: boolean,
  showMessage: boolean
};
/**
 * @visibleName MessageBar (Varsler)
 */
export class MessageBar extends React.PureComponent<
  MessageBarProps,
  MessageBarState
  > {
  static Type = MessageBarType;
  static Button = MessageBarButton;
  static propTypes = {
    /** Handlinger inni MessageBar */
    actions: PropTypes.element,
    /** Om MessageBar skal kunne lukkes - tilhørende funksjon */
    onDismiss: PropTypes.func,
    /** Om MessageBar består av flere linjer tekst */
    isMultiline: PropTypes.bool,
    type: PropTypes.oneOf([
      MessageBar.Type.info,
      MessageBar.Type.error,
      MessageBar.Type.warning,
      MessageBar.Type.severeWarning,
      MessageBar.Type.success,
      MessageBar.Type.blocked
    ]),
    size: PropTypes.oneOf(['default', 'large']),
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Antall sekunder som boksen skal være synlig */
    duration: PropTypes.number,
    /**
     * (resetDuration: () => void, setShowAlways: () => void) => JSXElement
     */
    onRenderAfterDuration: PropTypes.func,
    /** Callback for klikk på knappen */
    onClick: PropTypes.func
  };
  static defaultProps = {
    actions: undefined,
    size: 'default',
    type: MessageBar.Type.info,
    isMultiline: true,
    onClick: undefined
  };

  state = {
    hideMessageBar: false,
    showMessage: true
  };

  componentDidMount() {
    const { duration } = this.props;
    if (duration)
      setTimeout(() => {
        this.setState({ hideMessageBar: true });
      }, Number(duration) * 1000);
    this.baseState = this.state;
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
          {status => (
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
