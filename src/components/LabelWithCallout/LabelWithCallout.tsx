import * as React from 'react';
import { getClassNames } from './LabelWithCallout.classNames';
import { IconButton } from '@fluentui/react';
import { Callout } from '../Callout';
import classnames from 'classnames';
import { calloutState, LabelWithCalloutProps } from './LabelWithCallout.types';

/**
 * @visibleName LabelWithCallout _MerkelappMedUtropsboks_
 */
export const LabelWithCallout = (props: LabelWithCalloutProps) => {
  const {
    ariaLabel,
    autoDismiss,
    border,
    buttonAriaLabel,
    buttonTitle,
    calloutFloating = false,
    className,
    editable,
    editFunction,
    help,
    id,
    inputId,
    inFieldset,
    label,
    readOnly,
    warning,
    onRenderLabel,
    onCalloutToggle,
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
    <>
      <div className={styles.calloutLabelWrapper}>
        {inFieldset ? (
          label ? (
            <legend
              aria-label={ariaLabel}
              id={id}
              className={classnames(styles.labelAsLegend, className)}
            >
              {label}
            </legend>
          ) : null
        ) : label ? (
          <label
            id={id}
            htmlFor={inputId}
            aria-label={ariaLabel}
            className={classnames(styles.label, className)}
          >
            {label}
          </label>
        ) : null}

        {help && !warning && (
          <span className={styles.labelIconArea} ref={iconButtonElementRef}>
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title={buttonTitle ? buttonTitle : 'Hjelp'}
              aria-describedby={id}
              ariaLabel={buttonAriaLabel ? buttonAriaLabel : 'Hjelp'}
              aria-expanded={isCalloutVisible}
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
              title={buttonTitle ? buttonTitle : 'Varsel'}
              aria-describedby={id}
              ariaLabel={buttonAriaLabel ? buttonAriaLabel : 'Varsel'}
              aria-expanded={isCalloutVisible}
              onClick={() => {
                setIsCalloutVisible(!isCalloutVisible);
                toggleEvent();
              }}
              className={styles.warningicon}
            />
          </span>
        )}
        {readOnly && (
          <span className={styles.labelIconArea}>
            {editable && (
              <IconButton
                iconProps={{ iconName: 'Edit' }}
                title={buttonTitle ? buttonTitle : 'Rediger'}
                aria-describedby={id}
                ariaLabel={buttonAriaLabel ? buttonAriaLabel : 'Rediger'}
                aria-expanded={isCalloutVisible}
                onClick={editFunction}
                className={styles.icon}
              />
            )}
          </span>
        )}
      </div>
      {isCalloutVisible && (
        <Callout
          className={styles.calloutContext}
          border={border}
          directionalHint={
            calloutFloating ? Callout.POS_BOTTOM_LEFT : Callout.POS_TOP_LEFT
          }
          color={help && !warning ? Callout.HELP : Callout.WARNING}
          target={iconButtonElementRef.current}
          onClose={() => {
            setIsCalloutVisible(false);
            toggleEvent();
          }}
          autoDismiss={autoDismiss}
          onDismiss={() => {
            if (autoDismiss) {
              setIsCalloutVisible(false);
              toggleEvent();
            }
          }}
        >
          {help && !warning ? helpElement : warningElement}
        </Callout>
      )}
    </>
  );

  /*  return onRenderLabel ? (
    onRenderLabel
  ) : inFieldset ? (
    <legend className={styles.labelArea}>{label}</legend>
  ) : (
    <div
      
      aria-label={ariaLabel}
      className={classnames(styles.labelArea, className)}
    >
      <span className={styles.label}>
        {label ? <Label>{label}</Label> : null}
      </span>
      
    </div>
  ); */
};
