import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { getCalloutClassNames, getClassNames } from './Dropdown.classNames';
import LabelWithCallout from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';
import ErrorMessage from '../ErrorMessage';

export interface DropdownProps extends IDropdownProps {
  /** Hjelpetekst */
  help?: string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** @ignore */
  multiSelect?: IDropdownProps['multiSelect'];
  /** @ignore */
  multiSelectDelimiter?: IDropdownProps['multiSelectDelimiter'];
}

interface DropdownState {
  isCalloutVisible: boolean;
}
/**
 * @visibleName Dropdown (Nedtrekksliste)
 */
const Dropdown: React.FC<DropdownProps> = props => {
  const {
    children,
    errorMessage,
    label,
    help,
    onRenderLabel,
    className,
    id,
    labelCallout,
    ...rest
  } = props;
  return (
    <div id={id}>
      <LabelWithCallout label={label} help={help} {...labelCallout} />
      <FabricDropdown
        {...rest}
        className={classnames(getClassNames(props), className)}
        calloutProps={{
          className: getCalloutClassNames()
        }}
        onRenderCaretDown={() => <Icon iconName={'ChevronDown'} />}
      >
        {children}
      </FabricDropdown>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

// @ts-ignore
Dropdown.ItemType = DropdownMenuItemType;

export default Dropdown;
