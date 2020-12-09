import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps,
  IDropdownStyleProps,
  IDropdownStyles,
} from '@fluentui/react';
import * as React from 'react';
import { getClassNames, getCalloutStyles } from './Dropdown.classNames';
import {
  Icon,
  LabelWithCallout,
  calloutState,
  LabelWithCalloutProps,
  generateId,
} from '../index';
import { IStyleFunctionOrObject } from '@uifabric/utilities';

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

export interface DropdownState {
  isCalloutVisible: boolean;
}
/**
 * @visibleName Dropdown (Nedtrekksliste)
 */
export const Dropdown: React.FC<DropdownProps> = (props) => {
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

  const generatedId = generateId();
  const mainId = id ? id : 'dropdown-' + generatedId;
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
              (option) =>
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
