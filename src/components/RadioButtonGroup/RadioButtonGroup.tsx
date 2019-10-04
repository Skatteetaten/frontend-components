import * as React from 'react';
import classnames from 'classnames';

import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupProps
} from 'office-ui-fabric-react/lib-commonjs/ChoiceGroup';
import { getClassNames } from './RadioButtonGroup.classNames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface RadioButtonGroupProps extends IChoiceGroupProps {
  className?: string;
  errorMessage?: JSX.Element | string;
}
/**
 * @visibleName RadioButtonGroup (Radioknapper)
 */
export class RadioButtonGroup extends React.PureComponent<
  RadioButtonGroupProps,
  {}
> {
  render() {
    const { children, className, errorMessage, ...props } = this.props;
    return (
      <>
        <FabricChoiceGroup
          {...props}
          className={classnames(getClassNames(this.props), className)}
        >
          {children}
        </FabricChoiceGroup>
        <ErrorMessage showError={!!errorMessage}>{errorMessage}</ErrorMessage>
      </>
    );
  }
}

export default RadioButtonGroup;
