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
import { t } from 'i18next';

/**
 * @deprecated Komponenten er erstattet av TextField fra "@skatteetaten/ds-forms"
 *
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
  requiredWithMark = false,
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
    setEditMode(true);
    // useState er ikke synkron, la den rerendre før vi setter focus
    setTimeout(() => textField.current && textField.current.focus(), 10);
  };

  const onBlur: IMaskedTextFieldProps['onBlur'] = (e) => {
    rest.onBlur && rest.onBlur(e);
    if (editMode) {
      setEditMode(shouldEditWhenEmpty);
    }
  };

  const setValue = () => {
    if (readOnly && !editMode) {
      let readOnlyValue = value;
      if (rest.suffix) {
        readOnlyValue = readOnlyValue + ' ' + rest.suffix;
      }
      if (rest.prefix) {
        readOnlyValue = rest.prefix + ' ' + readOnlyValue;
      }
      return readOnlyValue;
    } else if (value === null) {
      return undefined;
    }
    return value;
  };

  const setCustomButtonAriaLabel = () => {
    if (rest.suffix && readOnly) {
      return `${t('common.edit')} ${label} (${rest.suffix})`;
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

  const fluentuiLabelNaarHarAffikser =
    rest.prefix || rest.suffix ? label : undefined;

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
        requiredMark={requiredWithMark}
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
        required={required || requiredWithMark}
        errorMessage={errorMessage}
        onBlur={onBlur}
        componentRef={(ref) => {
          if (rest.componentRef && typeof rest.componentRef === 'function') {
            rest.componentRef(ref);
          }
          textField.current = ref;
        }}
        mask={mask}
        label={fluentuiLabelNaarHarAffikser}
      >
        {children}
      </TextFieldType>
    </div>
  );
};
