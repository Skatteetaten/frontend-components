import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './TopStripeButton.classNames';
import { UseScreen } from '../../utils';
import { TopStripeButtonProps } from '../TopStripe.types';

/*
 * visibleName TopStripeButton (Toppstripe-knapp)
 */
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
      className={classnames(className, styles.topStripeButton, topStripeStyle)}
      style={{ cursor: 'pointer' }}
      {...rest}
    >
      {text || props.children}
    </button>
  );
};
