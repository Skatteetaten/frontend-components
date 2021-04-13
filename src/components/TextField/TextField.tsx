import * as React from 'react';
import classnames from 'classnames';
import { LabelWithCallout, calloutState, generateId } from '../index';
import {
  ITextFieldProps,
  MaskedTextField,
  TextField as FabricTextField,
  ITextField,
} from '@fluentui/react';
import { getClassNames } from './TextField.classNames';

export interface TextFieldProps extends ITextFieldProps {
  /** Benyttes når teksten for et readOnly tekstfelt skal fremheves  */
  boldText?: boolean;
  /** Bestemmer om hjelptekst/varseltekst skal legge seg mellom label og tekstfelt eller flytende over innhold */
  calloutFloating?: boolean;
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Bestemmer om ett readOnly felt skal være alltid redigerbart om det er tomt */
  editableWhenEmpty?: boolean;
  /** Benyttes når et readOnly felt skal være redigertbart  */
  editable?: boolean;
  /** Tilhørende hjelpetekst */
  help?: JSX.Element | string;
  id?: string;
  /** Størrelse på tekstfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Setter inputmode (html 5) på tekstefeltet */
  inputMode?: ITextFieldProps['inputMode'];
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
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
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
}

/**
 * @visibleName TextField (Tekstfelt)
 */
export const TextField: React.FC<TextFieldProps> = ({
  calloutFloating,
  children,
  className,
  labelWithCalloutAutoDismiss,
  editable,
  errorMessage,
  id,
  label,
  labelButtonAriaLabel,
  mask,
  inputMode,
  onCalloutToggle,
  onRenderLabel,
  readOnly,
  value,
  ...rest
}) => {
  rest.inputSize = rest.inputSize || 'normal';
  const shouldEditWhenEmpty = rest.editableWhenEmpty ? value === '' : false;

  const generatedId = generateId();
  const mainId = id ? id : 'textfield-' + generatedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  const textField = React.useRef<ITextField | null>();
  const [editMode, setEditMode] = React.useState(shouldEditWhenEmpty);

  const onEdit = () => {
    textField.current && textField.current.focus();
    setEditMode(true);
  };

  const onBlur: ITextFieldProps['onBlur'] = (e) => {
    rest.onBlur && rest.onBlur(e);
    if (editMode) {
      setEditMode(shouldEditWhenEmpty);
    }
  };

  const setValue = () => {
    if (rest.suffix && readOnly && !editMode) {
      return value + ' ' + rest.suffix;
    } else if (value === null) {
      return undefined;
    }
    return value;
  };

  const setCustomButtonAriaLabel = () => {
    if (rest.suffix && readOnly) {
      return 'Rediger ' + label + ' (' + rest.suffix + ')';
    } else {
      return undefined;
    }
  };

  let TextFieldType: React.ComponentType<ITextFieldProps>;
  if (mask) {
    TextFieldType = MaskedTextField;
  } else {
    TextFieldType = FabricTextField;
  }

  return (
    <div
      id={mainId}
      className={classnames(
        getClassNames({ errorMessage, ...rest }),
        className
      )}
    >
      <LabelWithCallout
        id={labelId}
        inputId={inputId}
        label={label}
        buttonAriaLabel={
          labelButtonAriaLabel
            ? labelButtonAriaLabel
            : setCustomButtonAriaLabel()
        }
        editFunction={onEdit}
        warning={rest.warning}
        help={rest.help}
        readOnly={readOnly}
        editable={editable}
        inputSize={rest.inputSize}
        calloutFloating={calloutFloating}
        autoDismiss={labelWithCalloutAutoDismiss}
        onRenderLabel={onRenderLabel}
        onCalloutToggle={onCalloutToggle}
      />
      <TextFieldType
        {...rest}
        id={inputId}
        inputMode={inputMode}
        value={setValue()}
        readOnly={editMode ? false : readOnly}
        className={classnames(
          getClassNames({ ...rest, editMode, readOnly }),
          className
        )}
        errorMessage={errorMessage}
        onBlur={onBlur}
        componentRef={(ref) => {
          if (rest.componentRef && typeof rest.componentRef === 'function') {
            rest.componentRef(ref);
          }
          textField.current = ref;
        }}
        mask={mask}
      >
        {children}
      </TextFieldType>
    </div>
  );
};
