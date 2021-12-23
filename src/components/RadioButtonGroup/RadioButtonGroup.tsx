import classnames from 'classnames';
import { ChoiceGroup as FabricChoiceGroup } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './RadioButtonGroup.classNames';
import { generateId } from '../utils';
import { LabelWithCallout } from '../LabelWithCallout';
import { ErrorMessage } from '../ErrorMessage';
import { RadioButtonGroupProps } from './RadioButtonGroup.types';

/*
 * visibleName RadioButtonGroup (Radioknapper)
 */

export const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const {
    calloutFloating,
    children,
    className,
    errorMessage,
    help,
    warning,
    id,
    required = false,
    label,
    labelSize,
    labelButtonAriaLabel,
    labelWithCalloutProps,
    onCalloutToggle,
    options,
    ...rest
  } = props;
  let tempOptions = options;

  if (options) {
    options.forEach((option) => {
      if (option.description) {
        option.onRenderLabel = DescriptionRender(option.description);
      }
    });
    tempOptions = options;
  }

  const styles = getClassNames({ ...props });

  const generatedId = generateId();
  const mainId = id ? id : 'radiogroup-' + generatedId;
  const groupId = mainId + '-group';
  const labelId = mainId + '-label';

  return (
    <fieldset id={mainId} className={styles.fieldset}>
      <LabelWithCallout
        id={labelId}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        requiredMark={required}
        help={help}
        inputSize={labelSize}
        warning={warning}
        inFieldset={true}
        calloutFloating={calloutFloating}
        onCalloutToggle={onCalloutToggle}
        {...labelWithCalloutProps}
      />
      <FabricChoiceGroup
        id={groupId}
        options={tempOptions}
        {...rest}
        className={classnames(styles.radioButtons, className)}
        ariaLabelledBy={labelId}
        aria-invalid={errorMessage ? true : false}
        required={required}
      >
        {children}
      </FabricChoiceGroup>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </fieldset>
  );
};

const DescriptionRender = (description: string) => (p: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span id={p.labelId} className="ms-ChoiceFieldLabel">
        {' '}
        {p.text}{' '}
      </span>
      <span className={'descriptionLabel ms-ChoiceFieldLabel'}>
        {' '}
        {description}{' '}
      </span>
    </div>
  );
};
