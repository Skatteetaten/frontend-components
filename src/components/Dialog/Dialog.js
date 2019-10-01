import React from 'react';
import PropTypes from 'prop-types';
import { getClassNames } from './Dialog.classNames';
import Callout from '../Callout/Callout';
import classnames from 'classnames';

import {
  DialogType,
  DialogFooter,
  Dialog as FabricDialog
} from 'office-ui-fabric-react/lib-commonjs/Dialog';

import IconButton from '../IconButton/IconButton';

/**
 * @visibleName Dialog (Dialogboks)
 */
export default class Dialog extends React.PureComponent {
  static Footer = DialogFooter;
  static Type = DialogType;

  static propTypes = {
    /** Om dialogen er skjult eller ikke */
    hidden: PropTypes.bool,
    /** Callback til når dialogen lukkes */
    onDismiss: PropTypes.func,
    /** Tittel som skal vises i dialogen */
    title: PropTypes.string,
    /** Undertekst som skal vises i dialogen */
    subText: PropTypes.string,
    /** Hvorvidt om dialogen skal blokkere for annen brukerinput */
    isBlocking: PropTypes.bool,
    /** Type dialog; normal eller stor header  */
    type: PropTypes.oneOf([Dialog.Type.normal, Dialog.Type.largeHeader]),
    /** Om dialog skal ha mer padding for et luftigere uttrykk */
    layoutStyle: PropTypes.oneOf(['normal', 'airy', 'important']),
    /** Hjelpetekst som skal vises i Callout */
    helpText: PropTypes.string,
    /** Default max-width for the dialog box */
    dialogMinWidth: PropTypes.string,
    /** Default min-width for the dialog box */
    dialogMaxMinWidth: PropTypes.string,
    className: PropTypes.string
  };
  // TODO: Use Fabric props: dialogDefaultMinWidth / dialogDefaultMaxWidth
  // when bug issue is resolved (https://github.com/OfficeDev/office-ui-fabric-react/issues/5175)

  static defaultProps = {
    type: Dialog.Type.normal,
    layoutStyle: 'normal'
  };

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
      hidden,
      onDismiss,
      title,
      subText,
      isBlocking,
      type,
      helpText,
      dialogMinWidth,
      dialogMaxWidth,
      className,
      layoutStyle,
      ...props
    } = this.props;
    const styles = getClassNames(this.props);
    let { isCalloutVisible } = this.state;

    return (
      <div>
        <FabricDialog
          {...props}
          role="dialog"
          aria-label={title}
          hidden={hidden}
          onDismiss={onDismiss}
          minWidth={dialogMinWidth}
          maxWidth={dialogMaxWidth}
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
              ref={menuButton => (this._iconButtonElement = menuButton)}
            >
              <IconButton
                buttonType={'large'}
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
