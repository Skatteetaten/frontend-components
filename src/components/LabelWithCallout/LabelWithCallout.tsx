import * as React from 'react';
import { getClassNames } from './LabelWithCallout.classNames';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import Callout from '../Callout';
import { isUndefined } from 'util';
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
  className?: string | undefined;
  editable?: boolean;
  editFunction?: () => void;
  help?: string | JSX.Element | undefined;
  id?: any;
  inputSize?: 'small' | 'normal' | 'large';
  label?: string | JSX.Element | undefined;
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
    className,
    editable,
    editFunction,
    help,
    id,
    inputSize,
    label,
    readOnly,
    warning,
    onRenderLabel,
    ariaLabel,
    onCalloutToggle
  } = props;
  const calloutFloating = typeof props.calloutFloating === 'undefined' ? true : props.calloutFloating;
  const styles = getClassNames({calloutFloating, ...props});
  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
  const [currentCalloutState, setCurrentCalloutState] = React.useState(
    calloutState.CLOSED
  );
  const iconButtonElementRef = React.useRef<HTMLSpanElement>(null);
  const inputSizeLarge = inputSize === 'large';
  const helpElement = React.isValidElement(help) ? help : <p>{help}</p>;
  const warningElement = React.isValidElement(warning) ? (
    warning
  ) : (
    <p>{warning}</p>
  );

  const toggleEvent = () => {
    if (onCalloutToggle) {
      const oldCalloutState = currentCalloutState;
      const newCalloutState =
        currentCalloutState === calloutState.OPEN
          ? calloutState.CLOSED
          : calloutState.OPEN;
      setCurrentCalloutState(newCalloutState);
      return onCalloutToggle(oldCalloutState, newCalloutState);
    }
    return;
  };

  return onRenderLabel ? (
    onRenderLabel
  ) : (
    <div
      id={id}
      aria-label={ariaLabel}
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
            ariaLabel={'help'}
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
            ariaLabel={'warning'}
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
          directionalHint={calloutFloating
              ? Callout.POS_BOTTOM_LEFT
              : Callout.POS_TOP_LEFT
          }
          color={help && !warning ? Callout.HELP : Callout.WARNING}
          ariaLabel={help && !warning ? 'Hjelpetekst' : 'Varseltekst'}
          target={iconButtonElementRef.current}
          onClose={() => setIsCalloutVisible(false)}
        >
          {help && !warning ? helpElement : warningElement}
        </Callout>
      )}
    </div>
  );
};
export default LabelWithCallout;
