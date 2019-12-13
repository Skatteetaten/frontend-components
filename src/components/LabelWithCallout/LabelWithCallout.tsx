import * as React from 'react';
import { getClassNames } from './LabelWithCallout.classNames';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import Callout from '../Callout';
import classnames from 'classnames';

export enum calloutState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

export interface LabelWithCalloutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** aria-label */
  ariaLabel?: string;
  calloutFloating?: boolean;
  className?: string;
  editable?: boolean;
  editFunction?: () => void;
  help?: string | JSX.Element;
  id?: any;
  inputSize?: 'small' | 'normal' | 'large';
  label?: string | JSX.Element;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  onRenderLabel?: any;
  readOnly?: boolean;
  warning?: string | JSX.Element | undefined;
}
const LabelWithCallout = (props: LabelWithCalloutProps) => {
  const {
    calloutFloating = false,
    className,
    editable,
    editFunction,
    help,
    id,
    label,
    readOnly,
    warning,
    onRenderLabel,
    onCalloutToggle
  } = props;
  const styles = getClassNames({ calloutFloating, ...props });
  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
  const [currentCalloutState, setCurrentCalloutState] = React.useState(
    calloutState.CLOSED
  );
  const iconButtonElementRef = React.useRef<HTMLSpanElement>(null);
  const helpElement = React.isValidElement(help) ? help : <p>{help}</p>;
  const warningElement = React.isValidElement(warning) ? (
    warning
  ) : (
    <p>{warning}</p>
  );

  const toggleEvent = () => {
    if (onCalloutToggle) {
      const oldCalloutState = currentCalloutState;
      const newCalloutState = isCalloutVisible
        ? calloutState.CLOSED
        : calloutState.OPEN;
      setCurrentCalloutState(newCalloutState);
      onCalloutToggle(oldCalloutState, newCalloutState);
    }
    return;
  };
  return onRenderLabel ? (
    onRenderLabel
  ) : (
    <div
      id={id}
      aria-label={label}
      className={classnames(styles.labelArea, className)}
    >
      <span className={styles.label}>
        {label ? <Label>{label}</Label> : null}
      </span>
      {help && !warning && (
        <span className={styles.labelIconArea} ref={iconButtonElementRef}>
          <IconButton
            iconProps={{ iconName: 'HelpOutline' }}
            title="Hjelp"
            ariaLabel={'Åpne hjelp'}
            onClick={() => {
              setIsCalloutVisible(!isCalloutVisible);
              toggleEvent();
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
            ariaLabel={'Åpne varsel'}
            onClick={() => {
              setIsCalloutVisible(!isCalloutVisible);
              toggleEvent();
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
              aria-labelledby={label + ' endre'}
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
            calloutFloating ? Callout.POS_BOTTOM_LEFT : Callout.POS_TOP_LEFT
          }
          color={help && !warning ? Callout.HELP : Callout.WARNING}
          aria-labelledby={
            label + (help && !warning ? ' hjelpetekst' : ' varseltekst')
          }
          target={iconButtonElementRef.current}
          onClose={() => {
            setIsCalloutVisible(false);
            toggleEvent();
          }}
        >
          {help && !warning ? helpElement : warningElement}
        </Callout>
      )}
    </div>
  );
};
export default LabelWithCallout;
