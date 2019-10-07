import * as React from 'react';
import classnames from 'classnames';

import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupProps
} from 'office-ui-fabric-react/lib-commonjs/ChoiceGroup';
import { getClassNames } from './RadioButtonGroup.classNames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { IconButton, Label } from 'office-ui-fabric-react/lib-commonjs';
import { getClassNames as getLabelClassNames } from '../TextField/TextFieldLabel.classNames';
import Callout from '../Callout';
import { isUndefined } from 'util';

interface RadioButtonGroupProps extends IChoiceGroupProps {
  calloutFloating?: boolean;
  className?: string;
  errorMessage?: JSX.Element | string;
  help?: JSX.Element | string;
  warning: JSX.Element | string;
}

/**
 * @visibleName RadioButtonGroup (Radioknapper)
 */

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const {
    calloutFloating,
    children,
    className,
    errorMessage,
    help,
    id,
    label,
    warning,
    ...rest
  } = props;
  const [activeCallout, setActiveCallout] = React.useState('');
  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
  const [_iconButtonElement, set_iconButtonElement] = React.useState('');
  const styles = getLabelClassNames(props);
  const helpElement = <p>{help}</p>;
  let warningElement = <p>{warning}</p>;

  return (
    <>
      <div id={id} className={styles.labelArea}>
        <span className={styles.label}>
          {label ? <Label>{label}</Label> : null}
        </span>
        {help && (
          <span
            className={styles.labelIconArea}
            ref={helpButton => set_iconButtonElement(helpButton)}
          >
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title="Hjelp"
              ariaLabel={'Hjelpetekst til feltet ' + label}
              onClick={() => {
                setIsCalloutVisible(!isCalloutVisible);
                setActiveCallout('helpCallout');
              }}
              className={styles.icon}
            />
          </span>
        )}
        {warning && (
          <span
            className={styles.labelIconArea}
            ref={warningButton => set_iconButtonElement(warningButton)}
          >
            <IconButton
              iconProps={{ iconName: 'WarningOutline' }}
              title="Varsel"
              ariaLabel={'Varseltekst til feltet ' + label}
              onClick={() => {
                setIsCalloutVisible(!isCalloutVisible);
                setActiveCallout('warningCallout');
              }}
              className={styles.icon}
            />
          </span>
        )}
        {isCalloutVisible && (
          <Callout
            directionalHint={
              !isUndefined(calloutFloating) && !calloutFloating
                ? Callout.POS_BOTTOM_LEFT
                : Callout.POS_TOP_LEFT
            }
            color={
              activeCallout === 'helpCallout' ? Callout.HELP : Callout.WARNING
            }
            ariaLabel={
              activeCallout === 'helpCallout' ? 'Hjelpetekst' : 'Varseltekst'
            }
            target={_iconButtonElement}
            onClose={() => setIsCalloutVisible(false)}
          >
            {activeCallout === 'helpCallout' ? helpElement : warningElement}
          </Callout>
        )}
      </div>
      <FabricChoiceGroup
        {...rest}
        className={classnames(getClassNames(props), className)}
        ariaLabelledBy={label}
      >
        {children}
      </FabricChoiceGroup>
      <ErrorMessage showError={!!errorMessage}>{errorMessage}</ErrorMessage>
    </>
  );
};

export default RadioButtonGroup;