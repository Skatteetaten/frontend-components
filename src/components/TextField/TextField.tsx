import * as React from 'react';
import classnames from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  ITextFieldProps,
  MaskedTextField,
  TextField as FabricTextField
} from 'office-ui-fabric-react/lib-commonjs/TextField';
import { getClassNames } from './TextField.classNames';
import LabelWithCallout from '../LabelWithCallout';
import { ITextField } from 'office-ui-fabric-react';

export interface TextFieldProps extends ITextFieldProps {
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
  /** @ignore */
  borderless?: ITextFieldProps['borderless'];
  /** @ignore */
  underlined?: ITextFieldProps['underlined'];
  /** @ignore */
  editMode?: boolean;
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
  private readonly _textField: React.RefObject<ITextField>;

  constructor(props: TextFieldProps) {
    super(props);
    this._textField = React.createRef();
    this.state = {
      isCalloutVisible: false,
      editMode: this.editMode(),
      value: '',
      activeCallout: '',
      lineBreak: false
    };
  }
  static defaultProps = {
    inputSize: 'normal',
    editableWhenEmpty: false,
    labelSize: 'small',
    calloutFloating: false
  };
  render() {
    const {
      children,
      onRenderLabel,
      className,
      mask,
      editable,
      errorMessage,
      readOnly,
      value,
      label,
      calloutFloating,
      ...rest
    } = this.props;
    let TextFieldType;
    if (mask) {
      TextFieldType = MaskedTextField;
    } else {
      TextFieldType = FabricTextField;
    }
    const setValue = () => {
      if (this.props.suffix && readOnly && !this.state.editMode) {
        return value + ' ' + this.props.suffix;
      }
      return value;
    };

    return (
      <div className={classnames(getClassNames(this.props), className)}>
        <LabelWithCallout
          label={label}
          editFunction={this._onEdit}
          warning={this.props.warning}
          help={this.props.help}
          readOnly={this.props.readOnly}
          editable={this.props.editable}
          inputSize={this.props.inputSize}
          calloutFloating={calloutFloating}
          onRenderLabel={onRenderLabel}
        />
        <TextFieldType
          {...rest}
          value={setValue()}
          readOnly={this.state.editMode ? false : readOnly}
          className={classnames(
            getClassNames({ ...this.props, editMode: this.state.editMode }),
            className
          )}
          onBlur={this._onBlur}
          componentRef={this._textField}
          mask={mask}
        >
          {children}
        </TextFieldType>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }

  _onEdit = () => {
    this._textField &&
      this._textField.current &&
      this._textField.current.focus();
    this.setState({ editMode: true });
  };

  _onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.props.onBlur && this.props.onBlur(e);
    if (this.state.editMode) {
      this.setState({
        editMode: this.editMode()
      });
    }
  };

  editMode() {
    if (this.props.editableWhenEmpty && !this.props.value) {
      return this.props.value === '';
    }
    return false;
  }
}
