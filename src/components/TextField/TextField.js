import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
//import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib-commonjs/Callout';
import Callout from '../Callout/Callout';
import {
  TextField as FabricTextField,
  MaskedTextField as FabricMaskedTextField
} from 'office-ui-fabric-react/lib-commonjs/TextField';
import { getClassNames } from './TextField.classNames';
import { getClassNames as getLabelClassNames } from './TextFieldLabel.classNames';
import { isUndefined } from 'util';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class MaskedTextField extends FabricMaskedTextField {
  constructor(props) {
    super(props);
    this._skipComponentRefResolution = false;
  }
}
/**
 * @visibleName TextField (Tekstfelt)
 */
export default class TextField extends React.PureComponent {
  static propTypes = {
    /** Beskrivende informasjon til skjermlesere */
    ariaLabel: PropTypes.string,
    /** Automatisk utvide høyde (ved multiline) */
    autoAdjustHeight: PropTypes.bool,
    /** Benyttes når teksten for et readonly tekstfelt skal fremheves  */
    boldText: PropTypes.bool,
    /** Fjerne rammen rundt feltet */
    borderless: PropTypes.bool,
    /** Bestemmer om hjelptekst/varseltekst skal legge seg mellom label og tekstfelt eller flytende over innhold */
    calloutFloating: PropTypes.bool,
    /** For ytterligere stiling */
    className: PropTypes.string,
    /** Bestemmer om ett readonly felt skal være alltid redigerbart om det er tomt */
    editableWhenEmpty: PropTypes.bool,
    /** Benyttes når et readonly felt skal være redigertbart  */
    editable: PropTypes.bool,
    /** Tilhørende feilmelding */
    errorMessage: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** Tilhørende hjelpetekst */
    help: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** Størrelse på tekstfelt som skal benyttes */
    inputSize: PropTypes.oneOf(['normal', 'large']),
    /** Emnet over feltet */
    label: PropTypes.string,
    /** Størrelse på label */
    labelSize: PropTypes.oneOf(['small', 'large']),
    /** Felt med flere linjer */
    multiline: PropTypes.bool,
    /** Callback når input endres  */
    onChange: PropTypes.func,
    /** Tekst inni feltet som vises før man skriver */
    placeholder: PropTypes.string,
    /** Tekst inni feltet som alltid legges til foran, f.eks. www */
    prefix: PropTypes.string,
    /** Om feltet er inaktivt */
    readonly: PropTypes.bool,
    /** Tekst inni feltet som alltid legges til bak, f.eks. kr */
    suffix: PropTypes.string,
    /** Label på linje med verdi */
    underlined: PropTypes.bool,
    /** Tilhørende varseltekst */
    warning: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** Formateringstreng som definerer oppførsel. Backslash vil escape et tegn. Spesialformat er:  '9': [0-9] 'a': [a-zA-Z] '*': [a-zA-Z0-9]. Eksempel tlf.nr 999 99 999 */
    mask: PropTypes.string,
    /** Antall rader som skal vises i feltet når multiline er satt */
    rows: PropTypes.number
  };

