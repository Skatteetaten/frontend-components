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
import { BrandContext } from '../SkeBasis';

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
      doNotLayer,
      ...props
    } = this.props;
    const { isCalloutVisible } = this.state;

    return (
      <BrandContext.Consumer>
        {({ tag, primaryColor, secondaryColor }) => (
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
                className: classnames(
                  getClassNames(this.props, tag).main,
                  className
                ),
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
        )}
      </BrandContext.Consumer>
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
