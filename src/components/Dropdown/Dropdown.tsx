import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { getCalloutClassNames, getClassNames } from './Dropdown.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';
import ErrorMessage from '../ErrorMessage';
import { useId } from '@reach/auto-id';

export interface DropdownProps extends IDropdownProps {
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** @ignore */
  multiSelect?: IDropdownProps['multiSelect'];
  /** @ignore */
  multiSelectDelimiter?: IDropdownProps['multiSelectDelimiter'];
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
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
    labelWithCalloutAutoDismiss,
    errorMessage,
    label,
    help,
    onRenderLabel,
    className,
    id,
    labelCallout,
    onCalloutToggle,
    ...rest
  } = props;

  const genratedId = useId(id);
  const mainId = id ? id : 'dropdown-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        inputId={inputId + '-option'}
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      <FabricDropdown
        {...rest}
        ariaLabel={label}
        id={inputId}
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
