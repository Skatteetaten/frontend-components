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
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** @ignore */
  multiSelect?: IDropdownProps['multiSelect'];
  /** @ignore */
  multiSelectDelimiter?: IDropdownProps['multiSelectDelimiter'];
  /** Brukerspesifisert event for callout */
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Lesemodus */
  readOnly?: boolean;
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
    labelButtonAriaLabel,
    help,
    onRenderLabel,
    className,
    id,
    labelCallout,
    onCalloutToggle,
    readOnly,
    ...rest
  } = props;

  const genratedId = useId(id);
  const mainId = id ? id : 'dropdown-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';
  const styles = getClassNames(props);

  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        inputId={inputId + '-option'}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      {readOnly ? (
        <input
          readOnly
          className={styles.readOnly}
          value={
            props.options.filter(
              option => option.key === props.defaultSelectedKey
            )[0].text
          }
        />
      ) : (
        <FabricDropdown
          {...rest}
          ariaLabel={label}
          id={inputId}
          className={classnames(styles.main, className)}
          calloutProps={{
            className: getCalloutClassNames()
          }}
          onRenderCaretDown={() => <Icon iconName={'ChevronDown'} />}
        >
          {children}
        </FabricDropdown>
      )}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

// @ts-ignore
Dropdown.ItemType = DropdownMenuItemType;

export default Dropdown;
