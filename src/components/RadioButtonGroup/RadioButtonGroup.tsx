import classnames from 'classnames';
import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupOption,
  IChoiceGroupProps,
} from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './RadioButtonGroup.classNames';
import {
  LabelWithCalloutProps,
  ErrorMessage,
  LabelWithCallout,
  calloutState,
  generateId,
} from '../index';

export interface IRadioButtonGroupOptions extends IChoiceGroupOption {
  description?: string;
}

export interface RadioButtonGroupProps extends IChoiceGroupProps {
  calloutFloating?: boolean;
  /** CSS class */
  className?: string;
  /** Feilmelding */
  errorMessage?: JSX.Element | string;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Horizontal layout */
  horizontal?: boolean;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  options: IRadioButtonGroupOptions[];
  /** Callout warning */
  warning?: JSX.Element | string;
}

/**
 * @visibleName RadioButtonGroup (Radioknapper)
 */

export const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const {
    calloutFloating,
    children,
    className,
    labelWithCalloutAutoDismiss,
    errorMessage,
    help,
    warning,
    id,
    label,
    labelButtonAriaLabel,
    labelCallout,
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
        help={help}
        warning={warning}
        inFieldset={true}
        calloutFloating={calloutFloating}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      <FabricChoiceGroup
        id={groupId}
        options={tempOptions}
        {...rest}
        className={classnames(styles.radioButtons, className)}
        ariaLabelledBy={labelId}
        aria-invalid={errorMessage ? true : false}
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
