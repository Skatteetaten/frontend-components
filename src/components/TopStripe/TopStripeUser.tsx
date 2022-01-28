import React, { FC } from 'react';
import { getClassNames } from './TopStripe.classNames';
import { Icon } from '../Icon';
import { UseScreen } from '../utils';
import classnames from 'classnames';

interface TopStripeUserProps {
  name: string;
  showOnMobile?: boolean;
  className?: string;
}

export const TopStripeUser: FC<TopStripeUserProps> = (props) => {
  const styles = getClassNames();
  const { name, showOnMobile = true, className } = props;

  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <div
      data-testid={'topstripe-user'}
      className={classnames(styles.topStripeUser, className)}
    >
      <Icon iconName="person" />
      <div>{name}</div>
    </div>
  );
};
