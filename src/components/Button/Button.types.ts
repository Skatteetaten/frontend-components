import { IButtonProps } from '@fluentui/react';

export interface ButtonProps extends IButtonProps {
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
  /** Benyttes for å definere type knapp som skal benyttes */
  buttonStyle?:
    | 'primary'
    | 'primaryCornered'
    | 'warning'
    | 'secondary'
    | 'secondarySimple'
    | 'callToAction';
  /**
   * Skjulte props
   */
  /** @ignore Fjernet til fordel for buttonStyle */
  buttonType?: IButtonProps['buttonType'];
  /** @ignore */
  allowDisabledFocus?: IButtonProps['allowDisabledFocus'];
  /** @ignore */
  checked?: IButtonProps['checked'];
  /** @ignore */
  disabled?: IButtonProps['disabled'];
  /** @ignore */
  split?: IButtonProps['split'];
  /** @ignore */
  getSplitButtonClassNames?: IButtonProps['getSplitButtonClassNames'];
  /** @ignore */
  splitButtonAriaLabel?: IButtonProps['splitButtonAriaLabel'];
  /** @ignore */
  splitButtonMenuProps?: IButtonProps['splitButtonMenuProps'];
  /** @ignore */
  toggle?: IButtonProps['toggle'];
  /** @ignore */
  primary?: IButtonProps['primary'];
  /** @ignore */
  primaryActionButtonProps?: IButtonProps['primaryActionButtonProps'];
  /** @ignore */
  primaryDisabled?: IButtonProps['primaryDisabled'];
  /** @ignore */
  secondaryText?: IButtonProps['secondaryText'];
  /** @ignore */
  toggeled?: boolean;
}
