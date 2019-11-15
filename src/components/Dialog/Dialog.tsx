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

export interface DialogProps extends IDialogProps {
  /** Om dialog skal ha mer padding for et luftigere uttrykk */
  layoutStyle?: 'normal' | 'airy' | 'important';
  /** @deprecated Hjelpetekst som skal vises i Callout */
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
  private readonly _iconButtonElement: React.RefObject<HTMLDivElement>;

  constructor(props: DialogProps) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
    this._iconButtonElement = React.createRef();
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
          {isCalloutVisible && (
            <Callout
              directionalHint={Callout.POS_TOP_LEFT}
              color={Callout.HELP}
              ariaLabel={'Hjelpetekst'}
              target={this._iconButtonElement}
              onClose={this._onDismiss}
            />
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
