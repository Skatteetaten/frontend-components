import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import * as React from 'react';
import Icon from '../Icon/Icon';
import {
  getCalloutClassNames,
  getClassNames,
  getErrorClassNames
} from './Dropdown.classNames';
import LabelWithCallout from '../LabelWithCallout';

export interface DropdownProps extends IDropdownProps {
  /** Hjelpetekst */
  info?: string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
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
    info,
    onRenderLabel,
    className,
    id,
    ...rest
  } = props;
  return (
    <div id={id}>
      <LabelWithCallout label={label} help={info} />
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
      {errorMessage && (
        <div className={getErrorClassNames(props)}>{errorMessage}</div>
      )}
    </div>
  );
};

// @ts-ignore
Dropdown.ItemType = DropdownMenuItemType;

export default Dropdown;
