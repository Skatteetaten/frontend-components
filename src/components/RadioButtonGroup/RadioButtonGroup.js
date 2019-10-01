import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ChoiceGroup as FabricChoiceGroup } from 'office-ui-fabric-react/lib-commonjs/ChoiceGroup';
import { getClassNames } from './RadioButtonGroup.classNames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

/**
 * @visibleName RadioButtonGroup (Radioknapper)
 */
export class RadioButtonGroup extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Label */
    label: PropTypes.string,
    errorMessage: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  };

  render() {
    const {
      children,
      className,
      id,
      label,
      errorMessage,
      ...props
    } = this.props;
    return (
      <div id={id}>
        <FabricChoiceGroup
          {...props}
          className={classnames(getClassNames(this.props), className)}
          label={label}
          ariaLabelledBy={label}
        >
          {children}
        </FabricChoiceGroup>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
}

export default RadioButtonGroup;
