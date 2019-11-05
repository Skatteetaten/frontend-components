import classnames from 'classnames';
import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupProps
} from 'office-ui-fabric-react/lib-commonjs/ChoiceGroup';
import * as React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getClassNames } from './RadioButtonGroup.classNames';
import LabelWithCallout from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';

interface RadioButtonGroupProps extends IChoiceGroupProps {
  calloutFloating?: boolean;
  className?: string;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Feilmelding */
  errorMessage: JSX.Element | string;
  /** Callout warning */
  warning: JSX.Element | string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
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
    ...rest
  } = props;

  return (
    <>
      <LabelWithCallout
        label={label}
        help={help}
        warning={warning}
        calloutFloating={calloutFloating}
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
