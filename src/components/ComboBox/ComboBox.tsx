import * as React from 'react';
import {
  VirtualizedComboBox,
  IComboBoxProps
} from 'office-ui-fabric-react/lib-commonjs/ComboBox';
import classnames from 'classnames';

import { getClassNames, getOptionsClassNames } from './ComboBox.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';
import ErrorMessage from '../ErrorMessage';
import { useId } from '@reach/auto-id';

export interface ComboboxProps extends IComboBoxProps {
  /** Lukk callout på blur */
  closeLabelWithCalloutOnBlur?: boolean;
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
    closeLabelWithCalloutOnBlur,
    errorMessage,
    label,
    help,
    className,
    id,
    labelCallout,
    onCalloutToggle,
    ...rest
  } = props;

  const genratedId = useId(id);
  const mainId = id ? id : 'combobox-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';
  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        inputId={inputId + '-input'} //Fabric adds its own -input postfix
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        closeOnBlur={closeLabelWithCalloutOnBlur}
        {...labelCallout}
      />
      <VirtualizedComboBox
        {...rest}
        id={inputId}
        ariaLabel={label}
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
