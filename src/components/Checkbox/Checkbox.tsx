import * as React from 'react';
import classnames from 'classnames';

import {
  Checkbox as FabricCheckbox,
  ICheckboxProps
} from 'office-ui-fabric-react/lib-commonjs/Checkbox';
import { getClassNames } from './Checkbox.classNames';

interface CheckboxProps extends ICheckboxProps {
  /** Angir teknisk navn på elementet */
  name?: string;
}
/**
 * @visibleName Checkbox (Avhukingsboks)
 */
export default class CheckBox extends React.PureComponent<CheckboxProps, {}> {
  static defaultProps = {
    boxSide: 'end'
  };
  render() {
    const { checked, defaultChecked, className, ...props } = this.props;
    const checkedProps = defaultChecked ? { defaultChecked } : { checked };
    return (
      <FabricCheckbox
        {...props}
        className={classnames(getClassNames(this.props), className)}
        role="checkbox"
        {...checkedProps}
      />
    );
  }
}
