import classnames from 'classnames';
import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupProps
} from 'office-ui-fabric-react/lib-commonjs/ChoiceGroup';
import * as React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getClassNames } from './RadioButtonGroup.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';

export interface RadioButtonGroupProps extends IChoiceGroupProps {
  calloutFloating?: boolean;
  /** Rendrer labelen som legend til bruk i et fieldset */
  renderAsLegend?: boolean;
  className?: string;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Feilmelding */
  errorMessage?: JSX.Element | string;
  /** Callout warning */
  warning?: JSX.Element | string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
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
    renderAsLegend,
    help,
    warning,
    id,
    label,
    labelCallout,
    onCalloutToggle,
    ...rest
  } = props;

  return (
    <>
      <LabelWithCallout
        id={id}
        label={label}
        renderAsLegend={renderAsLegend}
        help={help}
        warning={warning}
        calloutFloating={calloutFloating}
        onCalloutToggle={onCalloutToggle}
        {...labelCallout}
      />
      <FabricChoiceGroup
        {...rest}
        className={classnames(getClassNames(props), className)}
        ariaLabelledBy={label}
      >
        {children}
      </FabricChoiceGroup>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default RadioButtonGroup;
