import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';

interface TopStripeProps {
  children?: JSX.Element;
}

const TopStripe: React.FC<TopStripeProps> = props => {
  const styles = getClassNames();
  const { children, ...rest } = props;
  return (
    <ul className={styles.container} {...rest}>
      {React.Children.map(children, child => {
        return <li>{child}</li>;
      })}
    </ul>
  );
};
export default TopStripe;
