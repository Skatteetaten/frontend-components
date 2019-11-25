import * as React from 'react';
import { getClassNames } from './LabelWithCallout.classNames';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import Callout from '../Callout';
import { isUndefined } from 'util';
import classnames from 'classnames';

export interface LabelWithCalloutProps
  extends React.HTMLAttributes<HTMLDivElement> {
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
  onRenderLabel?: any;
  /** aria-label */
  ariaLabel?: string;
  /** Brukerspesifisert event for callout **/
  userDefinedEvent?: () => void;
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
    warning,
    onRenderLabel,
    ariaLabel,
    userDefinedEvent
  } = props;
  const styles = getClassNames(props);

  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
  const iconButtonElementRef = React.useRef<HTMLSpanElement>(null);
  const inputSizeLarge = inputSize === 'large';

  const helpElement = React.isValidElement(help) ? help : <p>{help}</p>;
  const warningElement = React.isValidElement(warning) ? (
    warning
  ) : (
    <p>{warning}</p>
  );

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
              if (userDefinedEvent) {
                userDefinedEvent();
              }
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
