import classnames from 'classnames';
import { Checkbox as FabricCheckBox, ICheckboxProps } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './CheckBox.classNames';

export interface CheckBoxProps extends ICheckboxProps {
  /** Angir teknisk navn på elementet */
  name?: string;
  /** @ignore */
  indeterminate?: ICheckboxProps['indeterminate'];
  /** @ignore */
  defaultIndeterminate?: ICheckboxProps['indeterminate'];
}
/**
 * @visibleName CheckBox (Avkrysningsboks)
 */
export class CheckBox extends React.PureComponent<CheckBoxProps, {}> {
  static defaultProps = {
    boxSide: 'end',
  };
  render() {
    const { checked, defaultChecked, className, ...props } = this.props;
    const checkedProps = defaultChecked ? { defaultChecked } : { checked };
    return (
      <FabricCheckBox
        {...props}
        className={classnames(getClassNames(), className)}
        role="checkbox"
        {...checkedProps}
      />
    );
  }
}
