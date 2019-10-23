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
import RenderLabel from './RenderLabel';

export interface DropdownProps extends IDropdownProps {
  /** Hjelpetekst */
  info?: string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
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
    ...rest
  } = props;
  return (
    <>
      <RenderLabel label={label} info={info} />
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
    </>
  );
};

// @ts-ignore
Dropdown.ItemType = DropdownMenuItemType;

export default Dropdown;
