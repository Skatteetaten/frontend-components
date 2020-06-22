import * as React from 'react';
import { VirtualizedComboBox, IComboBoxProps } from 'office-ui-fabric-react';
import classnames from 'classnames';

import { getClassNames, getOptionsClassNames } from './ComboBox.classNames';
import {
  LabelWithCallout,
  calloutState,
  LabelWithCalloutProps,
  ErrorMessage,
} from '../index';

export interface ComboBoxProps extends IComboBoxProps {
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Egendefinert feilmelding */
  errorMessage?: IComboBoxProps['errorMessage'];
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
}

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
    ...rest
  } = props;

  const genratedId = 'todo';
  const mainId = id ? id : 'combobox-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';
  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        inputId={inputId + '-input'} //Fabric adds its own -input postfix
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      <VirtualizedComboBox
        {...rest}
        id={inputId}
        ariaLabel={label}
        className={classnames(getClassNames(props), className)}
        calloutProps={{
          className: getOptionsClassNames(props),
        }}
      >
        {children}
      </VirtualizedComboBox>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
