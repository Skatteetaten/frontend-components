import * as React from 'react';
import classnames from 'classnames';
import { LabelWithCallout } from '../LabelWithCallout';
import { generateId } from '../utils';
import {
  IMaskedTextFieldProps,
  MaskedTextField,
  TextField as FabricTextField,
  ITextField,
} from '@fluentui/react';
import { getClassNames } from './TextField.classNames';
import { TextFieldProps } from './TextField.types';

/*
 * visibleName TextField (Tekstfelt)
 */
export const TextField: React.FC<TextFieldProps> = ({
  calloutFloating,
  children,
  className,
  labelWithCalloutProps,
  editable,
  errorMessage,
  id,
  label,
  required = false,
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

  const onBlur: IMaskedTextFieldProps['onBlur'] = (e) => {
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

  let TextFieldType: React.ComponentType<IMaskedTextFieldProps>;
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
        {...labelWithCalloutProps}
        id={labelId}
        inputId={inputId}
        label={label}
        buttonAriaLabel={
          labelButtonAriaLabel
            ? labelButtonAriaLabel
            : setCustomButtonAriaLabel()
        }
        requiredMark={required}
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
        id={inputId}
        inputMode={inputMode}
        value={setValue()}
        readOnly={editMode ? false : readOnly}
        className={classnames(
          getClassNames({ ...rest, editMode, readOnly }),
          className
        )}
        required={required}
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
