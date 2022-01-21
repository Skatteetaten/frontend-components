import { ICheckboxProps } from '@fluentui/react';

export interface CheckBoxProps extends ICheckboxProps {
  /** Angir teknisk navn på elementet */
  name?: string;
  /** Om checkboxen skal markeres med feiltilstand */
  error?: boolean;
  /** @ignore */
  indeterminate?: ICheckboxProps['indeterminate'];
  /** @ignore */
  defaultIndeterminate?: ICheckboxProps['indeterminate'];
}
