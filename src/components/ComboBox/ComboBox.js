import React, { isValidElement } from 'react';
import { VirtualizedComboBox as FabricComboBox } from 'office-ui-fabric-react/lib-commonjs/ComboBox';
import Callout from '../Callout/Callout';
import classnames from 'classnames';

import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import {
  getClassNames,
  getErrorClassNames,
  getLabelClassNames,
  getOptionsClassNames
} from './ComboBox.classNames';
import PropTypes from 'prop-types';

// This is just a workaround so that the combobox opens on focus.
class SkeCombobox extends FabricComboBox {
  focus = () => {
    if (
      this.props.expandOnFocus === true &&
      this._comboBox.value &&
      this.props.disabled === false
    ) {
      this._comboBox.value.focus(this.props.shouldOpenOnFocus);
      return true;
    }
    return false;
  };
}

/**
 * @visibleName ComboBox (Nedtrekksliste med skriving)
 */
export default class Combobox extends React.PureComponent {
  static propTypes = {
    /** Angir om fullføring av teksten skal være aktiv eller ikke */
    autoComplete: PropTypes.oneOf(['on', 'off']),
    /** Angir om valgene automatisk skal vises når feltet har focus */
    expandOnFocus: PropTypes.bool,
    /** Angir om brukeren skal kunne skrive elementer som ikke er forhåndsdefinert */
    allowFreeform: PropTypes.bool,
    /** Beskrivelse over feltet */
    label: PropTypes.string,
    /** Hjelpetekst */
    help: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** Feilmelding under feltet */
    errorMessage: PropTypes.string,
    /** Inaktiv eller ikke */
    disabled: PropTypes.bool,
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Størrelse på inputfelt som skal benyttes */
    inputSize: PropTypes.oneOf(['normal', 'large'])
  };

  static defaultProps = {
    autoComplete: 'on',
    expandOnFocus: false,
    allowFreeform: false,
    label: undefined,
    errorMessage: undefined,
    help: undefined,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
    this._onRenderLabel = this._onRenderLabel.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }

  _onRenderLabel(props) {
    const { label, help, componentId } = props;

    const styles = getLabelClassNames(props);
    let { isCalloutVisible } = this.state;
    const helpElement = isValidElement(help) ? help : <p>{help}</p>;
    return (
      <div className={styles.labelArea}>
        <span className={styles.label}>
          {label ? (
            <Label className={styles.labelText} htmlFor={componentId}>
              {label}
            </Label>
          ) : null}
        </span>
        {help && (
          <span
            className={styles.labelIconArea}
            ref={menuButton => (this._iconButtonElement = menuButton)}
          >
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title="HelpOutline"
              ariaLabel="Hjelp"
              onClick={this._onClick}
              className={styles.icon}
              aria-haspopup={true}
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
            {helpElement}
          </Callout>
        )}
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

  render() {
    const {
      children,
      errorMessage,
      label,
      autoComplete,
      allowFreeform,
      help,
      onRenderLabel,
      className,
      id,
      inputSize,
      ...props
    } = this.props;
    const labelProps = { label, help };
    return (
      <div id={id}>
        {onRenderLabel
          ? onRenderLabel(labelProps)
          : this._onRenderLabel(labelProps)}
        <SkeCombobox
          {...props}
          label={undefined}
          ariaLabel={label}
          role="combobox"
          shouldOpenOnFocus={true}
          className={classnames(getClassNames(this.props), className)}
          autoComplete={autoComplete}
          allowFreeform={allowFreeform}
          onFocus={this._basicComboBoxOnClick}
          componentRef={this._basicComboBoxComponentRef}
          calloutProps={{
            className: getOptionsClassNames(this.props)
          }}
          inputSize={inputSize}
        >
          {children}
        </SkeCombobox>
        {errorMessage && (
          <label className={getErrorClassNames(this.props)}>
            {errorMessage}
          </label>
        )}
      </div>
    );
  }

  _basicComboBoxComponentRef = component => {
    this._basicCombobox = component;
  };

  _basicComboBoxOnClick = () => {
    this._basicCombobox.focus();
    const { onFocus } = this.props;
    onFocus && onFocus();
  };
}
