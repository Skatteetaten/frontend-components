import { ICheckboxProps } from '@fluentui/react';

export interface CheckBoxProps extends ICheckboxProps {
  /** Angir teknisk navn på elementet */
  name?: string;
  /** @ignore */
  indeterminate?: ICheckboxProps['indeterminate'];
  /** @ignore */
  defaultIndeterminate?: ICheckboxProps['indeterminate'];
}
