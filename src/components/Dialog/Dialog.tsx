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
import i18n, { t } from '../utils/i18n/i18n';
import WaitAlert from './WaitAlert';

export class Dialog extends React.PureComponent<DialogProps, DialogState> {
  static Footer = DialogFooter;
  static Type = DialogType;

  static defaultProps = {
    layoutStyle: 'normal',
    type: Dialog.Type.normal,
    tabletContentOverflows: false,
    isModeless: false,
    isBlocking: undefined,
    waitAlert: false,
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
    if (props.language) {
      i18n.changeLanguage(props.language);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.language !== this.props.language) {
      i18n.changeLanguage(this.props.language);
    }
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
        {({ tag }) => (
          <div>
            {/*
       // @ts-ignore */}
            <FabricDialog
              {...props}
              dialogContentProps={{
                type: type,
                title,
                subText,
                closeButtonAriaLabel: closeButtonAriaLabel || t('common.close'),
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
              ariaLabelledById={
                props.waitAlert ? 'waitAlertHeading' : undefined
              }
              ariaDescribedById={props.waitAlert ? 'waitAlertText' : undefined}
            >
              {isCalloutVisible && (
                <Callout
                  directionalHint={Callout.POS_TOP_LEFT}
                  color={Callout.HELP}
                  ariaLabel={t('common.helpText')}
                  target={this._iconButtonElement}
                  onClose={this._onDismiss}
                />
              )}
              {props.waitAlert ? (
                <WaitAlert
                  onDismiss={props.onDismiss}
                  waitAlertBtnText={props.waitAlertBtnText}
                >
                  {children}
                </WaitAlert>
              ) : (
                children
              )}
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
