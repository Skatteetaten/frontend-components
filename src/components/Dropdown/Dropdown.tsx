import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps,
} from 'office-ui-fabric-react';
import * as React from 'react';
import { getCalloutClassNames, getClassNames } from './Dropdown.classNames';
import {
  ErrorMessage,
  Icon,
  LabelWithCallout,
  calloutState,
  LabelWithCalloutProps,
} from '../index';

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

  const genratedId = 'todo';
  const mainId = id ? id : 'dropdown-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';
  const styles = getClassNames(props);

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
          id={inputId}
          className={classnames(styles.main, className)}
          calloutProps={{
            className: getCalloutClassNames(),
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
