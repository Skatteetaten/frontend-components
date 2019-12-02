import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';

interface TopStripeProps {
  children?: JSX.Element;
  open?: () => void;
  setOpen?: any;
}

const TopStripeContext = React.createContext<TopStripeProps>({});
export const TopStripeConsumer = TopStripeContext.Consumer;

const TopStripe: React.FC<TopStripeProps> = props => {
  const [open, setOpenIndex] = React.useState();
  const setOpen = num => {
    if (open === num) {
      setOpenIndex(null);
    } else {
      setOpenIndex(num);
    }
  };
  const styles = getClassNames();
  const { children, ...rest } = props;
  return (
    <TopStripeContext.Provider
      value={{
        open: open,
        setOpen: setOpen
      }}
    >
      <ul className={styles.container} {...rest}>
        {React.Children.map(children, (child, index) => {
          return <li>{React.cloneElement(child, { index })}</li>;
        })}
      </ul>
    </TopStripeContext.Provider>
  );
};
export default TopStripe;
