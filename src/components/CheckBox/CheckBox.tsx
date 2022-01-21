import classnames from 'classnames';
import { Checkbox as FabricCheckBox } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './CheckBox.classNames';
import { CheckBoxProps } from './CheckBox.types';

/*
 * visibleName CheckBox (Avkrysningsboks)
 */
export class CheckBox extends React.PureComponent<CheckBoxProps, {}> {
  static defaultProps = {
    boxSide: 'end',
  };
  render() {
    const {
      checked,
      defaultChecked,
      className,
      inputProps,
      ...props
    } = this.props;
    const checkedProps = defaultChecked ? { defaultChecked } : { checked };
    const inputPropsWithRole = {
      ...inputProps,
      role: 'checkbox',
    };
    return (
      <FabricCheckBox
        {...props}
        className={classnames(getClassNames(this.props.error), className)}
        inputProps={inputPropsWithRole}
        {...checkedProps}
      />
    );
  }
}
