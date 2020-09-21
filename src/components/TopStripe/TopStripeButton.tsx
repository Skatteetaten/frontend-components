import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './TopStripe.classNames';
import { UseScreen } from '../index';

export interface TopStripeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** @ignore Får ekstra stil fra toppstripe */
  topStripeStyle?: string;
  showOnMobile?: boolean;
  className?: string;
  ariaLabel?: string;
  text?: string;
}

export const TopStripeButton: React.FC<TopStripeButtonProps> = (props) => {
  const {
    topStripeStyle,
    showOnMobile = false,
    className,
    ariaLabel,
    text,
    ...rest
  } = props;

  const styles = getClassNames();
  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classnames(styles.topStripeButton, className)}
      style={{ cursor: 'pointer' }}
      {...rest}
    >
      {text || props.children}
    </button>
  );
};
