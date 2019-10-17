import classnames from 'classnames';
import * as React from 'react';
import Callout from '../Callout/Callout';
import { getClassNames } from './Dialog.classNames';
import {
  DialogType,
  DialogFooter,
  Dialog as FabricDialog,
  IDialogProps
} from 'office-ui-fabric-react/lib-commonjs/Dialog';
import IconButton from '../IconButton/IconButton';

interface DialogProps extends IDialogProps {
  /** Om dialog skal ha mer padding for et luftigere uttrykk */
  layoutStyle?: 'normal' | 'airy' | 'important';
  /** Hjelpetekst som skal vises i Callout */
  helpText?: string;
}
type DialogState = {
  isCalloutVisible: boolean;
};
/**
 * @visibleName Dialog (Dialogboks)
 */
export default class Dialog extends React.PureComponent<
  DialogProps,
  DialogState
> {
  static Footer = DialogFooter;
  static Type = DialogType;

  static defaultProps = {
    layoutStyle: 'normal',
    type: Dialog.Type.normal
  };
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }

  render() {
    const {
      children,
      title,
      subText,
      isBlocking,
      type,
      helpText,
      className,
      layoutStyle,
      ...props
    } = this.props;
    const styles = getClassNames(this.props);
    let { isCalloutVisible } = this.state;

    return (
      <div>
        {/*
        // @ts-ignore */}
        <FabricDialog
          {...props}
          role="dialog"
          dialogContentProps={{
            type: type,
            title,
            subText,
            closeButtonAriaLabel: 'Lukk'
          }}
          modalProps={{
            isBlocking,
            className: classnames(styles.main, className)
          }}
        >
          {helpText && (
            <span
              className={styles.helpButton}
              // @ts-ignore TODO
              ref={menuButton => (this._iconButtonElement = menuButton)}
            >
              <IconButton
                type={'large'}
                icon={'HelpOutline'}
                iconProps={{ iconName: 'Calendar' }}
                onClick={this._onClick}
                title="Hjelp"
                aria-label="Hjelp"
              />
            </span>
          )}
          {isCalloutVisible && (
            <Callout
              directionalHint={Callout.POS_TOP_LEFT}
              color={Callout.HELP}
              ariaLabel={'Hjelpetekst'}
              // @ts-ignore TODO
              target={this._iconButtonElement}
              onClose={this._onDismiss}
            >
              <p>{helpText}</p>
            </Callout>
          )}
          {children}
        </FabricDialog>
      </div>
    );
  }

  _onClick() {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  _onDismiss() {
    this.setState({
      isCalloutVisible: false
    });
  }
}
