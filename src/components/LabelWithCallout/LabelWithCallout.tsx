import * as React from 'react';
import { getClassNames } from './LabelWithCallout.classNames';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs';
import Callout from '../Callout';
import { isUndefined } from 'util';
import classnames from 'classnames';
import { Label } from 'office-ui-fabric-react';

export interface LabelWithCalloutProps {
  calloutFloating?: boolean;
  className?: string | undefined;
  editable?: boolean;
  editFunction?: () => void;
  help?: string | JSX.Element | undefined;
  inputSize?: 'small' | 'normal' | 'large';
  label?: string | JSX.Element | undefined;
  readOnly?: boolean;
  warning?: string | JSX.Element | undefined;
  id?: any;
}
const LabelWithCallout = (props: LabelWithCalloutProps) => {
  const {
    calloutFloating,
    className,
    editable,
    editFunction,
    help,
    id,
    inputSize,
    label,
    readOnly,
    warning
  } = props;
  const styles = getClassNames(props);
  const [activeCallout, setActiveCallout] = React.useState('');
  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
  const iconButtonElementRef = React.useRef<HTMLSpanElement>(null);
  const inputSizeLarge = inputSize === 'large';

  const helpElement = React.isValidElement(help) ? help : <p>{help}</p>;
  const warningElement = React.isValidElement(warning) ? (
    warning
  ) : (
    <p>{warning}</p>
  );
  return (
    <div id={id} className={classnames(styles.labelArea, className)}>
      <span className={styles.label}>
        {label ? <Label>{label}</Label> : null}
      </span>
      {help && (
        <span className={styles.labelIconArea} ref={iconButtonElementRef}>
          <IconButton
            iconProps={{ iconName: 'HelpOutline' }}
            title="Hjelp"
            ariaLabel={"help"}
            onClick={() => {
              setIsCalloutVisible(!isCalloutVisible);
              setActiveCallout('helpCallout');
            }}
            className={styles.icon}
          />
        </span>
      )}
      {warning && (
        <span className={styles.labelIconArea} ref={iconButtonElementRef}>
          <IconButton
            iconProps={{ iconName: 'WarningOutline' }}
            title="Varsel"
            ariaLabel={'warning'}
            onClick={() => {
              setIsCalloutVisible(!isCalloutVisible);
              setActiveCallout('warningCallout');
            }}
            className={styles.icon}
          />
        </span>
      )}
      {readOnly && (
        <span className={styles.labelIconArea}>
          {editable && (
            <IconButton
              iconProps={{ iconName: 'Edit' }}
              title="Rediger"
              ariaLabel={'edit'}
              onClick={editFunction}
              className={styles.icon}
            />
          )}
        </span>
      )}
      {isCalloutVisible && (
        <Callout
          className={styles.calloutContext}
          directionalHint={
            (inputSizeLarge && isUndefined(calloutFloating)) ||
            (!isUndefined(calloutFloating) && !calloutFloating)
              ? Callout.POS_BOTTOM_LEFT
              : Callout.POS_TOP_LEFT
          }
          color={
            activeCallout === 'helpCallout' ? Callout.HELP : Callout.WARNING
          }
          ariaLabel={
            activeCallout === 'helpCallout' ? 'Hjelpetekst' : 'Varseltekst'
          }
          target={iconButtonElementRef.current}
          onClose={() => setIsCalloutVisible(false)}
        >
          {activeCallout === 'helpCallout' ? helpElement : warningElement}
        </Callout>
      )}
    </div>
  );
};
export default LabelWithCallout;
