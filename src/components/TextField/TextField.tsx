import * as React from 'react';
import classnames from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  ITextFieldProps,
  MaskedTextField,
  TextField as FabricTextField,
  ITextField
} from 'office-ui-fabric-react/lib-commonjs/TextField';
import { getClassNames } from './TextField.classNames';
import LabelWithCallout from '../LabelWithCallout';

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
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: () => void;
}

/**
 * @visibleName TextField (Tekstfelt)
 */
export const TextField: React.FC<TextFieldProps> = ({
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
  onCalloutToggle,
  ...rest
}) => {
  const shouldEditWhenEmpty = rest.editableWhenEmpty ? value === '' : false;

  const textField = React.useRef<ITextField | null>();
  const [editMode, setEditMode] = React.useState(shouldEditWhenEmpty);

  const onEdit = () => {
    textField.current && textField.current.focus();
    setEditMode(true);
  };

  const onBlur: ITextFieldProps['onBlur'] = e => {
    rest.onBlur && rest.onBlur(e);
    if (editMode) {
      setEditMode(shouldEditWhenEmpty);
    }
  };

  const setValue = () => {
    if (rest.suffix && readOnly && !editMode) {
      return value + ' ' + rest.suffix;
    }
    return value;
  };

  let TextFieldType: React.ComponentType<ITextFieldProps>;
  if (mask) {
    TextFieldType = MaskedTextField;
  } else {
    TextFieldType = FabricTextField;
  }

  return (
    <div className={classnames(getClassNames(rest), className)}>
      <LabelWithCallout
        label={label}
        editFunction={onEdit}
        warning={rest.warning}
        help={rest.help}
        readOnly={readOnly}
        editable={editable}
        inputSize={rest.inputSize}
        calloutFloating={calloutFloating}
        onRenderLabel={onRenderLabel}
        onCalloutToggle={onCalloutToggle}
      />
      <TextFieldType
        {...rest}
        value={setValue()}
        readOnly={editMode ? false : readOnly}
        className={classnames(getClassNames({ ...rest, editMode }), className)}
        onBlur={onBlur}
        componentRef={ref => {
          if (rest.componentRef && typeof rest.componentRef === 'function') {
            rest.componentRef(ref);
          }
          textField.current = ref;
        }}
        mask={mask}
      >
        {children}
      </TextFieldType>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextField;