  static defaultProps = {
    inputSize: 'normal',
    editableWhenEmpty: false,
    labelSize: 'small',
    boldText: true,
    calloutFloating: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false,
      editMode: this.editMode(),
      value: '',
      activeCallout: '',
      lineBreak: false
    };
  }

  render() {
    const {
      children,
      onRenderLabel,
      readonly,
      disabled,
      inputSize,
      boldText,
      className,
      mask,
      ...props
    } = this.props;

    let TextFieldType = FabricTextField;
    let value = props.value;
    if (mask) {
      TextFieldType = MaskedTextField;
      value = value ? value : '';
    }

    const setValue = () => {
      if (this.props.suffix && this.props.readonly && !this.state.editMode) {
        return value + ' ' + this.props.suffix;
      }
      return value;
    };
    const { errorMessage, ...filteredProps } = this.props;

    return (
      <div className={classnames(getClassNames(this.props), className)}>
        <TextFieldType
          {...filteredProps}
          value={setValue()}
          ariaLabel={props.label}
          disabled={disabled}
          readOnly={this.state.editMode ? '' : readonly}
          className={classnames(
            getClassNames({ ...this.props, editMode: this.state.editMode }),
            className
          )}
          onRenderLabel={onRenderLabel || this._onRenderLabel}
          onBlur={this._onBlur}
          componentRef={inputField => {
            this.props.componentRef && this.props.componentRef(inputField);
            this._textFieldElement = inputField;
          }}
          inputSize={inputSize}
        >
          {children}
        </TextFieldType>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }

  _onRenderLabel = props => {
    const {
      label,
      help,
      warning,
      componentId,
      readOnly,
      editable,
      calloutFloating,
      inputSize
    } = props;
    const styles = getLabelClassNames(props);
    const inputSizeLarge = inputSize === 'large';

    let { isCalloutVisible, activeCallout } = this.state;
    const helpElement = isValidElement(help) ? help : <p>{help}</p>;

    let warningElement = isValidElement(warning) ? warning : <p>{warning}</p>;

    return (
      <div className={styles.labelArea}>
        <span className={styles.label}>
          {label ? <Label htmlFor={componentId}>{label}</Label> : null}
        </span>

        {readOnly && (
          <span className={styles.labelIconArea}>
            {editable && (
              <IconButton
                iconProps={{ iconName: 'Edit' }}
                title="Rediger"
                ariaLabel={'Rediger feltet ' + props.label}
                onClick={this._onEdit}
                className={styles.icon}
              />
            )}
          </span>
        )}

        {help && (
          <span
            className={styles.labelIconArea}
            ref={helpButton => (this._iconButtonElement = helpButton)}
          >
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title="Hjelp"
              ariaLabel={'Hjelpetekst til feltet ' + props.label}
              onClick={() => this._onClick('helpCallout')}
              className={styles.icon}
            />
          </span>
        )}

        {warning && (
          <span
            className={styles.labelIconArea}
            ref={warningButton => (this._iconButtonElement = warningButton)}
          >
            <IconButton
              iconProps={{ iconName: 'WarningOutline' }}
              title="Varsel"
              ariaLabel={'Varseltekst til feltet ' + props.label}
              onClick={() => this._onClick('warningCallout')}
              className={styles.icon}
            />
          </span>
        )}

        {isCalloutVisible && (
          <Callout
            directionalHint={
              (inputSizeLarge && isUndefined(calloutFloating)) ||
              (!isUndefined(calloutFloating) && !calloutFloating)
                ? Callout.POS_BOTTOM_LEFT
                : Callout.POS_TOP_LEFT
            }
            color={
              activeCallout === 'helpCallout' ? Callout.HELP : Callout.WARNING
            }
            ariaLabel={
              activeCallout === 'helpCallout' ? 'Hjelpetekst' : 'Varseltekst'
            }
            target={this._iconButtonElement}
            onClose={this._onDismiss}
          >
            {activeCallout === 'helpCallout' ? helpElement : warningElement}
          </Callout>
        )}
      </div>
    );
  };

  _onClick = type => {
    let { isCalloutVisible, activeCallout } = this.state;

    if (activeCallout !== type && isCalloutVisible) {
      this.setState({
        activeCallout: type
      });
    } else {
      this.setState({
        activeCallout: type,
        isCalloutVisible: !isCalloutVisible
      });
    }
  };

  _onDismiss = () => {
    this.setState({
      isCalloutVisible: false
    });
  };

  _onEdit = () => {
    this._textFieldElement.focus();
    this.setState({ editMode: true });
  };

  _onBlur = e => {
    this.props.onBlur && this.props.onBlur(e);
    if (this.state.editMode === true) {
      this.setState({
        editMode: this.editMode()
      });
    }
  };

  editMode() {
    if (this.props.editableWhenEmpty && !this.props.value) {
      return this.props.value === '' || this.props.length === 0;
    }
    return false;
  }
}
