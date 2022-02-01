import * as React from 'react';
import { getClassNames } from './LabelWithCallout.classNames';
import { IconButton } from '@fluentui/react';
import { Callout } from '../Callout';
import { calloutState, LabelWithCalloutProps } from './LabelWithCallout.types';

/*
 * visibleName LabelWithCallout (Merkelapp med utropsboks)
 */
export const LabelWithCallout = (props: LabelWithCalloutProps) => {
  const {
    id,
    inputId,
    label,
    ariaLabel,
    buttonAriaLabel,
    buttonTitle,
    calloutFloating = false,
    customClassNames,
    editable,
    requiredMark,
    editFunction,
    help,
    inFieldset,
    readOnly,
    warning,
    onRenderLabel,
    onCalloutToggle,
    calloutProps,
  } = props;
  const styles = getClassNames({ calloutFloating, ...props });
  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
  const [currentCalloutState, setCurrentCalloutState] = React.useState(
    calloutState.CLOSED
  );
  const iconButtonElementRef = React.useRef<HTMLSpanElement>(null);
  const helpElement = React.isValidElement(help) ? (
    help
  ) : (
    <p className={customClassNames?.helpPragraph ?? ''}>{help}</p>
  );
  const warningElement = React.isValidElement(warning) ? (
    warning
  ) : (
    <p className={customClassNames?.warningPragraph ?? ''}>{warning}</p>
  );

  const requiredSymbol = requiredMark ? ' *' : '';

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
      <div
        className={`${styles.calloutLabelWrapper} ${
          customClassNames?.wrapper ?? ''
        }`}
      >
        {inFieldset ? (
          label ? (
            <legend
              id={id}
              className={`${styles.labelAsLegend} ${
                customClassNames?.legend ?? ''
              }`}
              aria-label={ariaLabel}
            >
              {label + requiredSymbol}
            </legend>
          ) : null
        ) : label ? (
          <label
            id={id}
            htmlFor={inputId}
            className={`${styles.label} ${customClassNames?.label ?? ''}`}
            aria-label={ariaLabel}
          >
            {label + requiredSymbol}
          </label>
        ) : null}

        {help && !warning && (
          <span className={styles.labelIconArea} ref={iconButtonElementRef}>
            <IconButton
              title={buttonTitle ? buttonTitle : 'Hjelp'}
              iconProps={{ iconName: 'HelpOutline' }}
              className={`${styles.icon} ${customClassNames?.helpicon ?? ''}`}
              onClick={() => {
                setIsCalloutVisible(!isCalloutVisible);
                toggleEvent();
              }}
              aria-describedby={id}
              ariaLabel={buttonAriaLabel ? buttonAriaLabel : 'Hjelp'}
              aria-expanded={isCalloutVisible}
            />
          </span>
        )}
        {warning && (
          <span className={styles.labelIconArea} ref={iconButtonElementRef}>
            <IconButton
              title={buttonTitle ? buttonTitle : 'Varsel'}
              iconProps={{ iconName: 'WarningOutline' }}
              className={`${styles.warningicon} ${
                customClassNames?.warningicon ?? ''
              }`}
              onClick={() => {
                setIsCalloutVisible(!isCalloutVisible);
                toggleEvent();
              }}
              aria-describedby={id}
              ariaLabel={buttonAriaLabel ? buttonAriaLabel : 'Varsel'}
              aria-expanded={isCalloutVisible}
            />
          </span>
        )}
        {readOnly && (
          <span
            className={`${styles.labelIconArea} ${
              customClassNames?.readonlyarea ?? ''
            }`}
          >
            {editable && (
              <IconButton
                title={buttonTitle ? buttonTitle : 'Rediger'}
                iconProps={{ iconName: 'Edit' }}
                className={`${styles.icon} ${customClassNames?.editicon ?? ''}`}
                aria-describedby={id}
                ariaLabel={buttonAriaLabel ? buttonAriaLabel : 'Rediger'}
                aria-expanded={isCalloutVisible}
                onClick={editFunction}
              />
            )}
          </span>
        )}
      </div>

      {isCalloutVisible && (
        <Callout
          {...calloutProps}
          ref={
            calloutProps?.ref as React.RefObject<Callout> &
              React.RefObject<HTMLDivElement>
          }
          className={`${styles.calloutContext} ${
            customClassNames?.callout ?? ''
          }`}
          color={help && !warning ? Callout.HELP : Callout.WARNING}
          target={iconButtonElementRef.current}
          directionalHint={
            calloutFloating ? Callout.POS_BOTTOM_LEFT : Callout.POS_TOP_LEFT
          }
          onClose={() => {
            setIsCalloutVisible(false);
            toggleEvent();
          }}
          onDismiss={() => {
            if (calloutProps?.autoDismiss) {
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
};
