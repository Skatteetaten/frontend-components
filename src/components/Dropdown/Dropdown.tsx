import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { getCalloutStyles, getClassNames } from './Dropdown.classNames';
import LabelWithCallout, { calloutState } from '../LabelWithCallout';
import { LabelWithCalloutProps } from '../LabelWithCallout/LabelWithCallout';
import { useId } from '@reach/auto-id';
import { IStyleFunctionOrObject } from '@uifabric/utilities';
import {
  IDropdownStyleProps,
  IDropdownStyles
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';

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
  /** Lesemodus. Kan brukes i sammenheng med selectedKey eller defaultSelectedKey for å vise verdi */
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
  const dropdownStyles: IStyleFunctionOrObject<
    IDropdownStyleProps,
    IDropdownStyles
  > = getCalloutStyles();

  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        inputId={readOnly ? inputId : inputId + '-option'}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      {readOnly ? (
        <input
          id={inputId}
          type="text"
          readOnly
          className={styles.readOnly}
          aria-invalid={errorMessage ? true : false}
          value={
            props.options.filter(
              option =>
                option.key === (props.selectedKey || props.defaultSelectedKey)
            )[0].text
          }
        />
      ) : (
        <FabricDropdown
          {...rest}
          ariaLabel={label}
          aria-invalid={errorMessage ? true : false}
          id={inputId}
          className={classnames(styles.main, className)}
          styles={dropdownStyles}
          onRenderCaretDown={() => <Icon iconName={'ChevronDown'} />}
          errorMessage={errorMessage}
        >
          {children}
        </FabricDropdown>
      )}
    </div>
  );
};
// @ts-ignore
Dropdown.ItemType = DropdownMenuItemType;

export default Dropdown;
