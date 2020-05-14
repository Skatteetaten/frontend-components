import classnames from 'classnames';
import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupOption,
  IChoiceGroupProps
} from 'office-ui-fabric-react/lib-commonjs/ChoiceGroup';
import * as React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getClassNames } from './RadioButtonGroup.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';

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

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
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
    options.forEach(option => {
      if (option.description) {
        option.onRenderLabel = DescriptionRender(option.description);
      }
    });
    tempOptions = options;
  }

  const styles = getClassNames({ ...props });

  return (
    <fieldset id={id} className={styles.fieldset}>
      <LabelWithCallout
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
        options={tempOptions}
        {...rest}
        className={classnames(styles.radioButtons, className)}
        ariaLabelledBy={label}
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
        flexDirection: 'column'
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

export default RadioButtonGroup;
