import classnames from 'classnames';
import * as React from 'react';
import { Callout } from '../Callout';
import { getClassNames } from './Dialog.classNames';
import {
  DialogType,
  DialogFooter,
  Dialog as FabricDialog,
} from '@fluentui/react';
import { DialogProps, DialogState } from './Dialog.types';

/**
 * @visibleName Dialog _Dialogboks_
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
