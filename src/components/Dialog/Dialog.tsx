import classnames from 'classnames';
import * as React from 'react';
import { Callout } from '../index';
import { getClassNames } from './Dialog.classNames';
import {
  DialogType,
  DialogFooter,
  Dialog as FabricDialog,
  IDialogProps,
} from '@fluentui/react';

export interface DialogProps extends IDialogProps {
  /** Om dialog skal ha mer padding for et luftigere uttrykk */
  layoutStyle?: 'normal' | 'airy' | 'important';
  /** Om det er så mye innhold at det går over flere "sider" (fikser scroll inni dialog på ipad) */
  tabletContentOverflows?: boolean;
  isModeless?: boolean;
}
export type DialogState = {
  isCalloutVisible: boolean;
};
/**
 * @visibleName Dialog (Dialogboks)
 */
export class Dialog extends React.PureComponent<DialogProps, DialogState> {
  static Footer = DialogFooter;
  static Type = DialogType;

  static defaultProps = {
    layoutStyle: 'normal',
    type: Dialog.Type.normal,
    closeButtonAriaLabel: 'Lukk',
    tabletContentOverflows: false,
    isModeless: false,
    isBlocking: undefined,
  };
  private readonly _iconButtonElement: React.RefObject<HTMLDivElement>;

  constructor(props: DialogProps) {
    super(props);
    this.state = {
      isCalloutVisible: false,
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
      isModeless,
      type,
      className,
      layoutStyle,
      closeButtonAriaLabel,
      modalProps,
      ...props
    } = this.props;
    const styles = getClassNames(this.props);
    const { isCalloutVisible } = this.state;

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
            closeButtonAriaLabel: closeButtonAriaLabel,
          }}
          modalProps={{
            isBlocking,
            isModeless,
            className: classnames(styles.main, className),
            ...modalProps,
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
      isCalloutVisible: !this.state.isCalloutVisible,
    });
  }

  _onDismiss() {
    this.setState({
      isCalloutVisible: false,
    });
  }
}
