import * as React from 'react';
import Callout from '../Callout/Callout';
import classnames from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  ITextFieldProps,
  MaskedTextField as FabricMaskedTextField,
  TextField as FabricTextField
} from 'office-ui-fabric-react/lib-commonjs/TextField';
import { getClassNames as getLabelClassNames } from './TextFieldLabel.classNames';
import { getClassNames } from './TextField.classNames';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { isUndefined } from 'util';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';

class MaskedTextField extends FabricMaskedTextField {
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    this._skipComponentRefResolution = false;
  }
}
interface TextFieldProps extends ITextFieldProps {
  /** Benyttes når teksten for et readOnly tekstfelt skal fremheves  */
  boldText?: boolean;
  /** Bestemmer om hjelptekst/varseltekst skal legge seg mellom label og tekstfelt eller flytende over innhold */
  calloutFloating?: boolean;
  /** Bestemmer om ett readOnly felt skal være alltid redigerbart om det er tomt */
  editableWhenEmpty?: boolean;
  /** Benyttes når et readOnly felt skal være redigertbart  */
  editable?: boolean;
  /** Tilhørende hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på tekstfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Størrelse på label */
  labelSize?: 'small' | 'large';
  /** Tekst inni feltet som vises før man skriver */
  placeholder?: string;
  /** Tilhørende varseltekst */
  warning?: JSX.Element | string;
  /** Antall rader som skal vises i feltet når multiline er satt */
  rows?: number;
}
interface TextFieldState {
  isCalloutVisible: boolean;
  editMode: boolean;
  value: string;
  activeCallout: string;
  lineBreak: boolean;
}
/**
 * @visibleName TextField (Tekstfelt)
 */
export default class TextField extends React.PureComponent<
  TextFieldProps,
  TextFieldState
> {
  static defaultProps = {
    inputSize: 'normal',
    editableWhenEmpty: false,
    labelSize: 'small',
    boldText: true,
    calloutFloating: false
  };
  // @ts-ignore TODO
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
      readOnly,
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
      // @ts-ignore TODO
      TextFieldType = MaskedTextField;
      value = value ? value : '';
    }

    const setValue = () => {
      if (this.props.suffix && this.props.readOnly && !this.state.editMode) {
        return value + ' ' + this.props.suffix;
      }
      return value;
    };
    const { errorMessage, ...filteredProps } = this.props;
    return (
      <div className={classnames(getClassNames(this.props), className)}>
        {/*
  // @ts-ignore  TODO */}
        <TextFieldType
          {...filteredProps}
          value={setValue()}
          ariaLabel={props.label}
          disabled={disabled}
          readOnly={this.state.editMode ? false : readOnly}
          className={classnames(
            getClassNames({ ...this.props, editMode: this.state.editMode }),
            className
          )}
          onRenderLabel={onRenderLabel || this._onRenderLabel}
          onBlur={this._onBlur}
          componentRef={inputField => {
            // @ts-ignore TODO
            this.props.componentRef && this.props.componentRef(inputField);
            // @ts-ignore TODO
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
  // @ts-ignore TODO
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
    const helpElement = React.isValidElement(help) ? help : <p>{help}</p>;

    let warningElement = React.isValidElement(warning) ? (
      warning
    ) : (
      <p>{warning}</p>
    );

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
            // @ts-ignore TODO
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
            // @ts-ignore TODO
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
            // @ts-ignore TODO
            target={this._iconButtonElement}
            onClose={this._onDismiss}
          >
            {activeCallout === 'helpCallout' ? helpElement : warningElement}
          </Callout>
        )}
      </div>
    );
  };
  // @ts-ignore TODO
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
    // @ts-ignore TODO
    this._textFieldElement.focus();
    this.setState({ editMode: true });
  };
  // @ts-ignore TODO
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
      // @ts-ignore TODO
      return this.props.value === '' || this.props.length === 0;
    }
    return false;
  }
}
