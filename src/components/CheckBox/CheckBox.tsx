import classnames from 'classnames';
import { Checkbox as FabricCheckBox } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './CheckBox.classNames';
import { CheckBoxProps } from './CheckBox.types';

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
