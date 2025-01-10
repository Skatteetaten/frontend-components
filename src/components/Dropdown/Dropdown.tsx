import classnames from 'classnames';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownStyleProps,
  IDropdownStyles,
} from '@fluentui/react';
import * as React from 'react';
import { getClassNames, getCalloutStyles } from './Dropdown.classNames';
import { generateId } from '../utils';
import { Icon } from '../Icon';
import { LabelWithCallout } from '../LabelWithCallout';
import { IStyleFunctionOrObject } from '@fluentui/utilities';
import { DropdownProps } from './DropDown.types';

/**
 * @deprecated Komponenten er erstattet av Select fra "@skatteetaten/ds-forms"
 *
 * visibleName Dropdown (Nedtrekksliste)
 */
export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    children,
    errorMessage,
    label,
    labelButtonAriaLabel,
    help,
    onRenderLabel,
    required = false,
    className,
    id,
    labelWithCalloutProps,
    onCalloutToggle,
    calloutProps,
    readOnly,
    requiredWithMark = false,
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
        requiredMark={requiredWithMark}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        onCalloutToggle={onCalloutToggle}
        calloutProps={{
          ...labelWithCalloutProps?.calloutProps,
        }}
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
          required={required || requiredWithMark}
          className={classnames(styles.main, className)}
          styles={dropdownStyles}
          onRenderCaretDown={() => <Icon iconName={'ChevronDown'} />}
          errorMessage={errorMessage}
          calloutProps={{
            ...calloutProps,
          }}
        >
          {children}
        </FabricDropdown>
      )}
    </div>
  );
};
// @ts-ignore
Dropdown.ItemType = DropdownMenuItemType;
