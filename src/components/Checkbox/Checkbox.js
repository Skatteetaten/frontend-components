import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Checkbox as FabricCheckbox } from 'office-ui-fabric-react/lib-commonjs/Checkbox';
import { getClassNames } from './Checkbox.classNames';

/**
 * @visibleName Checkbox (Avhukingsboks)
 */
export default class Checkbox extends React.PureComponent {
  static propTypes = {
    /** Om checkboxen er avhuket eller ikke */
    checked: PropTypes.bool,
    /** Om checkboxen er avhuket som standard */
    defaultChecked: PropTypes.bool,
    /** Om checkboxen er inaktiv */
    disabled: PropTypes.bool,
    /** Angir hvilken side av teksten som boksen skal komme på */
    boxSide: PropTypes.oneOf(['start', 'end']),
    /** Angir teksten ved siden av boksen */
    label: PropTypes.string,
    /** Angir teknisk navn på elementet */
    name: PropTypes.string,
    /** callback ved endring */
    onChange: PropTypes.func,
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
  };
  static defaultProps = {
    boxSide: 'end'
  };
  render() {
    const {
      checked,
      defaultChecked,
      disabled,
      boxSide,
      label,
      name,
      onChange,
      className,
      id,
      ...props
    } = this.props;
    const checkedProps = defaultChecked ? { defaultChecked } : { checked };
    return (
      <div id={id}>
        <FabricCheckbox
          {...props}
          className={classnames(getClassNames(this.props), className)}
          disabled={disabled}
          boxSide={boxSide}
          label={label}
          name={name}
          onChange={onChange}
          role="checkbox"
          {...checkedProps}
        />
      </div>
    );
  }
}
