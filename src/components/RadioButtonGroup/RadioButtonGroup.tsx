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
  className?: string;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Feilmelding */
  errorMessage?: JSX.Element | string;
  /** Horizontal layout */
  horizontal?: boolean;
  /** Callout warning */
  warning?: JSX.Element | string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  options: IRadioButtonGroupOptions[];
}

/**
 * @visibleName RadioButtonGroup (Radioknapper)
 */

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const {
    calloutFloating,
    children,
    className,
    errorMessage,
    help,
    warning,
    id,
    label,
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
        help={help}
        warning={warning}
        inFieldset={true}
        calloutFloating={calloutFloating}
        onCalloutToggle={onCalloutToggle}
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
