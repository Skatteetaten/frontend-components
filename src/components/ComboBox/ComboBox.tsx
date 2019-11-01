import * as React from 'react';
import {
  VirtualizedComboBox,
  IComboBoxProps
} from 'office-ui-fabric-react/lib-commonjs/ComboBox';
import classnames from 'classnames';

import { getClassNames, getOptionsClassNames } from './ComboBox.classNames';
import ErrorMessage from '../ErrorMessage';
import LabelWithCallout from '../LabelWithCallout';

export interface ComboboxProps extends IComboBoxProps {
  /** Egendefinert feilmelding */
  errorMessage?: IComboBoxProps['errorMessage'];
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
}

/**
 * @visibleName ComboBox (Nedtrekksliste med skriving)
 */
const Combobox: React.FC<ComboboxProps> = props => {
  const { children, errorMessage, label, help, className, id, ...rest } = props;
  return (
    <div id={id}>
      <LabelWithCallout label={label} help={help} />
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
