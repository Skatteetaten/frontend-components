import * as React from 'react';
import { VirtualizedComboBox } from '@fluentui/react';
import classnames from 'classnames';

import { getClassNames, getOptionsClassNames } from './ComboBox.classNames';
import { generateId } from '../utils';
import { LabelWithCallout } from '../LabelWithCallout';
import { ComboBoxProps } from './ComboBox.types';

/**
 * @visibleName ComboBox (Nedtrekksliste med skriving)
 */
export const ComboBox: React.FC<ComboBoxProps> = (props) => {
  const {
    children,
    labelWithCalloutAutoDismiss,
    errorMessage,
    label,
    help,
    className,
    id,
    labelButtonAriaLabel,
    labelCallout,
    onCalloutToggle,
    readOnly,
    ref,
    ...rest
  } = props;

  const generatedId = generateId();
  const mainId = id ? id : 'combobox-' + generatedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  const styles = getClassNames(props);

  return (
    <div id={mainId} ref={ref}>
      <LabelWithCallout
        id={labelId}
        inputId={readOnly ? inputId : inputId + '-input'} //Fabric adds its own -input postfix
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      {readOnly ? (
        <input
          id={inputId}
          type="text"
          readOnly
          className={styles.readOnly}
          value={
            props.text
              ? props.text
              : props.options.filter(
                  (option) => option.key === props.defaultSelectedKey
                )[0].text
          }
        />
      ) : (
        <VirtualizedComboBox
          {...rest}
          id={inputId}
          ariaLabel={label}
          className={classnames(styles.main, className)}
          errorMessage={errorMessage}
          aria-invalid={errorMessage ? true : false}
          calloutProps={{
            className: getOptionsClassNames(props),
          }}
        >
          {children}
        </VirtualizedComboBox>
      )}
    </div>
  );
};

ComboBox.defaultProps = {
  autoComplete: 'on',
  allowFreeform: false,
  label: undefined,
  errorMessage: undefined,
  help: undefined,
  disabled: false,
};
