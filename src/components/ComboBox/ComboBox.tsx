import * as React from 'react';
import {
  VirtualizedComboBox,
  IComboBoxProps
} from 'office-ui-fabric-react/lib-commonjs/ComboBox';
import classnames from 'classnames';

import { getClassNames, getOptionsClassNames } from './ComboBox.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';
import ErrorMessage from 'components/ErrorMessage';

export interface ComboboxProps extends IComboBoxProps {
  /** Egendefinert feilmelding */
  errorMessage?: IComboBoxProps['errorMessage'];
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
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
const Combobox: React.FC<ComboboxProps> = props => {
  const {
    children,
    errorMessage,
    label,
    help,
    className,
    id,
    labelCallout,
    onCalloutToggle,
    ...rest
  } = props;
  return (
    <div id={id}>
      <LabelWithCallout
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        {...labelCallout}
      />
      <VirtualizedComboBox
        {...rest}
        role="combobox"
        className={classnames(getClassNames(props), className)}
        calloutProps={{
          className: getOptionsClassNames(props)
        }}
      >
        {children}
      </VirtualizedComboBox>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

Combobox.defaultProps = {
  autoComplete: 'on',
  allowFreeform: false,
  label: undefined,
  errorMessage: undefined,
  help: undefined,
  disabled: false
};

export default Combobox;
