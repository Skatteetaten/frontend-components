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
  /** Brukerspesifisert event for callout */
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Lesemodus. Kan brukes i sammenheng med text eller defaultSelectedKey for å vise verdi */
  readOnly?: boolean;
}

/**
 * @visibleName ComboBox (Nedtrekksliste med skriving)
 */
const Combobox: React.FC<ComboboxProps> = props => {
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
    ...rest
  } = props;

  const genratedId = useId(id);
  const mainId = id ? id : 'combobox-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  const styles = getClassNames(props);

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
      {readOnly ? (
        <input
          type="text"
          readOnly
          className={styles.readOnly}
          value={
            props.text
              ? props.text
              : props.options.filter(
                  option => option.key === props.defaultSelectedKey
                )[0].text
          }
        />
      ) : (
        <VirtualizedComboBox
          {...rest}
          id={inputId}
          ariaLabel={label}
          className={classnames(styles.main, className)}
          calloutProps={{
            className: getOptionsClassNames(props)
          }}
        >
          {children}
        </VirtualizedComboBox>
      )}

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
